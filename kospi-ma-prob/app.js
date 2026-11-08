/* KOSPI 국내주식 이평선 상승 강도 — 정적 뷰어
 *
 * 서버가 없는 GitHub Pages에서 그대로 계산한다. 강도식은 기존 연구
 * 구현(run_ma_prob_chart.py / scv/live/probs.py)과 동일하다:
 *
 *   prob_p(t) = 100 * (1 - Σ close[t-(p-1)-(N-1) .. t-(p-1)] / (N * close[t]))
 *
 * 데이터는 사전 계산된 정적 JSON이다:
 *   stocks-index.json      코드·이름·시장·기준일 (검색용, 344KB)
 *   stocks/<코드>.json     해당 종목 종가만 (평균 4.5KB)
 * 가격은 키움 upd_stkpc_tp=1 수정주가이므로 액면분할·무상증자가 강도를 왜곡하지 않는다.
 */
(function () {
  'use strict';

  var PERIODS = [5, 20, 60, 120];
  var N = 10;
  var COLORS = { 5: '#2563eb', 20: '#7c3aed', 60: '#ea580c', 120: '#0891b2' };
  var STORE_KEY = 'kospi-ma-prob:recent';

  var state = {
    index: null,
    byTicker: {},
    calendar: [],
    firstIndex: 0,
    current: null,
    series: null,
    years: 2
  };

  function $(id) { return document.getElementById(id); }

  function fmtPct(v) {
    if (v === null || v === undefined || isNaN(v)) return '—';
    return (v > 0 ? '+' : '') + v.toFixed(1) + '%';
  }

  function signClass(v) {
    if (v === null || v === undefined || isNaN(v)) return '';
    return v < 0 ? 'neg' : 'pos';
  }

  // ---- 계산 -------------------------------------------------------------
  // dates/closes: 표시 구간 + 워밍업을 포함한 배열. 워밍업 덕분에 첫 표시일도
  // MA와 강도가 실제 값이다(빈 구간이 생기지 않는다).
  function computeSeries(dates, closes) {
    var out = { dates: dates, closes: closes, ma: {}, prob: {}, raw: {} };
    PERIODS.forEach(function (p) {
      out.ma[p] = [];
      out.prob[p] = [];
      out.raw[p] = [];
    });
    var prefix = [0];
    for (var i = 0; i < closes.length; i++) prefix.push(prefix[i] + closes[i]);
    for (var t = 0; t < closes.length; t++) {
      PERIODS.forEach(function (p) {
        // MA_p: 최근 p개 종가 평균
        out.ma[p].push(t + 1 >= p ? (prefix[t + 1] - prefix[t + 1 - p]) / p : null);
        // prob: rolling_sum(close, N).shift(p-1)  ==  t-(p-1) 에서 끝나는 N개 합
        var end = t - (p - 1);
        var begin = end - N + 1;
        if (begin >= 0 && closes[t] > 0) {
          var sum = prefix[end + 1] - prefix[begin];
          // 값은 ±100을 넘을 수 있다(창 안 평균가가 오늘 종가의 2배를 넘으면
          // -100% 아래, 평균이 0에 가까우면 +100% 위). 자르지 않고 그대로 쓴다 —
          // 자르면 -125%와 -400%가 같은 높이로 보여 심각도를 오해한다.
          var raw = 100 * (1 - sum / (N * closes[t]));
          out.raw[p].push(raw);
          out.prob[p].push(raw);
        } else {
          out.raw[p].push(null);
          out.prob[p].push(null);
        }
      });
    }
    return out;
  }

  // 티커 파일을 달력 날짜 배열로 편다. 앞쪽 워밍업은 계산용으로 남기고,
  // 표시 시작점(firstVisible)만 state.years(기본 2년) 앞으로 자른다.
  function displaySlice(tickerData) {
    var cal = state.calendar;
    var dates = [];
    var closes = [];
    for (var i = 0; i < tickerData.o.length; i++) {
      dates.push(cal[tickerData.base + tickerData.o[i]]);
      closes.push(tickerData.c[i]);
    }
    var want = state.years * 251;
    var firstVisible = Math.max(0, dates.length - Math.min(want, dates.length));
    return { dates: dates, closes: closes, firstVisible: firstVisible };
  }

  // ---- 차트 -------------------------------------------------------------
  function renderChart(p) {
    var full = state.series;
    var from = full.firstVisible;
    var dates = full.dates.slice(from);
    var closes = full.closes.slice(from);
    var probs = full.prob[p].slice(from);
    var ma = full.ma[p].slice(from);
    if (!dates.length) return document.createElement('div');

    var W = 960, H = 340, padL = 64, padR = 62, padB = 30;
    // 위: 주가 / 아래: 강도. 두 패널을 완전히 분리해 선이 서로 겹치지 않는다.
    var priceTop = 16, priceBot = 176;
    var stripTop = 200, stripBot = 300;
    var step = (W - padL - padR) / Math.max(1, dates.length - 1);
    function px(i) { return padL + i * step; }

    var lo = Math.min.apply(null, closes), hi = Math.max.apply(null, closes);
    if (lo === hi) { lo -= 1; hi += 1; }
    function py(v) { return priceTop + (hi - v) / (hi - lo) * (priceBot - priceTop); }

    // 강도 막대는 위·아래를 고정 높이로 나눠 쓴다: 0선이 항상 같은 자리에 있고,
    // 막대 길이가 곧 강도라 가격선과 눈으로 바로 구분된다.
    var pvals = probs.filter(function (v) { return v !== null; });
    var maxAbs = Math.max.apply(null, [1].concat(pvals.map(Math.abs)));
    var zeroY = (stripTop + stripBot) / 2;
    var half = (stripBot - stripTop) / 2 - 6;
    function barY(v) { return zeroY - (v / maxAbs) * half; }

    var NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'MA ' + p + '일 주가와 상승 강도 막대 최근 ' + state.years + '년');
    function el(name, attrs, parent) {
      var node = document.createElementNS(NS, name);
      for (var k in attrs) node.setAttribute(k, attrs[k]);
      (parent || svg).appendChild(node);
      return node;
    }

    // ---- 위 패널: 주가 + 이동평균 ----
    var pricePts = closes.map(function (v, i) { return px(i) + ',' + py(v); }).join(' ');
    el('polyline', { fill: 'none', stroke: '#1d4ed8', 'stroke-width': 1.6, points: pricePts });
    var maPairs = [];
    ma.forEach(function (v, i) { if (v !== null) maPairs.push(px(i) + ',' + py(v)); });
    if (maPairs.length > 1) {
      el('polyline', { fill: 'none', stroke: '#ea580c', 'stroke-width': 1.1,
                       'stroke-dasharray': '5 3', points: maPairs.join(' ') });
    }
    // 패널 경계와 라벨
    el('line', { x1: padL, y1: priceBot + 6, x2: W - padR, y2: priceBot + 6,
                 stroke: '#e2e8f0', 'stroke-width': 1 });
    var yTop = el('text', { x: padL - 6, y: priceTop + 4, 'text-anchor': 'end', 'font-size': 10, fill: '#1d4ed8' });
    yTop.textContent = Math.round(hi).toLocaleString('ko-KR');
    var yLow = el('text', { x: padL - 6, y: priceBot, 'text-anchor': 'end', 'font-size': 10, fill: '#1d4ed8' });
    yLow.textContent = Math.round(lo).toLocaleString('ko-KR');

    // ---- 아래 패널: 강도 막대 ----
    var barW = Math.max(1.0, step * 0.8);
    for (var j = 0; j < probs.length; j++) {
      var v = probs[j];
      if (v === null) continue;
      var y = barY(v);
      var ramp = probRamp(v);
      // 0선에서 뻗는 막대. 위로 솟으면 상승 강도, 아래면 하락 강도.
      el('rect', {
        x: (px(j) - barW / 2).toFixed(2), y: Math.min(y, zeroY).toFixed(2),
        width: barW.toFixed(2), height: Math.max(1, Math.abs(zeroY - y)).toFixed(2),
        fill: ramp.stroke, opacity: 0.95
      });
    }
    el('line', { x1: padL, y1: zeroY, x2: W - padR, y2: zeroY,
                 stroke: '#64748b', 'stroke-width': 1 });
    var zLab = el('text', { x: padL - 6, y: zeroY + 4, 'text-anchor': 'end', 'font-size': 10, fill: '#64748b' });
    zLab.textContent = '0';
    var maxLab = el('text', { x: padL - 6, y: stripTop + 8, 'text-anchor': 'end',
                              'font-size': 10, fill: '#b91c1c' });
    maxLab.textContent = '+' + nice(Math.ceil(maxAbs)) + '%';
    var minLab = el('text', { x: padL - 6, y: stripBot, 'text-anchor': 'end',
                              'font-size': 10, fill: '#0c60c6' });
    minLab.textContent = '−' + nice(Math.ceil(maxAbs)) + '%';
    // 패널 이름표(왼쪽 위) — 어느 쪽이 가격이고 어느 쪽이 강도인지 바로 보이게.
    var tagTop = el('text', { x: padL + 4, y: priceTop - 3, 'font-size': 10, fill: '#1d4ed8', opacity: 0.9 });
    tagTop.textContent = '주가';
    var tagBot = el('text', { x: padL + 4, y: stripTop - 8, 'font-size': 10, fill: '#0f172a', opacity: 0.75 });
    tagBot.textContent = '상승 강도 (막대)';

    var lastI = probs.length - 1;
    while (lastI >= 0 && probs[lastI] === null) lastI--;
    if (lastI >= 0) {
      el('circle', { cx: px(lastI), cy: py(closes[lastI]), r: 3, fill: '#1d4ed8' });
      var ramp2 = probRamp(probs[lastI]);
      var label = el('text', {
        x: W - padR + 4, y: barY(probs[lastI]) + 4, 'font-size': 10.5, 'font-weight': 700,
        fill: ramp2.stroke, stroke: '#fff', 'stroke-width': 2.6, 'paint-order': 'stroke'
      });
      label.textContent = fmtPct(probs[lastI]);
    }
    var t1 = el('text', { x: padL, y: H - 8, 'font-size': 11, fill: '#475569' });
    t1.textContent = dates[0];
    var t2 = el('text', { x: W - padR, y: H - 8, 'text-anchor': 'end', 'font-size': 11, fill: '#475569' });
    t2.textContent = dates[dates.length - 1];
    return svg;
  }

  function nice(v) {
    var a = Math.abs(v);
    var stepv = a >= 200 ? 50 : (a >= 100 ? 20 : 10);
    var n = Math.ceil(a / stepv) * stepv;
    return n;
  }

  // 차트 범례. 견본은 probRamp()에서 직접 만들어 차트와 어긋나지 않는다.
  function chartLegend() {
    var wrap = document.createElement('div');
    wrap.className = 'legend';
    var items = [
      { cls: 'sw price', text: '주가' },
      { cls: 'sw ma', text: '이동평균' }
    ];
    items.forEach(function (it) {
      var span = document.createElement('span');
      span.className = 'lg';
      var sw = document.createElement('i');
      sw.className = it.cls;
      span.appendChild(sw);
      span.appendChild(document.createTextNode(it.text));
      wrap.appendChild(span);
    });
    var scale = document.createElement('span');
    scale.className = 'lg scale';
    scale.innerHTML = '강도 ' +
      '<i class="sw" style="' + probStyle(-100) + '"></i>−100' +
      '<i class="sw" style="' + probStyle(-50) + '"></i>' +
      '<i class="sw" style="' + probStyle(0) + '"></i>0' +
      '<i class="sw" style="' + probStyle(50) + '"></i>' +
      '<i class="sw" style="' + probStyle(100) + '"></i>+100';
    wrap.appendChild(scale);
    return wrap;
  }

  // 강도 막대의 색 인코딩. 길이가 값을 나타내고, 색은 부호와 크기를 함께 강조한다.
  // 한국 관례: 상승은 빨강, 하락은 파랑.
  //
  // 색 배분은 실제 분포에 맞춘다. 이 화면의 강도는 중앙값 21, 75% 48, 90% 110 에
  // 몰려 있어서 ±100 을 고르게 나누면 정작 자주 보는 20~50 구간이 밋밋해진다.
  // 그래서 값 구간별 앵커를 직접 지정한다.
  //   +10 옅은 크림 → +25 노랑 → +50 주황 → +90 진한 주황 → +200 진빨강 → 600+ 포화
  // ±100 을 넘으면 색은 포화되지만 막대 길이는 축이 늘어나 계속 표현된다.
  // 색상·채도·명도를 함께 천천히 움직여 '질어지는' 느낌을 낸다. 채도를 급히 올리면
  // 원색으로 튀어 계단처럼 보인다.
  var KNOTS = [[0, 0], [10, .20], [25, .42], [50, .65], [90, .82], [200, .94], [600, 1]];

  function rampPosition(v) {
    var a = Math.abs(v);
    for (var i = 0; i < KNOTS.length - 1; i++) {
      var x0 = KNOTS[i][0], t0 = KNOTS[i][1];
      var x1 = KNOTS[i + 1][0], t1 = KNOTS[i + 1][1];
      if (a <= x1) return t0 + (t1 - t0) * (a - x0) / (x1 - x0);
    }
    return 1;
  }

  function probRamp(v) {
    var t = rampPosition(v);
    var h = v >= 0 ? 52 - 50 * t : 192 + 36 * t;
    var s = (16 + 62 * t) / 100;
    var l = 0.97 - 0.40 * t;
    // HSL → RGB. h 는 0..240 범위만 나온다.
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var hp = h / 60;
    var x = c * (1 - Math.abs(hp % 2 - 1));
    var m = l - c / 2;
    var sectors = [[c, x, 0], [x, c, 0], [0, c, x], [0, x, c], [x, 0, c], [c, 0, x]];
    var sec = sectors[Math.floor(hp) % 6];
    var rgb = sec.map(function (q) { return Math.round((q + m) * 255); });
    return {
      stroke: 'rgb(' + rgb.join(',') + ')',
      width: (1.2 + 3.0 * t).toFixed(2)
    };
  }

  function probColor(v) { return probRamp(v).stroke; }

  function probStyle(v) {
    // 막대 견본: 0선 기준으로 위(양수)/아래(음수)로 뻗는 작은 사각형.
    var r = probRamp(v);
    var h = Math.max(2, Math.round(Math.abs(v) / 100 * 16));
    return 'display:inline-block;width:7px;height:' + h + 'px;background:' + r.stroke +
      ';vertical-align:middle;margin:0 3px';
  }

  // ---- 렌더 -------------------------------------------------------------
  function delta(kind, p, back) {
    // 표시 구간 안의 값끼리 비교한다. 워밍업 값과 빼면 의미가 없다.
    var arr = state.series[kind][p].slice(state.series.firstVisible);
    var lastI = arr.length - 1;
    while (lastI >= 0 && arr[lastI] === null) lastI--;
    if (lastI - back < 0) return null;
    var a = arr[lastI], b = arr[lastI - back];
    if (a === null || b === null) return null;
    return a - b;
  }

  function lastValue(kind, p) {
    // kind: 'prob'(차트용) 또는 'raw'(표시용). 이제 둘은 같은 값이다.
    var arr = state.series[kind][p];
    for (var i = arr.length - 1; i >= 0; i--) if (arr[i] !== null) return { v: arr[i], i: i };
    return { v: null, i: -1 };
  }

  function render() {
    var box = $('result');
    var full = state.series;
    var from = full.firstVisible;
    var shownDates = full.dates.slice(from);
    var lastIdx = full.dates.length - 1;
    var closes = full.closes;
    var prev = lastIdx >= 1 ? closes[lastIdx - 1] : null;
    var chg = prev ? (closes[lastIdx] / prev - 1) * 100 : null;

    var cards = PERIODS.map(function (p) {
      var lv = lastValue('raw', p);
      return '<div class="card"><div class="label">MA ' + p + '일 상승 강도</div>' +
        '<div class="value ' + signClass(lv.v) + '">' + fmtPct(lv.v) + '</div>' +
        '<div class="sub">1일 전 ' + fmtPct(delta('raw', p, 1)) +
        ' · 5일 전 ' + fmtPct(delta('prob', p, 5)) + '</div></div>';
    }).join('');

    var rows = PERIODS.map(function (p) {
      var lv = lastValue('raw', p);
      var mv = lastValue('ma', p).v;
      return '<tr><td>MA ' + p + '</td><td class="' + signClass(lv.v) + '">' + fmtPct(lv.v) +
        '</td><td>' + fmtPct(delta('raw', p, 1)) + '</td><td>' +
        (mv === null ? '—' : mv.toLocaleString('ko-KR', { maximumFractionDigits: 2 })) + '</td></tr>';
    }).join('');

    var allNeg = PERIODS.every(function (p) { return (lastValue('raw', p).v || 0) < 0; });
    var regime = allNeg ? '네 축 모두 음수 — 단기 조정이 아니라 하락이 진행 중인 국면'
                        : '축별 혼조 — 단기와 장기가 다른 방향';

    var d = state.current;
    var stale = d.latest_trade_date !== state.index.latest_trade_date;
    box.innerHTML =
      '<header><h2>' + escapeHtml(d.name || '') + ' <span class="code">' + d.ticker + '</span>' +
      ' <span class="tag">' + escapeHtml(d.market || '') + '</span></h2>' +
      '<p class="meta">기준일 ' + d.latest_trade_date + (stale ? ' <strong class="warn">(시장 기준일 ' +
        state.index.latest_trade_date + '보다 이전 — 거래정지 가능)</strong>' : '') +
      ' · 종가 ' + Number(closes[lastIdx]).toLocaleString('ko-KR') +
      ' (전일 대비 ' + fmtPct(chg) + ') · 표본 ' + shownDates.length + '거래일</p>' +
      '</header>' +
      '<div class="cards">' + cards + '</div>' +
      '<p class="meta">현재 판독: <strong>' + regime + '</strong></p>' +
      '<div id="chart"></div>' +
      '<table><thead><tr><th>기간</th><th>상승 강도</th><th>1일 변화</th><th>이동평균</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table>';

    var chart = $('chart');
    PERIODS.forEach(function (p) {
      var box = document.createElement('div');
      box.className = 'chartbox';
      var head = document.createElement('div');
      head.className = 'charthead';
      var h = document.createElement('h3');
      h.textContent = 'MA ' + p + '일';
      head.appendChild(h);
      head.appendChild(chartLegend());
      box.appendChild(head);
      box.appendChild(renderChart(p));
      chart.appendChild(box);
    });
    remember(d.ticker);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // ---- 최근 본 종목 ------------------------------------------------------
  function remember(ticker) {
    if (typeof ticker !== 'string' || !/^\d{6}$/.test(ticker)) return;
    try {
      var raw = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      var list = Array.isArray(raw) ? raw.filter(function (t) { return typeof t === 'string' && /^\d{6}$/.test(t); }) : [];
      list = [ticker].concat(list.filter(function (t) { return t !== ticker; })).slice(0, 8);
      localStorage.setItem(STORE_KEY, JSON.stringify(list));
      renderRecent(list);
    } catch (e) { /* 사생활 보호 모드 등 저장 불가 시 무시 */ }
  }

  function renderRecent(list) {
    var box = $('recent');
    list = (Array.isArray(list) ? list : []).filter(function (t) { return typeof t === 'string' && /^\d{6}$/.test(t); });
    if (!list.length) { box.innerHTML = ''; return; }
    box.innerHTML = '<span class="label">최근:</span> ' + list.map(function (t) {
      var d = state.byTicker[t];
      var label = d && d.n ? escapeHtml(d.n) + ' (' + t + ')' : t;
      return '<a href="?code=' + t + '">' + label + '</a>';
    }).join(' · ');
  }

  // ---- 불러오기 ---------------------------------------------------------
  function loadTicker(code) {
    var status = $('status');
    if (!/^\d{6}$/.test(code)) {
      status.textContent = '종목코드는 6자리 숫자입니다.';
      status.className = 'status warn';
      return Promise.resolve(false);
    }
    status.textContent = code + ' 불러오는 중…';
    status.className = 'status';
    return fetch('stocks/' + code + '.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status === 404 ? '해당 종목 데이터가 없습니다.' : 'HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        state.current = data;
        state.byTicker[code] = { n: data.name, m: data.market, d: data.latest_trade_date, p: data.c[data.c.length - 1] };
        var slice = displaySlice(data);
        state.series = computeSeries(slice.dates, slice.closes);
        state.series.firstVisible = slice.firstVisible;
        status.textContent = '';
        render();
        history.replaceState(null, '', '?code=' + code);
        return true;
      })
      .catch(function (err) {
        status.textContent = code + ': ' + err.message;
        status.className = 'status warn';
        return false;
      });
  }

  function initSearch() {
    var input = $('code');
    var list = $('suggestions');
    var stocks = state.index.stocks;

    function suggest(q) {
      q = q.trim();
      if (!q) { list.innerHTML = ''; list.hidden = true; return; }
      var hits = stocks.filter(function (s) {
        return s.t.indexOf(q) === 0 || (s.n && s.n.toLowerCase().indexOf(q.toLowerCase()) !== -1);
      }).slice(0, 12);
      list.innerHTML = hits.map(function (s) {
        return '<li data-t="' + s.t + '">' + escapeHtml(s.n) + ' <span class="code">' + s.t +
          '</span> <span class="tag">' + escapeHtml(s.m || '') + '</span></li>';
      }).join('');
      list.hidden = hits.length === 0;
    }

    input.addEventListener('input', function () { suggest(input.value); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        list.hidden = true;
        var v = input.value.trim();
        var byName = stocks.filter(function (s) { return s.n === v; })[0];
        var code = /^\d{6}$/.test(v) ? v : (byName ? byName.t : v.replace(/\D/g, '').padStart(6, '0'));
        if (/^\d{6}$/.test(code)) loadTicker(code);
        else $('status').textContent = '종목명 또는 6자리 코드를 입력하세요.';
      } else if (e.key === 'Escape') {
        list.hidden = true;
      }
    });
    list.addEventListener('click', function (e) {
      var li = e.target.closest('li[data-t]');
      if (!li) return;
      list.hidden = true;
      input.value = li.getAttribute('data-t');
      loadTicker(li.getAttribute('data-t'));
    });
    document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (/^\d{6}$/.test(v)) loadTicker(v);
    });
  }

  function init() {
    var status = $('status');
    fetch('stocks-index.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (idx) {
        state.index = idx;
        state.calendar = idx.calendar;
        idx.stocks.forEach(function (s) { state.byTicker[s.t] = s; });
        $('meta').textContent = '기준일 ' + idx.latest_trade_date + ' · ' + idx.stocks.length +
          '종목';
        initSearch();
        try { renderRecent(JSON.parse(localStorage.getItem(STORE_KEY) || '[]')); } catch (e) { $('recent').innerHTML = ''; }
        var params = new URLSearchParams(location.search);
        var code = params.get('code');
        if (code && /^\d{6}$/.test(code)) {
          $('code').value = code;
          loadTicker(code);
        } else {
          status.textContent = '종목코드(6자리) 또는 종목명을 입력하세요.';
        }
      })
      .catch(function (err) {
        status.textContent = '목록을 불러오지 못했습니다: ' + err.message;
        status.className = 'status warn';
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
