#!/usr/bin/env bash
# Publish the weekly US Treasury demand edition: collect -> render -> commit -> push -> verify.
# Designed to run unattended (Hermes cron, Saturday 07:00 KST). Stdout is the notification body.
set -euo pipefail
trap 'rc=$?; echo "국채 수급 주간호 발행 실패 (exit $rc, line $LINENO). 위 로그를 확인하세요."; exit $rc' ERR

REPO="/home/kjkim/dev/akaslany.github.io"
PY=/usr/bin/python3
DRY_RUN=0
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

cd "$REPO"

echo "== 1/4 수집"
"$PY" ops/treasury-demand/collect.py

echo "== 2/4 렌더"
"$PY" ops/treasury-demand/build_report.py

DATE_KST=$(TZ=Asia/Seoul date +%F)
POST="_posts/${DATE_KST}-us-treasury-demand-4week.md"
PERMALINK=$("$PY" - "$POST" <<'PY'
import re, sys
text = open(sys.argv[1], encoding='utf-8').read()
match = re.search(r'^permalink:\s*(\S+)\s*$', text, re.M)
print(match.group(1) if match else '')
PY
)
[[ -n "$PERMALINK" ]] || { echo "permalink를 찾지 못했습니다: $POST"; exit 1; }

if [[ $DRY_RUN -eq 0 ]]; then
  echo "== 3/4 커밋·푸시"
  git add -A _posts assets/data/treasury-demand treasury-demand.md _config.yml ops/treasury-demand
  if git diff --cached --quiet; then
    echo "(변경 없음 — 커밋 생략)"
  else
    git commit -q -m "Publish US Treasury demand report ${DATE_KST}"
    git push -q origin HEAD
  fi
fi

echo "== 4/4 공개 확인"
BASE="https://akaslany.github.io"
LANDING="${BASE}/treasury-demand/"
POST_URL="${BASE}${PERMALINK}"
status_landing=000
status_post=000
for _ in $(seq 1 10); do
  sleep 18
  status_landing=$(curl -sS -o /tmp/td-landing.html -w '%{http_code}' "$LANDING" || echo 000)
  status_post=$(curl -sS -o /tmp/td-post.html -w '%{http_code}' "$POST_URL" || echo 000)
  [[ "$status_landing" == "200" && "$status_post" == "200" ]] && break
done
svg_count=$(grep -c '<svg' /tmp/td-post.html 2>/dev/null || true)
linked=$(grep -c "$PERMALINK" /tmp/td-landing.html 2>/dev/null || true)

"$PY" - "$DATE_KST" "$POST_URL" "$LANDING" "$status_landing" "$status_post" "$svg_count" "$linked" <<'PY'
import json, sys
from pathlib import Path

date, post_url, landing, s_landing, s_post, svg, linked = sys.argv[1:8]
snapshot = Path(f'/home/kjkim/dev/akaslany.github.io/assets/data/treasury-demand/{date}.json')
data = json.loads(snapshot.read_text(encoding='utf-8')) if snapshot.is_file() else {}
custody = data.get('custody') or []
tga = data.get('tga') or []
rrp = data.get('rrp') or []
cot = (data.get('cot') or {}).get('series') or {}
ten = cot.get('10Y') or []

def fmt(value, unit=''):
    return '—' if value is None else f'{value:,.1f}{unit}'

custody_4w = round(custody[-1]['level_bn'] - custody[0]['level_bn'], 1) if len(custody) > 1 else None
ten_chg = round((ten[-1]['asset_mgr_net'] - ten[0]['asset_mgr_net']) / 1000) if len(ten) > 1 else None
ok = s_landing == '200' and s_post == '200' and int(svg or 0) >= 2 and int(linked or 0) >= 1

print('국채 수급 주간호 발행 ' + ('완료' if ok else '확인 필요'))
print(f'- 리포트: {post_url} (HTTP {s_post}, 차트 {svg}개)')
print(f'- 목록: {landing} (HTTP {s_landing}, 신규 글 링크 {"있음" if int(linked or 0) >= 1 else "없음"})')
print(f'- custody 4주 {fmt(custody_4w, "B")} / 잔고 {fmt(custody[-1]["level_bn"] if custody else None, "B")}')
print(f'- 자산운용 10년 순롱 4주 {("+" if (ten_chg or 0) >= 0 else "")}{ten_chg}k' if ten_chg is not None else '- 자산운용 10년 데이터 없음')
print(f'- TGA {fmt(tga[-1]["balance_bn"] if tga else None, "B")} / RRP {fmt(rrp[-1]["accepted_bn"] if rrp else None, "B")}')
if not ok:
    print('주의: 발행 확인이 끝나지 않았습니다. GitHub Pages 빌드 상태를 확인하세요.')
    sys.exit(1)
PY
