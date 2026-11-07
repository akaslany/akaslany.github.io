/* 이평선 확률 스크리너 — 정적 JSON 렌더
 *
 * screen.json은 매 거래일 배치가 만든다(export_ma_prob_screen.py).
 * 여기서는 정렬·필터·표시만 한다. 데이터가 없으면 조용히 빈 표를 보이지 않고
 * 오류를 표시한다.
 */
(function () {
  'use strict';

  var GRADES = ['강', '중', '약', '미미'];
  // '전체'는 등급 필터 해제 상태를 뜻한다(베타적 선택: 한 번에 하나만).
  var ALL = '전체';
  var state = {
    data: null,
    rows: [],
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

  function gradeClass(g) { return 'g-' + encodeURIComponent(g); }

  function filtered() {
    var q = state.query.trim().toLowerCase();
    return state.rows.filter(function (r) {
      if (state.activeGrade !== ALL && r.g !== state.activeGrade) return false;
      if (state.hideSpac && r.spac) return false;
      if (r.cap < state.capFloor) return false;
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
      case 'close': return r.c;
      default: return 0;
    }
  }

  function render() {
    var rows = filtered();
    rows.sort(function (a, b) {
      var d = sortValue(a, state.sortKey) - sortValue(b, state.sortKey);
      if (d === 0) d = a.cap - b.cap;
      return d * state.sortDir;
    });

    var tbody = document.querySelector('#grid tbody');
    tbody.innerHTML = rows.map(function (r, i) {
      var stale = r.stale ? ' <span class="stale" title="마지막 거래일 ' + r.d + '">(휴장)</span>' : '';
      return '<tr class="row-' + gradeClass(r.g) + '">' +
        '<td class="num muted">' + (i + 1) + '</td>' +
        '<td><a href="stocks-app.html?code=' + r.t + '">' + escapeHtml(r.n) + '</a>' +
          ' <span class="code">' + r.t + '</span>' +
          ' <span class="tag">' + escapeHtml(r.m || '') + '</span>' +
          (r.spac ? ' <span class="tag spac">스팩</span>' : '') + stale + '</td>' +
        '<td class="num">' + fmtCap(r.cap) + '</td>' +
        '<td><span class="grade ' + gradeClass(r.g) + '">' + escapeHtml(r.g) + '</span></td>' +
        ['5', '20', '60', '120'].map(function (p) {
          return '<td class="num ' + pctClass(r.p[p]) + '">' + fmtPct(r.p[p]) + '</td>';
        }).join('') +
        '<td class="num mono">' + fmtPct(r.lo) + '</td>' +
        '<td class="num">' + Number(r.c).toLocaleString('ko-KR') + '</td>' +
        '</tr>';
    }).join('');

    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="10" class="empty">조건에 맞는 종목이 없습니다.</td></tr>';
    }

    // 등급 분포는 '전체'일 때만, 특정 등급을 고르면 그 등급 건수만.
    var byGrade = {};
    GRADES.forEach(function (g) { byGrade[g] = 0; });
    state.rows.forEach(function (r) { byGrade[r.g] = (byGrade[r.g] || 0) + 1; });
    var dist = state.activeGrade === ALL
      ? GRADES.map(function (g) {
          return '<span class="grade ' + gradeClass(g) + '">' + g + '</span> ' + (byGrade[g] || 0);
        }).join(' · ')
      : '<span class="grade ' + gradeClass(state.activeGrade) + '">' + escapeHtml(state.activeGrade) +
        '</span> ' + (byGrade[state.activeGrade] || 0) + '종목';
    $('summary').innerHTML = '표시 <strong>' + rows.length + '</strong> / 전체 ' + state.rows.length + '종목 · ' +
      dist + (state.hideSpac ? ' · 스팩 제외' : '');

    document.querySelectorAll('#grid th.sortable').forEach(function (th) {
      var arrow = th.querySelector('.arrow');
      if (!arrow) return;
      arrow.textContent = th.getAttribute('data-k') === state.sortKey
        ? (state.sortDir < 0 ? ' ▼' : ' ▲') : '';
    });
  }

  function initChips() {
    var box = $('gradeChips');
    // 전체 + 등급 네 개. 라디오처럼 하나만 활성화된다.
    box.innerHTML = [ALL].concat(GRADES).map(function (g) {
      return '<button type="button" role="radio" aria-checked="false" class="chip' +
        (g === ALL ? '' : ' ' + gradeClass(g)) + '" data-g="' + g + '">' +
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
    });
  }

  function init() {
    var status = $('meta');
    fetch('screen.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        state.data = data;
        state.rows = data.rows || [];
        status.textContent = '기준일 ' + data.latest_trade_date + ' · ' + state.rows.length +
          '종목 · 시가총액 단위 ' + data.market_cap_unit + ' · ' + data.price_basis;
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
              // 시가총액·확률·종가는 큰 값부터, 등급은 '강'부터.
              state.sortDir = k === 'grade' ? 1 : -1;
            }
            render();
          });
        });
        render();
      })
      .catch(function (err) {
        status.textContent = '데이터를 불러오지 못했습니다: ' + err.message;
        status.className = 'meta warn';
      });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
