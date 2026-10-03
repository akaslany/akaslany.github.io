#!/usr/bin/env python3
"""Publish the latest canonical AI Daily Intel report to akaslany.github.io."""
from __future__ import annotations

import fcntl
import argparse
import json
import re
import subprocess
import sys
from datetime import datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

sys.path.insert(0, str(Path(__file__).resolve().parent))
from publication_notice import send_publication_notice, verify_public_url, _read_ledger
from ai_report_typography import normalize_report_typography

REPORT_ROOT = Path('/home/kjkim/work/hermes/ai-daily-intel/reports')
SITE_REPO = Path('/home/kjkim/dev/akaslany.github.io')
LOCK_PATH = Path('/home/kjkim/.cache/akaslany-github-pages.lock')
LOG_PATH = Path('/home/kjkim/.hermes/logs/daily_ai_intel_pages.log')
BASE_URL = 'https://akaslany.github.io'
HEADINGS = (
    '1 오늘의 AI 한 문장', '2 핵심 신호 5', '3 영역별 AI 브리프',
    '4 기술→산업 전달경로', '5 AI Stack Signal Map',
    '6 반증·과장·재현성 감사', '7 다음 확인 일정', '8 Coverage Audit',
)


def log(message: str) -> None:
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(ZoneInfo('Asia/Seoul')).isoformat(timespec='seconds')
    with LOG_PATH.open('a', encoding='utf-8') as fh:
        fh.write(f'[{stamp}] {message}\n')


def run(*args: str, cwd: Path | None = None, check: bool = True) -> subprocess.CompletedProcess[str]:
    proc = subprocess.run(args, cwd=cwd, text=True, capture_output=True, timeout=180)
    if check and proc.returncode:
        raise RuntimeError(f"command failed rc={proc.returncode}: {' '.join(args)}\n{proc.stderr[-2000:]}")
    return proc


def git(*args: str, check: bool = True) -> subprocess.CompletedProcess[str]:
    return run('git', *args, cwd=SITE_REPO, check=check)


def newest_report() -> Path:
    paths = sorted(REPORT_ROOT.glob('*/*/*-ai-daily-intel.md'), reverse=True)
    if not paths:
        raise RuntimeError(f'no AI Daily Intel reports found under {REPORT_ROOT}')
    return paths[0]


def current_report() -> Path:
    """Scheduled fallback uses the runner's previous-KST-day date, never stale latest."""
    day = datetime.now(ZoneInfo('Asia/Seoul')).date() - timedelta(days=1)
    return REPORT_ROOT / f'{day.year:04d}' / f'{day.month:02d}' / f'{day.isoformat()}-ai-daily-intel.md'


def already_notified(date: str, url: str) -> bool:
    # A presentation-only report commit must not resend an already-current
    # completion notice. Keep all existing commit-keyed ledger receipts intact.
    prefix = f'ai-daily-intel:{date}:'
    return any(key.startswith(prefix) and item.get('url') == url
               for key, item in _read_ledger().items())


def validate_source(path: Path, text: str) -> str:
    match = re.fullmatch(r'(20\d{2}-\d{2}-\d{2})-ai-daily-intel\.md', path.name)
    if not match:
        raise RuntimeError(f'unexpected report filename: {path.name}')
    date = match.group(1)
    preamble = text.split('## 1 ', 1)[0]
    if f'Report date: {date}' not in preamble:
        raise RuntimeError('report metadata date mismatch')
    # Quiet-day scaling (mirrors send_daily_ai_intel_fast.min_report_chars):
    # a complete short report with zero verified events must publish.
    entry_ids = set(re.findall(
        r'^\s*(?:[-*]\s*)?(?:Event ID:\s*)?\[?(EVT-\d{8}-[A-Z0-9][A-Z0-9-]*)\]?(?=[\s\]])',
        text, re.M))
    floor = min(5000, 2000 + 400 * len(entry_ids))
    if len(text.strip()) < floor:
        raise RuntimeError('report is unexpectedly short')
    actual = re.findall(r'^##\s+(.+?)\s*$', text, re.M)
    if actual != list(HEADINGS):
        raise RuntimeError(f'AI Daily Intel v2 heading drift: {actual!r}')
    if entry_ids and not re.search(r'https?://\S+', text):
        raise RuntimeError('report has no source URL')
    forbidden = {
        'local home path': r'/home/kjkim',
        'private IPv4': r'\b(?:10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})\b',
        'GitHub token': r'\bgh[opsu]_[A-Za-z0-9_]{20,}',
        'Telegram bot token': r'\b\d{7,12}:[A-Za-z0-9_-]{30,}',
        'credential assignment': r'(?im)^\s*(?:password|passwd|api[_-]?key|secret|token)\s*[:=]\s*\S+',
    }
    hits = [name for name, pattern in forbidden.items() if re.search(pattern, text)]
    if hits:
        raise RuntimeError(f'public export safety gate failed: {hits}')
    return date


def make_post(date: str, report: str) -> str:
    body = normalize_report_typography(format_report_for_public(report))
    return f'''---
layout: ai-intel
title: "AI Daily Intel — {date}"
date: {date} 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/{date}/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

{body}
'''


def _public_event_name(title: str) -> str:
    """Return a compact reader-facing name for an internal ledger entry."""
    title = re.sub(r'\s*\((?:canonical|동일 창 내|연관:)[^)]*\)', '', title)
    return title.split(' — ', 1)[0].strip()


def format_report_for_public(report: str) -> str:
    """Hide operational IDs and promote reader-facing hierarchy and labels."""
    lines = report.strip().splitlines()
    if lines and lines[0].lstrip().startswith('#'):
        lines = lines[1:]
    event_names: dict[str, str] = {}
    for line in lines:
        match = re.match(r'^\[(EVT-\d{8}-[A-Z0-9-]+)\]\s+(.+)$', line.strip())
        if match:
            event_names[match.group(1)] = _public_event_name(match.group(2))

    def replace_ids(text: str) -> str:
        def replacement(match: re.Match[str]) -> str:
            name = event_names.get(match.group(0))
            return f'**{name}**' if name else '관련 항목'
        text = re.sub(r'EVT-\d{8}-[A-Z0-9-]+', replacement, text)
        text = re.sub(r'\s*\((?:canonical[,;]?\s*)?(?:구\s+)?관련 항목\s*(?:통합)?\)', '', text)
        return text

    output: list[str] = []
    # Internal ledger fields: validation inputs, never reader-facing.
    internal_only = {
        'published_at', 'announcement', 'availability', 'code',
        'independent_reproduction', 'production', 'revenue', 'regulatory',
    }
    for raw in lines:
        stripped = raw.strip()
        if re.match(r'^-\s*Event ID:', stripped):
            continue
        field = re.match(r'^\s*(?:-\s*)?([^:]+):', stripped)
        if field and field.group(1).strip() in internal_only:
            continue
        if stripped.startswith('[중복 제거 안내]') or stripped.startswith('- [중복 제거 안내]'):
            continue

        event = re.match(r'^\[(EVT-\d{8}-[A-Z0-9-]+)\]\s+(.+)$', stripped)
        signal = re.match(r'^\[신호\s+(\d+)\]\s+(.+)$', stripped)
        if event:
            output.append(f'#### {replace_ids(event.group(2))}')
            continue
        if signal:
            output.append(f'### 신호 {signal.group(1)} · {replace_ids(signal.group(2))}')
            continue

        line = replace_ids(raw)
        metadata = re.match(r'^(Report date|Cutoff|Window|Researchers|Included Event count):\s*(.*)$', line)
        if metadata:
            metadata_names = {
                'Report date': '보고서 날짜', 'Cutoff': '기준 시각',
                'Window': '수집 구간', 'Researchers': '조사 범위',
                'Included Event count': '수록 사건 수',
            }
            output.append(f'- **{metadata_names[metadata.group(1)]}:** {metadata.group(2)}')
            continue
        label_map = {
            'Evidence': '근거 등급', 'Source URL': '출처', '상태': '상태',
            '상태(Agents API)': '상태', '요약': '핵심 내용',
            'Korea link': '한국 연관성', '왜 강한가': '중요한 이유',
            '처리': '판단',
        }
        label = re.match(r'^(\s*-\s*)([^:]+):\s*(.*)$', line)
        if label and label.group(2).strip() in label_map:
            public_label = label_map[label.group(2).strip()]
            value = label.group(3)
            if public_label == '상태':
                status_names = {
                    'announcement': '발표', 'availability': '이용 가능',
                    'code': '코드·웨이트', 'independent_reproduction': '독립 재현',
                    'production': '운영 사용', 'revenue': '매출', 'regulatory': '규제',
                }
                for internal, public in status_names.items():
                    value = re.sub(rf'\b{internal}=', f'{public}=', value)
                value = re.sub(r'\byes\b', '있음', value)
                value = re.sub(r'\bno\b', '없음', value)
                value = re.sub(r'\bunknown\b', '미확인', value)
            line = f'{label.group(1)}**{public_label}:** {value}'
        output.append(line)

    body = '\n'.join(output).lstrip()
    if re.search(r'EVT-\d{8}-', body):
        raise RuntimeError('internal Event ID leaked into public rendering')
    return body


def ensure_index_page() -> Path:
    page = SITE_REPO / 'ai-intel.md'
    # The category page is curated separately as latest-five + History. Never
    # rewrite an existing page from the publisher.
    if page.exists():
        return page
    content = '''---
layout: page
title: AI Daily Intel
permalink: /ai-intel/
---

검증 가능한 공개 출처를 바탕으로 AI 산업·모델·인프라의 핵심 신호를 투자자·개발자 관점에서 정리한 일일 인텔리전스입니다.

{% assign posts = site.categories["ai-daily-intel"] %}
{% if posts and posts.size > 0 %}
{% for post in posts limit:5 %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% if posts.size > 5 %}

[History에서 이전 리포트 보기]({{ '/history/#ai-daily-intel' | relative_url }})
{% endif %}
{% else %}
아직 공개된 리포트가 없습니다.
{% endif %}
'''
    page.write_text(content, encoding='utf-8')
    return page


def publish(source: Path, dry_run: bool = False) -> dict:
    report = source.read_text(encoding='utf-8')
    date = validate_source(source, report)
    url = f'{BASE_URL}/ai-intel/{date}/'
    if dry_run:
        return {'status': 'dry-run-valid', 'date': date, 'source': str(source), 'url': url}
    if not (SITE_REPO / '.git').is_dir():
        raise RuntimeError(f'GitHub Pages checkout is missing: {SITE_REPO}')

    git('fetch', 'origin', 'main')
    git('checkout', 'main')
    git('pull', '--ff-only', 'origin', 'main')

    post = SITE_REPO / '_posts' / f'{date}-ai-daily-intel.md'
    post.parent.mkdir(parents=True, exist_ok=True)
    post.write_text(make_post(date, report), encoding='utf-8')
    index_page = ensure_index_page()
    git('add', '--', str(post.relative_to(SITE_REPO)), str(index_page.relative_to(SITE_REPO)))
    changed = git('diff', '--cached', '--quiet', check=False).returncode != 0
    if changed:
        git('commit', '-m', f'Publish AI Daily Intel for {date}')
        git('push', 'origin', 'main')
    # Key notices to the commit that last changed this report, not HEAD; an
    # unrelated later site commit must not cause a duplicate fallback notice.
    commit = git('log', '-1', '--format=%H', '--', str(post.relative_to(SITE_REPO))).stdout.strip()
    result = {
        'status': 'published' if changed else 'already-current',
        'date': date,
        'source': str(source),
        'post': str(post),
        'commit': commit,
        'url': url,
        'index_url': f'{BASE_URL}/ai-intel/',
    }
    verify_public_url(url, date)
    if not changed and already_notified(date, url):
        result['notification'] = 'already-sent'
    else:
        result['notification'] = 'sent' if send_publication_notice(
            report_key='ai-daily-intel', report_name='AI Daily Intel', date=date,
            commit=commit, url=url,
        ) else 'already-sent'
    log(json.dumps(result, ensure_ascii=False))
    return result


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    parser.add_argument('report', nargs='?')
    args = parser.parse_args(argv if argv is not None else sys.argv[1:])
    source = Path(args.report).resolve() if args.report else current_report()
    if not source.is_file():
        if not args.report:
            print(json.dumps({'status': 'waiting-for-current-report', 'source': str(source)}, ensure_ascii=False))
            return 0
        raise RuntimeError(f'report not found: {source}')
    LOCK_PATH.parent.mkdir(parents=True, exist_ok=True)
    with LOCK_PATH.open('w') as lock:
        fcntl.flock(lock.fileno(), fcntl.LOCK_EX)
        print(json.dumps(publish(source, dry_run=args.dry_run), ensure_ascii=False))
    return 0


if __name__ == '__main__':
    try:
        raise SystemExit(main())
    except Exception as exc:
        log(f'ERROR: {type(exc).__name__}: {exc}')
        print(json.dumps({'status': 'error', 'error': f'{type(exc).__name__}: {exc}'}, ensure_ascii=False), file=sys.stderr)
        raise
