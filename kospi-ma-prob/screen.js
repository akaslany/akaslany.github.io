/* 이평선 확률 스크리너 — 정적 JSON 렌더
 *
 * 매 거래일 배치(export_ma_prob_screen.py)가 두 파일을 만든다:
 *   screen.json       네 확률이 모두 양수인 종목
 *   screen.down.json  네 확률이 모두 음수인 종목
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
  var SOURCES = { up: 'screen.json', down: 'screen.down.json' };
  var state = {
    data: null,
    rows: [],
    dir: 'up',
    cache: {},
    sortKey: 'cap',
    sortDir: -1,
    activeGrade: ALL,
    hideSpac: false,
    capFloor: 0,
    query: ''
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

  function filtered() {
    var q = state.query.trim().toLowerCase();
    var floor = state.capFloor;
    return state.rows.filter(function (r) {
      if (state.activeGrade !== ALL && r.g !== state.activeGrade) return false;
      if (state.hideSpac && r.spac) return false;
      if (floor === -1 && r.cap < 0.3) return false;      // 3,000억 미만 제외
      if (floor > 0 && r.cap < floor) return false;
      if (q) {
        var hit = r.t.indexOf(q) === 0 || (r.n && r.n.toLowerCase().indexOf(q) !== -1);
        if (!hit) return false;
      }
      return true;
    });
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
      case 'close': return r.c;
      default: return 0;
    }
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
      edgeTh.title = down ? '0에 가장 가까운 확률 (등급 기준)' : '가장 낮은 확률 (등급 기준)';
    }

    var tbody = document.querySelector('#grid tbody');
    tbody.innerHTML = rows.map(function (r, i) {
      var stale = r.stale ? ' <span class="stale" title="마지막 거래일 ' + r.d + '">(휴장)</span>' : '';
      return '<tr>' +
        '<td class="num muted">' + (i + 1) + '</td>' +
        '<td><a href="stocks-app.html?code=' + r.t + '">' + escapeHtml(r.n) + '</a>' +
          ' <span class="code">' + r.t + '</span>' +
          ' <span class="tag">' + escapeHtml(r.m || '') + '</span>' +
          (r.spac ? ' <span class="tag spac">스팩</span>' : '') + stale + '</td>' +
        '<td class="num">' + fmtCap(r.cap) + '</td>' +
        '<td><span class="grade ' + gradeClass(r.g, state.dir) + '">' + escapeHtml(r.g) + '</span></td>' +
        ['5', '20', '60', '120'].map(function (p) {
          return '<td class="num ' + pctClass(r.p[p]) + '">' + fmtPct(r.p[p]) + '</td>';
        }).join('') +
        '<td class="num mono">' + fmtPct(down ? r.hi : r.lo) + '</td>' +
        '<td class="num">' + Number(r.c).toLocaleString('ko-KR') + '</td>' +
        '</tr>';
    }).join('');

    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="10" class="empty">조건에 맞는 종목이 없습니다.</td></tr>';
    }

    var byGrade = {};
    GRADES.forEach(function (g) { byGrade[g] = 0; });
    state.rows.forEach(function (r) { byGrade[r.g] = (byGrade[r.g] || 0) + 1; });
    var dist = state.activeGrade === ALL
      ? GRADES.map(function (g) {
          return '<span class="grade ' + gradeClass(g, state.dir) + '">' + g + '</span> ' +
            (byGrade[g] || 0);
        }).join(' · ')
      : '<span class="grade ' + gradeClass(state.activeGrade, state.dir) + '">' +
        escapeHtml(state.activeGrade) + '</span> ' + (byGrade[state.activeGrade] || 0) + '종목';
    $('summary').innerHTML = (down ? '음의 방향 · ' : '양의 방향 · ') +
      '표시 <strong>' + rows.length + '</strong> / 전체 ' + state.rows.length + '종목 · ' + dist +
      (state.hideSpac ? ' · 스팩 제외' : '');

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
    document.title = (down ? '음의 방향' : '양의 방향') + ' 이평선 확률 스크리너';
    $('dirNote').innerHTML = down
      ? 'MA 5·20·60·120일 <strong>상승확률이 모두 음수</strong>인 종목입니다. 등급은 ' +
        '<strong>0에 가장 가까운 값</strong>으로 매기므로, <strong>강</strong>은 네 축이 모두 −20% 이하인 ' +
        '완전한 하락 정렬입니다.<span class="bands">강 ≤−20% · 중 ≤−10% · 약 ≤−5% · 미미 &gt;−5%</span>'
      : 'MA 5·20·60·120일 <strong>상승확률이 모두 양수</strong>인 종목입니다. 등급은 ' +
        '<strong>가장 낮은 값</strong>으로 매기므로, 한 축이라도 약하면 등급이 내려갑니다.' +
        '<span class="bands">강 ≥20% · 중 ≥10% · 약 ≥5% · 미미 &lt;5%</span>';
    document.querySelectorAll('#dirChips button[data-d]').forEach(function (btn) {
      var on = btn.getAttribute('data-d') === state.dir;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-checked', on ? 'true' : 'false');
    });
    document.body.classList.toggle('down-mode', down);
  }

  function setDirection(dir) {
    if (state.dir === dir) return;
    state.dir = dir;
    var gradeFloor = $('capFloor');
    if (gradeFloor) gradeFloor.value = '0';
    state.capFloor = 0;
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
      '종목 · 시가총액 단위 ' + d.market_cap_unit + ' · ' + d.price_basis;
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
      setDirection(state.dir === 'up' ? 'down' : 'up');
      document.querySelector('#dirChips button[data-d="' + state.dir + '"]').focus();
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
    $('hideSpac').addEventListener('change', function (e) {
      state.hideSpac = e.target.checked;
      render();
    });
    $('capFloor').addEventListener('change', function (e) {
      state.capFloor = Number(e.target.value);
      render();
    });
    $('search').addEventListener('input', function (e) {
      state.query = e.target.value;
      render();
    });
    document.querySelectorAll('#grid th.sortable').forEach(function (th) {
      th.addEventListener('click', function () {
        var k = th.getAttribute('data-k');
        if (state.sortKey === k) {
          state.sortDir = -state.sortDir;
        } else {
          state.sortKey = k;
          state.sortDir = k === 'grade' ? 1 : -1;
        }
        render();
      });
    });
    // URL ?dir=down 으로 음의 방향을 바로 열 수 있게 한다.
    var wanted = new URLSearchParams(location.search).get('dir');
    if (wanted === 'down') setDirection('down');
    else load();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
