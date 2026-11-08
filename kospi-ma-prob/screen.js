/* 이평선 강도 스크리너 — 정적 JSON 렌더
 *
 * 매 거래일 배치(export_ma_prob_screen.py)가 두 파일을 만든다:
 *   screen.json       네 강도가 모두 양수인 종목
 *   screen.down.json  네 강도가 모두 음수인 종목
 * 여기서는 방향 전환·정렬·필터·표시만 한다. 데이터가 없으면 빈 표 대신 오류를
 * 표시하고, 이미 받은 방향은 다시 내려받지 않는다.
 *
 * 음수 화면에만 있는 차이 두 가지:
 *   - '최저' 열 대신 '최고'(0에 가장 가까운 값) 열을 쓴다. 등급 기준이 그 값이다.
 *   - 등급 색을 반전해 강한 하락을 위험 색으로 표시한다.
 */
(function () {
  'use strict';

  var GRADES = ['강', '중', '약', '미미'];
  // '전체'는 등급 필터를 걸지 않은 상태를 뜻한다(한 번에 하나만 선택).
  var ALL = '전체';
  var SOURCES = { up: 'screen.json', down: 'screen.down.json', turn: 'screen.turn.json' };
  var DIR_LABEL = { up: '양의 방향', down: '음의 방향', turn: '60·120 전환' };
  // 전환 화면에는 MA5/MA20 행이 없다 — 두 지평만 본다.
  var COLS = {
    up: ['5', '20', '60', '120'],
    down: ['5', '20', '60', '120'],
    turn: ['60', '120']
  };
  var state = {
    data: null,
    rows: [],
    dir: 'up',
    cache: {},
    sortKey: 'cap',
    sortDir: -1,
    activeGrade: ALL,
    capFloor: 0,
    query: '',
    // 전환 탭 전용: 예상 후보를 몇 거래일 이내로 볼지, 최소 |강도| 는 얼마인지.
    soonMax: 5,
    soonMinStrength: 0
  };

  function $(id) { return document.getElementById(id); }

  function fmtPct(v) {
    if (v === null || v === undefined || isNaN(v)) return '—';
    return (v > 0 ? '+' : '') + Number(v).toFixed(1);
  }

  function fmtCap(v) {
    if (!v) return '—';
    if (v >= 1) return v.toFixed(1) + '조';
    return Math.round(v * 10000).toLocaleString('ko-KR') + '억';
  }

  function escapeHtml(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function pctClass(v) { return v > 0 ? 'pos' : (v < 0 ? 'neg' : ''); }

  // CSS 클래스는 ASCII만 쓴다. encodeURIComponent('강')은 '%EA%B0%95'가 되어
  // '.g-%EA%B0%95' 셀렉터가 무효가 되고 스타일이 통째로 빠진다.
  var GRADE_SLUG = { '강': 'g1', '중': 'g2', '약': 'g3', '미미': 'g4' };

  function gradeClass(g, dir) {
    var slug = GRADE_SLUG[g] || 'gx';
    return slug + (dir === 'down' ? ' down' : '');
  }

  function isDown() { return state.dir === 'down'; }
  function isTurn() { return state.dir === 'turn'; }
  function cols() { return COLS[state.dir] || COLS.up; }

  function filtered() {
    var q = state.query.trim().toLowerCase();
    var floor = state.capFloor;
    return state.rows.filter(function (r) {
      if (state.activeGrade !== ALL && r.g !== state.activeGrade) return false;
      if (floor === -1 && r.cap < 0.3) return false;      // 3,000억 미만 제외
      if (floor > 0 && r.cap < floor) return false;
      if (isTurn() && !passesSoon(r)) return false;
      if (q) {
        var hit = r.t.indexOf(q) === 0 || (r.n && r.n.toLowerCase().indexOf(q) !== -1);
        if (!hit) return false;
      }
      return true;
    });
  }

  // 전환 탭: 이미 전환(state=turn)은 항상 남기고, 예상(soon)만 사용자가 고른 조건으로 거른다.
  // 예상은 '지금 속도가 유지되면'이라는 가정이라 |강도| 가 작으면 쉽게 뒤집힌다.
  function soonDays(r) {
    var best = null;
    ['60', '120'].forEach(function (p) {
      var v = (r.r && r.r[p]);
      if (v === null || v === undefined) return;
      if (best === null || v < best) best = v;
    });
    return best;
  }

  function soonStrength(r) {
    return Math.min(Math.abs(r.p['60']), Math.abs(r.p['120']));
  }

  function passesSoon(r) {
    if (r.state === 'turn') return true;      // 이미 전환된 종목은 필터와 무관
    var days = soonDays(r);
    if (days === null || days > state.soonMax) return false;
    return soonStrength(r) >= state.soonMinStrength;
  }

  // 도달 예상: 네 축 중 0에 가장 빨리 닿는 축과 그 거래일. 계산이지 예측이 아니다.
  function reachInfo(r) {
    var best = null;
    cols().forEach(function (p) {
      var ax = (r.a && r.a[p]) || {};
      if (ax.reach === null || ax.reach === undefined) return;
      if (!best || ax.reach < best.days) best = { days: ax.reach, axis: p };
    });
    return best;
  }

  function reachCell(r) {
    var info = reachInfo(r);
    if (!info) return '<td class="num muted" title="현재 속도로는 0에서 멀어지는 중">—</td>';
    var cls = info.days <= 3 ? 'soon' : (info.days <= 10 ? 'near' : 'far');
    var need = (r.a[info.axis] || {}).need;
    var needTxt = (need === null || need === undefined) ? '' :
      '<span class="need">' + (need > 0 ? '+' : '') + need.toFixed(1) + '%/일</span>';
    return '<td class="num ' + cls + '" title="MA' + info.axis + ' 축 · 현재 속도 유지 가정(계산값, 예측 아님)">' +
      info.days.toFixed(1) + '일' + needTxt + '</td>';
  }

  function sortValue(r, key) {
    switch (key) {
      case 'cap': return r.cap;
      case 'grade': return GRADES.indexOf(r.g) === -1 ? 99 : GRADES.indexOf(r.g);
      case 'p5': return r.p['5'];
      case 'p20': return r.p['20'];
      case 'p60': return r.p['60'];
      case 'p120': return r.p['120'];
      case 'edge': return isDown() ? r.hi : r.lo;
      case 'state': return r.state === 'turn' ? 0 : 1;
      case 'k60': return r.k60 === null || r.k60 === undefined ? 999 : r.k60;
      case 'k120': return r.k120 === null || r.k120 === undefined ? 999 : r.k120;
      case 'reach': var ri = reachInfo(r); return ri ? ri.days : 9999;
      case 'close': return r.c;
      default: return 0;
    }
  }

  function buildHead() {
    var turn = isTurn();
    var head = '<tr><th class="num">#</th><th>종목</th>' +
      '<th class="sortable" data-k="cap">시가총액<span class="arrow"></span></th>' +
      (turn ? '' : '<th class="sortable" data-k="grade">등급<span class="arrow"></span></th>') +
      cols().map(function (p) {
        return '<th class="sortable num" data-k="p' + p + '">MA' + p +
          '<span class="arrow"></span></th>';
      }).join('') +
      (turn ? '<th class="sortable" data-k="state">구분<span class="arrow"></span></th>' +
              '<th class="num sortable" data-k="k60">60전환<span class="arrow"></span></th>' +
              '<th class="num sortable" data-k="k120">120전환<span class="arrow"></span></th>'
            : '<th class="num sortable" data-k="edge" title="가장 낮은 강도 (등급 기준)">최저<span class="arrow"></span></th>' +
              '<th class="num sortable" data-k="reach" title="현재 속도가 유지된다고 가정할 때 0에 닿는 예상 거래일(계산값)">도달(추정)<span class="arrow"></span></th>') +
      '<th class="num sortable" data-k="close">종가<span class="arrow"></span></th></tr>';
    var thead = document.querySelector('#grid thead');
    thead.innerHTML = head;
    // 정렬 핸들러는 thead를 다시 그릴 때마다 새로 붙인다.
    thead.querySelectorAll('th.sortable').forEach(function (th) {
      th.addEventListener('click', function () {
        var k = th.getAttribute('data-k');
        if (state.sortKey === k) {
          state.sortDir = -state.sortDir;
        } else {
          state.sortKey = k;
          state.sortDir = (k === 'grade' || k === 'k60' || k === 'k120') ? 1 : -1;
        }
        render();
      });
    });
  }

  function render() {
    var down = isDown();
    var rows = filtered();
    rows.sort(function (a, b) {
      var d = sortValue(a, state.sortKey) - sortValue(b, state.sortKey);
      if (d === 0) d = a.cap - b.cap;
      return d * state.sortDir;
    });

    // 방향에 따라 헤더 문구를 바꾼다 (최저 ↔ 최고)
    var edgeTh = document.querySelector('#grid th[data-k="edge"]');
    if (edgeTh) {
      edgeTh.childNodes[0].nodeValue = down ? '최고' : '최저';
      edgeTh.title = down ? '0에 가장 가까운 강도 (등급 기준)' : '가장 낮은 강도 (등급 기준)';
    }

    var tbody = document.querySelector('#grid tbody');
    var turn = isTurn();
    tbody.innerHTML = rows.map(function (r, i) {
      var stale = r.stale ? ' <span class="stale" title="마지막 거래일 ' + r.d + '">(휴장)</span>' : '';
      var cells = '<td class="num muted">' + (i + 1) + '</td>' +
        '<td><a href="stocks-app.html?code=' + r.t + '">' + escapeHtml(r.n) + '</a>' +
          ' <span class="code">' + r.t + '</span>' +
          ' <span class="tag">' + escapeHtml(r.m || '') + '</span>' + stale + '</td>' +
        '<td class="num">' + fmtCap(r.cap) + '</td>' +
        (turn ? '' : '<td><span class="grade ' + gradeClass(r.g, state.dir) + '">' +
          escapeHtml(r.g) + '</span></td>');
      cells += cols().map(function (p) {
        var ax = (r.a && r.a[p]) || {};
        var vel = ax.v;
        // 속도: 5일간 강도 변화(포인트). ±0.5p 미만은 보합으로 본다(백테스트에서 유의미한 구분이 없던 구간).
        // v > 0 = 0을 향해 움직임(▲), v < 0 = 0에서 멀어짐(▼).
        var dir = (vel === null || vel === undefined) ? 'flat'
                : (vel > 0.5 ? 'toward' : (vel < -0.5 ? 'away' : 'flat'));
        var arrow = dir === 'toward' ? '▲' : (dir === 'away' ? '▼' : '·');
        var tip = [];
        if (vel !== null && vel !== undefined) {
          tip.push('5일 강도 변화 ' + (vel > 0 ? '+' : '') + vel.toFixed(1) + 'p ' +
                   (vel > 0 ? '(0에 접근)' : '(0에서 이탈)'));
        }
        if (ax.reach !== null && ax.reach !== undefined) {
          tip.push('현재 속도 유지 시 ' + ax.reach.toFixed(1) + '거래일 뒤 0 도달(추정)');
          if (ax.need !== null && ax.need !== undefined) {
            tip.push('그러려면 종가가 하루 ' + (ax.need > 0 ? '+' : '') + ax.need.toFixed(2) + '% 필요');
          }
        } else if (vel !== null && vel !== undefined) {
          tip.push('0에서 멀어지는 중');
        }
        return '<td class="num ' + pctClass(r.p[p]) + '" title="' + escapeHtml(tip.join(' · ')) + '">' +
          fmtPct(r.p[p]) + '<span class="vel ' + dir + '">' + arrow + '</span></td>';
      }).join('');
      if (turn) {
        // 구분: 전환 = 이미 양전, 예상 = 음수지만 5일 내 0 도달(속도 유지 가정).
        if (r.state === 'turn') {
          cells += '<td><span class="tag turn">전환</span></td>';
        } else {
          var d = soonDays(r);
          cells += '<td><span class="tag soon" title="현재 속도 유지 가정에서 ' +
            (d === null ? '—' : d.toFixed(1)) + '거래일 뒤 0 도달(계산값, 예측 아님)">예상</span>' +
            '<span class="code">' + (d === null ? '' : d.toFixed(1) + '일') + '</span></td>';
        }
        // 전환 후 경과일. 오늘이 전환일이면 0. 흐린 색은 이력 내 계속 양수(None)다.
        cells += ['k60', 'k120'].map(function (k) {
          var v = r[k];
          var axis = k === 'k60' ? '60' : '120';
          if (v === null || v === undefined) {
            // 아직 음수인 축이면 '계속 양수'가 아니라 '아직 전환 전'이다.
            var neg = r.p[axis] <= 0;
            return neg
              ? '<td class="num muted" title="MA' + axis + ' 는 아직 음수 — 전환 전">—</td>'
              : '<td class="num muted" title="최근 15거래일 동안 계속 양수">›15</td>';
          }
          var fresh = v <= 5 ? ' fresh' : '';
          return '<td class="num' + fresh + '">' + v + '일</td>';
        }).join('');
      } else {
        cells += '<td class="num mono">' + fmtPct(down ? r.hi : r.lo) + '</td>';
        cells += reachCell(r);
      }
      cells += '<td class="num">' + Number(r.c).toLocaleString('ko-KR') + '</td>';
      return '<tr>' + cells + '</tr>';
    }).join('');

    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="' + (turn ? 9 : 11) +
        '" class="empty">조건에 맞는 종목이 없습니다.</td></tr>';
    }

    var byGrade = {};
    GRADES.forEach(function (g) { byGrade[g] = 0; });
    state.rows.forEach(function (r) { byGrade[r.g] = (byGrade[r.g] || 0) + 1; });
    var dist;
    if (turn) {
      var zero = state.rows.filter(function (r) {
        return r.k60 === 0 || r.k120 === 0;
      }).length;
      var both = state.rows.filter(function (r) {
        return r.k60 !== null && r.k120 !== null;
      }).length;
      var stale = state.rows.length - both;
      dist = (zero ? '오늘 전환 <strong>' + zero + '</strong>종목 · ' : '') +
        '둘 다 5일 내 ' + both + '종목 · 한 축만 5일 내 ' + stale + '종목(다른 축은 이미 양수) · ' +
        '기준 ' + (state.data.window_days || 5) + '거래일';
    } else if (state.activeGrade === ALL) {
      dist = GRADES.map(function (g) {
        return '<span class="grade ' + gradeClass(g, state.dir) + '">' + g + '</span> ' + (byGrade[g] || 0);
      }).join(' · ');
    } else {
      dist = '<span class="grade ' + gradeClass(state.activeGrade, state.dir) + '">' +
        escapeHtml(state.activeGrade) + '</span> ' + (byGrade[state.activeGrade] || 0) + '종목';
    }
    $('summary').innerHTML = (turn ? '60·120 전환 · ' : (down ? '음의 방향 · ' : '양의 방향 · ')) +
      '표시 <strong>' + rows.length + '</strong> / 전체 ' + state.rows.length + '종목 · ' + dist;

    document.querySelectorAll('#grid th.sortable').forEach(function (th) {
      var arrow = th.querySelector('.arrow');
      if (!arrow) return;
      arrow.textContent = th.getAttribute('data-k') === state.sortKey
        ? (state.sortDir < 0 ? ' ▼' : ' ▲') : '';
    });
    updateHead();
  }

  // 방향에 맞춰 문서 제목·설명·상단 라디오를 갱신한다.
  function updateHead() {
    var down = isDown();
    document.title = '이평선 강도 스크리너 — ' + DIR_LABEL[state.dir];
    $('dirNote').innerHTML = isTurn()
      ? 'MA 60·120일 <strong>상승 강도가 둘 다 양수</strong>이면서, 그중 <strong>하나 이상이 최근 5거래일 안에 ' +
        '음에서 양으로 전환</strong>한 종목입니다. 전환일은 이 페이지의 강도식 기준 실제 부호 전환일이며 ' +
        '이동평균선 돌파와는 다릅니다.<span class="bands">등급 없음 · 시가총액순 · 전환일 열은 경과 거래일</span>'
      : down
      ? 'MA 5·20·60·120일 <strong>상승 강도가 모두 음수</strong>인 종목입니다. 등급은 ' +
        '<strong>0에 가장 가까운 값</strong>으로 매기므로, <strong>강</strong>은 네 축이 모두 −20% 이하인 ' +
        '완전한 하락 정렬입니다.<span class="bands">강 ≤−20% · 중 ≤−10% · 약 ≤−5% · 미미 &gt;−5%</span>'
      : 'MA 5·20·60·120일 <strong>상승 강도가 모두 양수</strong>인 종목입니다. 등급은 ' +
        '<strong>가장 낮은 값</strong>으로 매기므로, 한 축이라도 약하면 등급이 내려갑니다.' +
        '<span class="bands">강 ≥20% · 중 ≥10% · 약 ≥5% · 미미 &lt;5%</span>';
    document.querySelectorAll('#dirChips button[data-d]').forEach(function (btn) {
      var on = btn.getAttribute('data-d') === state.dir;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-checked', on ? 'true' : 'false');
    });
    document.body.classList.toggle('down-mode', down);
    // 예상 필터는 전환 탭에서만 의미가 있다.
    var turnOn = isTurn();
    ['soonDaysWrap', 'soonMinWrap'].forEach(function (id) {
      var el = $(id);
      if (el) el.hidden = !turnOn;
    });
  }

  function setDirection(dir) {
    if (state.dir === dir) return;
    state.dir = dir;
    state.capFloor = 0;
    var capFloor = $('capFloor');
    if (capFloor) capFloor.value = '0';
    // 열 구성이 방향마다 다르므로(전환은 60/120만) 헤더를 새로 만든다.
    if (dir === 'turn') state.sortKey = 'cap';
    state.sortDir = -1;
    buildHead();
    load();
  }

  function load() {
    var dir = state.dir;
    if (state.cache[dir]) {
      state.data = state.cache[dir];
      state.rows = state.data.rows || [];
      showMeta();
      // 등급은 방향이 바뀌면 의미가 달라지므로 '전체'로 초기화
      state.activeGrade = ALL;
      syncChips();
      render();
      return;
    }
    var status = $('meta');
    status.className = 'meta';
    status.textContent = (dir === 'down' ? '음의 방향' : '양의 방향') + ' 데이터 불러오는 중…';
    fetch(SOURCES[dir], { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        state.cache[dir] = data;
        // 응답이 도착하는 사이 사용자가 방향을 다시 바꿨을 수 있다.
        if (state.dir !== dir) return;
        state.data = data;
        state.rows = data.rows || [];
        state.activeGrade = ALL;
        syncChips();
        showMeta();
        render();
      })
      .catch(function (err) {
        if (state.dir !== dir) return;
        status.textContent = (dir === 'down' ? '음의 방향' : '양의 방향') +
          ' 데이터를 불러오지 못했습니다: ' + err.message;
        status.className = 'meta warn';
      });
  }

  function showMeta() {
    var d = state.data;
    $('meta').className = 'meta';
    $('meta').textContent = '기준일 ' + d.latest_trade_date + ' · ' + state.rows.length +
      '종목 · 시가총액 단위 ' + d.market_cap_unit;
  }

  function initDirection() {
    var box = $('dirChips');
    box.setAttribute('role', 'radiogroup');
    box.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-d]');
      if (!btn) return;
      setDirection(btn.getAttribute('data-d'));
    });
    box.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var order = ['up', 'down', 'turn'];
      var i = order.indexOf(state.dir);
      var next = order[(i + (e.key === 'ArrowRight' ? 1 : order.length - 1)) % order.length];
      setDirection(next);
      document.querySelector('#dirChips button[data-d="' + next + '"]').focus();
    });
  }

  function initChips() {
    var box = $('gradeChips');
    box.innerHTML = [ALL].concat(GRADES).map(function (g) {
      return '<button type="button" role="radio" aria-checked="false" class="chip" data-g="' + g + '">' +
        escapeHtml(g) + '</button>';
    }).join('');
    box.setAttribute('role', 'radiogroup');
    box.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-g]');
      if (!btn) return;
      var g = btn.getAttribute('data-g');
      // 이미 선택된 칩을 다시 눌러도 해제하지 않는다 — 항상 하나가 선택된 상태.
      if (g !== state.activeGrade) {
        state.activeGrade = g;
        syncChips();
        render();
      }
    });
    box.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var order = [ALL].concat(GRADES);
      var i = order.indexOf(state.activeGrade);
      var next = order[(i + (e.key === 'ArrowRight' ? 1 : order.length - 1)) % order.length];
      state.activeGrade = next;
      syncChips();
      render();
    });
    syncChips();
  }

  function syncChips() {
    var box = $('gradeChips');
    if (box) box.style.display = isTurn() ? 'none' : '';

    document.querySelectorAll('#gradeChips button[data-g]').forEach(function (btn) {
      var on = btn.getAttribute('data-g') === state.activeGrade;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-checked', on ? 'true' : 'false');
      // 등급 색은 방향에 따라 뒤집힌다(음의 '강'은 위험색).
      btn.className = 'chip' +
        (btn.getAttribute('data-g') === ALL ? '' : ' ' + gradeClass(btn.getAttribute('data-g'), state.dir)) +
        (on ? ' active' : '');
    });
  }

  function init() {
    initDirection();
    initChips();
    $('capFloor').addEventListener('change', function (e) {
      state.capFloor = Number(e.target.value);
      render();
    });
    $('soonDays').addEventListener('change', function (e) {
      state.soonMax = Number(e.target.value);
      render();
    });
    $('soonMin').addEventListener('change', function (e) {
      state.soonMinStrength = Number(e.target.value);
      render();
    });
    $('search').addEventListener('input', function (e) {
      state.query = e.target.value;
      render();
    });
    // URL ?dir=down 으로 음의 방향을 바로 열 수 있게 한다.
    buildHead();
    var wanted = new URLSearchParams(location.search).get('dir');
    if (wanted === 'down' || wanted === 'turn') setDirection(wanted);
    else load();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();