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
  var KINDS = ['all', 'stock', 'etf', 'etn'];
  var SOURCES = {
    up: 'screen.json',
    down: 'screen.down.json',
    turn: 'screen.turn.json',
    'turn-down': 'screen.turn-down.json'
  };
  var DIR_LABEL = {
    up: '양의 방향',
    down: '음의 방향',
    turn: '60·120 상승전환',
    'turn-down': '60·120 하락전환'
  };
  var DIR_ORDER = ['up', 'down', 'turn', 'turn-down'];
  // 전환 화면에는 MA5/MA20 행이 없다 — 두 지평만 본다.
  var COLS = {
    up: ['5', '20', '60', '120'],
    down: ['5', '20', '60', '120'],
    turn: ['60', '120'],
    'turn-down': ['60', '120']
  };
  var state = {
    data: null,
    rows: [],
    dir: 'up',
    cache: {},
    loadSeq: 0,
    sortKey: 'cap',
    sortDir: -1,
    activeGrade: ALL,
    activeKind: 'all',
    capFloor: 0,
    query: '',
    // 전환 탭 전용: 예상 후보를 몇 거래일 이내로 볼지, 최소 |강도| 는 얼마인지.
    soonMax: 5,
    soonMinStrength: 0
  };

  function $(id) { return document.getElementById(id); }

  function isFiniteNum(v) {
    return typeof v === 'number' && isFinite(v);
  }

  function fmtPct(v) {
    if (v === null || v === undefined || v === '' || !isFinite(Number(v))) return '—';
    var n = Number(v);
    return (n > 0 ? '+' : '') + n.toFixed(1);
  }

  function fmtCap(v) {
    if (!v || !isFinite(Number(v))) return '—';
    var n = Number(v);
    if (n >= 1) return n.toFixed(1) + '조';
    return Math.round(n * 10000).toLocaleString('ko-KR') + '억';
  }

  function fmtClose(v) {
    if (v === null || v === undefined || v === '' || !isFinite(Number(v))) return '—';
    return Number(v).toLocaleString('ko-KR');
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
  function isTurnDown() { return state.dir === 'turn-down'; }
  function isTurn() { return state.dir === 'turn' || state.dir === 'turn-down'; }
  function cols() { return COLS[state.dir] || COLS.up; }

  function parseSoonMax(val) {
    if (val === '' || val === null || val === undefined ||
        val === 'all' || val === 'unlimited' || val === 'Infinity' || val === Infinity) {
      return Infinity;
    }
    var n = Number(val);
    return isFinite(n) && n > 0 ? n : Infinity;
  }

  function resetSoonInputs() {
    state.soonMax = 5;
    state.soonMinStrength = 0;
    var daysEl = $('soonDays');
    if (daysEl) daysEl.value = '5';
    var minEl = $('soonMin');
    if (minEl) minEl.value = '0';
  }

  function filtered() {
    var q = state.query.trim().toLowerCase();
    var floor = state.capFloor;
    return state.rows.filter(function (r) {
      if (state.activeKind !== 'all' && r.k !== state.activeKind) return false;
      if (state.activeGrade !== ALL && r.g !== state.activeGrade) return false;
      // 펀드의 시총 0/누락 때문에 유형 필터 결과가 사라지지 않게 종목에만 적용한다.
      if (r.k === 'stock' && floor === -1 && r.cap < 0.3) return false;
      if (r.k === 'stock' && floor > 0 && r.cap < floor) return false;
      if (isTurn() && !passesSoon(r)) return false;
      if (q) {
        var code = r.t === null || r.t === undefined ? '' : String(r.t).toLowerCase();
        var hit = code.indexOf(q) === 0 || (r.n && r.n.toLowerCase().indexOf(q) !== -1);
        if (!hit) return false;
      }
      return true;
    });
  }

  function axisConfirmAge(r, axis) {
    if (!state.data || state.data.turn_age_basis !== 'market_sessions' || r.state === 'soon') return null;
    var v = r['k' + axis];
    return isFiniteNum(v) && v >= 0 ? v : null;
  }

  function isFreshTurn(r, axis) {
    return axisConfirmAge(r, axis) === 0 && r.stale === 0 && r.d === state.data.latest_trade_date;
  }

  function isConfirmedRow(r) {
    return axisConfirmAge(r, '60') !== null || axisConfirmAge(r, '120') !== null;
  }

  function axisRawP(r, axis) {
    if (r.p_raw && Object.prototype.hasOwnProperty.call(r.p_raw, axis)) {
      return r.p_raw[axis];
    }
    return r.p ? r.p[axis] : null;
  }

  function axisEta(r, axis) {
    var v = r.r ? r.r[axis] : null;
    return isFiniteNum(v) && v > 0 ? v : null;
  }

  function axisPassesSoon(r, axis) {
    var eta = axisEta(r, axis);
    if (eta === null) return false;
    var maxAge = (state.soonMax === null || state.soonMax === undefined) ? Infinity : state.soonMax;
    if (eta > maxAge) return false;
    var raw = axisRawP(r, axis);
    if (!isFiniteNum(raw)) return false;
    return Math.abs(raw) >= state.soonMinStrength;
  }

  // 전환 탭: 확정 전환은 예상 필터와 무관하게 남기고, 예상(soon)만 같은 축의 기간·최소|원강도|를 함께 검사한다.
  function soonDays(r) {
    var bestQual = null;
    var bestAny = null;
    ['60', '120'].forEach(function (axis) {
      var v = axisEta(r, axis);
      if (v === null) return;
      if (bestAny === null || v < bestAny) bestAny = v;
      if (axisPassesSoon(r, axis) && (bestQual === null || v < bestQual)) bestQual = v;
    });
    return bestQual !== null ? bestQual : bestAny;
  }

  function passesSoon(r) {
    if (isConfirmedRow(r)) return true;      // 확정 전환 종목은 예상 필터와 무관
    return axisPassesSoon(r, '60') || axisPassesSoon(r, '120');
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
      case 'cap': return r.k === 'stock' ? r.cap : (r.v || 0);
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

  function turnSortTuple(r, key) {
    if (key === 'k60' || key === 'k120') {
      var kAxis = key === 'k60' ? '60' : '120';
      var age = axisConfirmAge(r, kAxis);
      if (age !== null) return { g: 0, v: age };
      var eta = axisEta(r, kAxis);
      if (eta !== null) return { g: 1, v: eta };
      return null;
    }
    if (key === 'r60' || key === 'r120') {
      var rAxis = key === 'r60' ? '60' : '120';
      var rEta = axisEta(r, rAxis);
      return rEta !== null ? { g: 0, v: rEta } : null;
    }
    if (key === 'p60' || key === 'p120') {
      var pAxis = key === 'p60' ? '60' : '120';
      var pv = r.p ? r.p[pAxis] : null;
      return isFiniteNum(pv) ? { g: 0, v: pv } : null;
    }
    if (key === 'state') {
      if (isConfirmedRow(r)) {
        var a60 = axisConfirmAge(r, '60');
        var a120 = axisConfirmAge(r, '120');
        var minAge = (a60 !== null && a120 !== null) ? Math.min(a60, a120)
          : (a60 !== null ? a60 : (a120 !== null ? a120 : 999));
        return { g: 0, v: minAge };
      }
      var soon = soonDays(r);
      return soon !== null ? { g: 1, v: soon } : null;
    }
    if (key === 'close') {
      var c = (r.c === null || r.c === undefined || r.c === '') ? NaN : Number(r.c);
      return isFiniteNum(c) ? { g: 0, v: c } : null;
    }
    return null;
  }

  function compareRows(a, b) {
    // 시총 열 정렬에서는 종목을 먼저, ETF/ETN은 최신 거래대금으로 정렬한다.
    // 다른 강도·등급 열은 선택한 기준 그대로 전체 유형에 걸쳐 정렬한다.
    if (state.sortKey === 'cap') {
      var group = Number(a.k !== 'stock') - Number(b.k !== 'stock');
      if (group) return group;
    }
    if (isTurn() && state.sortKey !== 'cap') {
      var ta = turnSortTuple(a, state.sortKey);
      var tb = turnSortTuple(b, state.sortKey);
      if (ta === null && tb === null) {
        return ((b.cap || 0) - (a.cap || 0)) || String(a.t).localeCompare(String(b.t));
      }
      if (ta === null) return 1;
      if (tb === null) return -1;
      var td = (ta.g - tb.g) || (ta.v - tb.v);
      if (td !== 0) return td * state.sortDir;
      var tc = ((a.cap || 0) - (b.cap || 0)) * state.sortDir;
      return tc || String(a.t).localeCompare(String(b.t));
    }
    var d = sortValue(a, state.sortKey) - sortValue(b, state.sortKey);
    if (d === 0) d = a.cap - b.cap;
    if (state.sortKey === 'cap' && a.k !== 'stock' && b.k !== 'stock') {
      d = (a.v || 0) - (b.v || 0);
    }
    return d * state.sortDir || String(a.t).localeCompare(String(b.t));
  }

  function fundBadge(r) {
    if (r.k !== 'etf' && r.k !== 'etn') return '';
    return ' <span class="tag fund-kind ' + r.k + '" title="' +
      escapeHtml(r.fund_tag || '기타') + '">' + r.k.toUpperCase() + '</span>';
  }

  function fundCaution(r) {
    return (r.k === 'etf' || r.k === 'etn') &&
      ['채권', 'MMF', '금리', 'CD금리'].indexOf(r.fund_tag) !== -1;
  }

  function buildHead() {
    var turn = isTurn();
    var head = '<tr><th class="num">#</th><th>종목</th>' +
      '<th class="sortable" data-k="cap" title="종목은 시가총액, ETF/ETN은 거래대금으로 정렬">시가총액<span class="arrow"></span></th>' +
      (turn ? '' : '<th class="sortable" data-k="grade">등급<span class="arrow"></span></th>') +
      cols().map(function (p) {
        return '<th class="sortable num" data-k="p' + p + '">MA' + p +
          '<span class="arrow"></span></th>';
      }).join('') +
      (turn ? '<th class="sortable" data-k="state" title="확정 전환 또는 현재 속도 유지 시 예상">구분<span class="arrow"></span></th>' +
              '<th class="num sortable" data-k="k60" title="MA60 확정 전환 후 시장 거래일 수(오늘=최신 거래일) 또는 현재 속도 유지 시 예상 거래일">60전환<span class="arrow"></span></th>' +
              '<th class="num sortable" data-k="k120" title="MA120 확정 전환 후 시장 거래일 수(오늘=최신 거래일) 또는 현재 속도 유지 시 예상 거래일">120전환<span class="arrow"></span></th>'
            : '<th class="num sortable" data-k="edge" title="가장 낮은 강도 (등급 기준)">최저<span class="arrow"></span></th>' +
              '<th class="num sortable" data-k="reach" title="현재 속도가 유지된다고 가정할 때 0에 닿는 예상 거래일(계산값)">도달(추정)<span class="arrow"></span></th>') +
      '<th class="num sortable" data-k="close">종가<span class="arrow"></span></th></tr>';
    var thead = document.querySelector('#grid thead');
    if (!thead) return;
    thead.innerHTML = head;
    // 정렬 핸들러는 thead를 다시 그릴 때마다 새로 붙인다.
    thead.querySelectorAll('th.sortable').forEach(function (th) {
      th.addEventListener('click', function () {
        var k = th.getAttribute('data-k');
        if (state.sortKey === k) {
          state.sortDir = -state.sortDir;
        } else {
          state.sortKey = k;
          state.sortDir = (k === 'grade' || k === 'state' || k === 'k60' || k === 'k120' || k === 'r60' || k === 'r120') ? 1 : -1;
        }
        render();
      });
    });
  }

  function axisTurnCell(r, axis) {
    var turnDown = isTurnDown();
    var age = axisConfirmAge(r, axis);
    if (age !== null) {
      var fresh = age <= 5 ? ' fresh' : '';
      var today = isFreshTurn(r, axis);
      var label = today ? '오늘' : (age + '일');
      var tip = today
        ? 'MA' + axis + ' 오늘 ' + (turnDown ? '하락' : '상승') + '전환 (0거래일 경과)'
        : 'MA' + axis + ' ' + (turnDown ? '하락' : '상승') + '전환 후 ' + age + '거래일 경과';
      if (r.stale === 1) tip += ' · 마지막 시세(' + r.d + ') 기준 확정';
      return '<td class="num' + fresh + '" title="' + escapeHtml(tip) + '">' + label + '</td>';
    }
    var eta = axisEta(r, axis);
    if (eta !== null) {
      var etaTip = 'MA' + axis + ' 현재 속도가 유지될 경우 약 ' + eta.toFixed(1) + '거래일 뒤 0 도달 추정 (예측 아님)';
      return '<td class="num soon" title="' + escapeHtml(etaTip) + '">예상 ' + eta.toFixed(1) + '일</td>';
    }
    var missing = isFiniteNum(axisRawP(r, axis)) ? ' 전환 시점 확인 불가' : ' 데이터 부족';
    return '<td class="num muted" title="MA' + axis + missing + '">—</td>';
  }

  function render() {
    var down = isDown();
    var rows = filtered();
    rows.sort(compareRows);
    $('sortInfo').textContent = state.sortKey === 'cap'
      ? '종목은 시총순 · ETF/ETN은 거래대금순' : '';

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
      // 마스터의 market도 ETF/ETN인 경우 배지를 두 번 표시하지 않는다.
      var market = (r.k === 'etf' || r.k === 'etn') && r.m === r.k.toUpperCase() ? '' : r.m;
      var cells = '<td class="num muted">' + (i + 1) + '</td>' +
        '<td><a href="stocks-app.html?code=' + r.t + '">' + escapeHtml(r.n) + '</a>' +
          ' <span class="code">' + r.t + '</span>' +
          fundBadge(r) +
          (market ? ' <span class="tag">' + escapeHtml(market) + '</span>' : '') + stale + '</td>' +
        '<td class="num">' + fmtCap(r.cap) + '</td>' +
        (turn ? '' : '<td><span class="grade ' + gradeClass(r.g, state.dir) + '">' +
          escapeHtml(r.g) + '</span></td>');
      cells += cols().map(function (p) {
        var pv = r.p ? r.p[p] : null;
        if (!isFiniteNum(pv)) {
          return '<td class="num muted" title="MA' + p + ' 데이터 부족">—</td>';
        }
        var ax = (r.a && r.a[p]) || {};
        var vel = isFiniteNum(ax.v) ? ax.v : null;
        // 속도: 5일간 강도 변화(포인트). ±0.5p 미만은 보합으로 본다(백테스트에서 유의미한 구분이 없던 구간).
        // v > 0 = 0을 향해 움직임(▲), v < 0 = 0에서 멀어짐(▼).
        var dir = vel === null ? 'flat'
                : (vel > 0.5 ? 'toward' : (vel < -0.5 ? 'away' : 'flat'));
        var arrow = dir === 'toward' ? '▲' : (dir === 'away' ? '▼' : '·');
        var tip = [];
        if (vel !== null) {
          tip.push('5일 강도 변화 ' + (vel > 0 ? '+' : '') + vel.toFixed(1) + 'p ' +
                   (vel > 0 ? '(0에 접근)' : '(0에서 이탈)'));
        }
        if (isFiniteNum(ax.reach)) {
          tip.push('현재 속도 유지 시 ' + ax.reach.toFixed(1) + '거래일 뒤 0 도달(추정)');
          if (isFiniteNum(ax.need)) {
            tip.push('그러려면 종가가 하루 ' + (ax.need > 0 ? '+' : '') + ax.need.toFixed(2) + '% 필요');
          }
        } else if (vel !== null) {
          tip.push('0에서 멀어지는 중');
        }
        return '<td class="num ' + pctClass(pv) + '" title="' + escapeHtml(tip.join(' · ')) + '">' +
          fmtPct(pv) + '<span class="vel ' + dir + '">' + arrow + '</span></td>';
      }).join('');
      if (turn) {
        // 구분: 확정 전환 vs 예상(현재 속도 유지 가정, 예측 아님).
        if (isConfirmedRow(r)) {
          cells += '<td><span class="tag turn">전환</span></td>';
        } else {
          var d = soonDays(r);
          cells += '<td><span class="tag soon" title="현재 속도가 유지될 경우 ' +
            (d === null ? '—' : d.toFixed(1)) + '거래일 뒤 0 도달 추정 (예측 아님)">예상</span>' +
            (d === null ? '' : ' <span class="code">' + d.toFixed(1) + '일</span>') + '</td>';
        }
        cells += axisTurnCell(r, '60') + axisTurnCell(r, '120');
      } else {
        cells += '<td class="num mono">' + fmtPct(down ? r.hi : r.lo) + '</td>';
        cells += reachCell(r);
      }
      cells += '<td class="num">' + fmtClose(r.c) + '</td>';
      return '<tr' + (fundCaution(r)
        ? ' class="fund-caution" title="이름 분류상 제외 대상입니다. 데이터 확인이 필요합니다."' : '') +
        '>' + cells + '</tr>';
    }).join('');

    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="' + (turn ? 9 : 11) +
        '" class="empty">조건에 맞는 종목이 없습니다.</td></tr>';
    }

    var byGrade = {};
    GRADES.forEach(function (g) { byGrade[g] = 0; });
    rows.forEach(function (r) { byGrade[r.g] = (byGrade[r.g] || 0) + 1; });
    var dist;
    if (turn) {
      var confirmed = rows.filter(isConfirmedRow);
      var confirmedCount = confirmed.length;
      var estimatedCount = rows.length - confirmedCount;
      var zero = confirmed.filter(function (r) {
        return isFreshTurn(r, '60') || isFreshTurn(r, '120');
      }).length;
      var winDays = (state.data && isFiniteNum(state.data.window_days)) ? state.data.window_days : 5;
      dist = '확정 전환 <strong>' + confirmedCount + '</strong>종목' +
        (zero ? ' (오늘 <strong>' + zero + '</strong>)' : '') +
        ' · 예상 <strong>' + estimatedCount + '</strong>종목' +
        ' · 기준 ' + winDays + '거래일';
    } else if (state.activeGrade === ALL) {
      dist = GRADES.map(function (g) {
        return '<span class="grade ' + gradeClass(g, state.dir) + '">' + g + '</span> ' + (byGrade[g] || 0);
      }).join(' · ');
    } else {
      dist = '<span class="grade ' + gradeClass(state.activeGrade, state.dir) + '">' +
        escapeHtml(state.activeGrade) + '</span> ' + (byGrade[state.activeGrade] || 0) + '종목';
    }
    $('summary').innerHTML = (DIR_LABEL[state.dir] || '양의 방향') + ' · ' +
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
    var turnOn = isTurn();
    var turnDown = isTurnDown();
    document.title = '이평선 강도 스크리너 — ' + (DIR_LABEL[state.dir] || '');
    $('dirNote').innerHTML = turnDown
      ? 'MA 60일 또는 120일 강도가 <strong>최근 5거래일 안에 0 이상에서 음수로 전환</strong>해 유지 중인 종목(확정 전환)과, ' +
        '아직 양수 구간에서 <strong>현재 속도가 유지될 경우</strong> 0 도달이 계산되는 종목(예상·예측 아님)을 함께 보여줍니다. ' +
        '전환 경과일은 시장 거래일 기준입니다. 오늘은 데이터의 최신 거래일이며, 시세가 오래된 종목은 마지막 시세까지 확인합니다.' +
        '<span class="bands">등급 없음 · 종목은 시총순, ETF/ETN은 거래대금순 · 예상은 현재 속도 유지 가정(예측 아님)</span>'
      : turnOn
      ? 'MA 60일 또는 120일 강도가 <strong>최근 5거래일 안에 0 이하에서 양수로 전환</strong>해 유지 중인 종목(확정 전환)과, ' +
        '아직 음수 구간에서 <strong>현재 속도가 유지될 경우</strong> 0 도달이 계산되는 종목(예상·예측 아님)을 함께 보여줍니다. ' +
        '전환 경과일은 시장 거래일 기준입니다. 오늘은 데이터의 최신 거래일이며, 시세가 오래된 종목은 마지막 시세까지 확인합니다.' +
        '<span class="bands">등급 없음 · 종목은 시총순, ETF/ETN은 거래대금순 · 예상은 현재 속도 유지 가정(예측 아님)</span>'
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
    document.body.classList.toggle('down-mode', down || turnDown);
    // 예상 필터는 전환 탭에서만 의미가 있으며, 전환 탭 밖에서는 기본값으로 초기화한다.
    if (!turnOn) resetSoonInputs();
    ['soonDaysWrap', 'soonMinWrap'].forEach(function (id) {
      var el = $(id);
      if (el) el.hidden = !turnOn;
    });
  }

  function setDirection(dir) {
    if (!SOURCES[dir] || state.dir === dir) return;
    state.dir = dir;
    state.capFloor = 0;
    var capFloor = $('capFloor');
    if (capFloor) capFloor.value = '0';
    if (!isTurn()) resetSoonInputs();
    // 열 구성이 방향마다 다르므로(전환은 60/120만) 헤더를 새로 만든다.
    if (isTurn() || ['state', 'k60', 'k120', 'r60', 'r120'].indexOf(state.sortKey) !== -1) {
      state.sortKey = 'cap';
    }
    state.sortDir = -1;
    buildHead();
    load();
  }

  function clearView(metaText, metaClass, withRetry) {
    state.data = null;
    state.rows = [];
    state.activeGrade = ALL;
    syncChips();
    var sortInfo = $('sortInfo');
    if (sortInfo) sortInfo.textContent = '';
    var summary = $('summary');
    if (summary) {
      summary.innerHTML = '';
      summary.textContent = '';
    }
    var tbody = document.querySelector('#grid tbody');
    if (tbody) tbody.innerHTML = '';
    var status = $('meta');
    if (status) {
      status.className = metaClass || 'meta';
      if (withRetry) {
        status.innerHTML = escapeHtml(metaText) +
          ' <button type="button" class="chip" id="retryBtn" data-retry="1">다시 시도</button>';
        var retryBtn = (status.querySelector && status.querySelector('#retryBtn')) || $('retryBtn');
        if (retryBtn && retryBtn.addEventListener) {
          retryBtn.addEventListener('click', function () { load(); });
        }
      } else {
        status.innerHTML = '';
        status.textContent = metaText;
      }
    }
    updateHead();
  }

  function load() {
    var dir = state.dir;
    var seq = ++state.loadSeq;
    var label = DIR_LABEL[dir] || dir;
    var turn = isTurn();
    if (state.cache[dir] && (!turn || state.cache[dir].turn_age_basis === 'market_sessions')) {
      state.data = state.cache[dir];
      state.rows = state.data.rows || [];
      showMeta();
      // 등급은 방향이 바뀌면 의미가 달라지므로 '전체'로 초기화
      state.activeGrade = ALL;
      syncChips();
      render();
      return;
    }
    clearView(label + ' 데이터 불러오는 중…', 'meta', false);
    fetch(SOURCES[dir], { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        if (turn && data.turn_age_basis !== 'market_sessions') {
          throw new Error('시장 거래일 기준 데이터가 필요합니다');
        }
        // 응답이 도착하는 사이 사용자가 방향을 바꿨거나 재시도했을 수 있다.
        if (seq !== state.loadSeq || state.dir !== dir) {
          if (state.dir !== dir && !state.cache[dir]) state.cache[dir] = data;
          return;
        }
        state.cache[dir] = data;
        state.data = data;
        state.rows = data.rows || [];
        state.activeGrade = ALL;
        syncChips();
        showMeta();
        render();
      })
      .catch(function (err) {
        if (seq !== state.loadSeq || state.dir !== dir) return;
        var msg = label + ' 데이터를 불러오지 못했습니다: ' + (err && err.message ? err.message : String(err));
        clearView(msg, 'meta warn', true);
      });
  }

  function showMeta() {
    var d = state.data;
    if (!d) return;
    var meta = $('meta');
    meta.className = 'meta';
    var parts = [];
    if (d.latest_trade_date) parts.push('기준일 ' + d.latest_trade_date);
    parts.push(state.rows.length + '종목');
    if (d.market_cap_unit) parts.push('시가총액 단위 ' + d.market_cap_unit);
    meta.innerHTML = '';
    meta.textContent = parts.join(' · ');
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
      var i = DIR_ORDER.indexOf(state.dir);
      var next = DIR_ORDER[(i + (e.key === 'ArrowRight' ? 1 : DIR_ORDER.length - 1)) % DIR_ORDER.length];
      setDirection(next);
      var nextBtn = document.querySelector('#dirChips button[data-d="' + next + '"]');
      if (nextBtn) nextBtn.focus();
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

  function syncKindChips() {
    document.querySelectorAll('#kindChips button[data-kind]').forEach(function (btn) {
      var on = btn.getAttribute('data-kind') === state.activeKind;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-checked', on ? 'true' : 'false');
    });
  }

  function initKindChips() {
    var box = $('kindChips');
    box.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-kind]');
      if (!btn) return;
      state.activeKind = btn.getAttribute('data-kind');
      syncKindChips();
      render();
    });
    box.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      var i = KINDS.indexOf(state.activeKind);
      state.activeKind = KINDS[(i + (e.key === 'ArrowRight' ? 1 : KINDS.length - 1)) % KINDS.length];
      syncKindChips();
      render();
      document.querySelector('#kindChips button[data-kind="' + state.activeKind + '"]').focus();
    });
    syncKindChips();
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
    initKindChips();
    $('capFloor').addEventListener('change', function (e) {
      state.capFloor = Number(e.target.value);
      render();
    });
    $('soonDays').addEventListener('change', function (e) {
      state.soonMax = parseSoonMax(e.target.value);
      render();
    });
    $('soonMin').addEventListener('change', function (e) {
      state.soonMinStrength = Number(e.target.value) || 0;
      render();
    });
    $('search').addEventListener('input', function (e) {
      state.query = e.target.value;
      render();
    });
    // URL ?dir=down / ?dir=turn / ?dir=turn-down 으로 해당 방향을 바로 열 수 있게 한다.
    buildHead();
    var wanted = new URLSearchParams(location.search).get('dir');
    if (wanted && wanted !== 'up' && SOURCES[wanted]) setDirection(wanted);
    else load();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
