"use strict";

const searchForm = document.getElementById("search-form");
const queryInput = document.getElementById("search-query");
const statusLine = document.getElementById("search-status");
const resultsList = document.getElementById("search-results");
const searchPages = JSON.parse(document.getElementById("search-data").textContent);
const kindLabels = {
  youtube: "YouTube",
  web: "웹",
  "ai-share": "AI 대화 공유",
  pdf: "PDF",
  paper: "논문",
  document: "문서",
  social: "소셜",
  book: "도서",
  code: "코드",
};
const typeLabels = {
  source: "소스", index: "색인", kind: "유형", timeline: "연대기", log: "로그",
  topic: "주제", person: "인물", org: "조직", concept: "개념", overview: "개관",
};

function lower(text) {
  return (text || "").normalize("NFC").toLowerCase();
}

function search(event) {
  event.preventDefault();
  const query = lower(queryInput.value).trim();
  resultsList.replaceChildren();
  statusLine.textContent = "";
  if (!query) return;

  const terms = query.split(/\s+/);
  const matches = [];
  for (const page of searchPages) {
    const fields = [
      [lower(page.title), 5],
      [lower(page.aliases.join(" ")), 4],
      [lower(page.summary_1line), 2],
      [lower(page.topics.join(" ")), 1],
      [lower([page.kind, kindLabels[page.kind], page.type, typeLabels[page.type], page.date].join(" ")), 1],
    ];
    const termScores = terms.map(term =>
      fields.reduce((score, [field, weight]) => score + (field.includes(term) ? weight : 0), 0),
    );
    if (termScores.every(score => score > 0)) {
      matches.push({page, score: termScores.reduce((sum, score) => sum + score, 0)});
    }
  }
  matches.sort((left, right) => right.score - left.score);
  statusLine.textContent = matches.length ? matches.length + "개 결과" : "검색 결과가 없습니다.";
  for (const {page} of matches) {
    const item = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = page.url;
    anchor.textContent = page.title;
    item.append(anchor);
    const description = document.createElement("small");
    description.textContent = [kindLabels[page.kind] || typeLabels[page.type], page.date, page.summary_1line]
      .filter(Boolean).join(" · ");
    item.append(description);
    resultsList.append(item);
  }
}

searchForm.addEventListener("submit", search);
queryInput.addEventListener("input", search);
