# AI Daily Intel presentation

Production service: `daily-ai-intel-pages.service`, running
`~/.local/bin/publish_ai_daily_intel_to_github.py` with the sibling
`ai_report_typography.py` (both tracked here as deployment mirrors).
Existing `publication_notice.py` remains an external production dependency.

The public filter retains its existing internal-field policy. The subsequent
formatter changes presentation only: semantic field paragraphs, label emphasis,
first-sentence conclusion emphasis, domain-labelled source anchors, protected
existing Markdown/code expressions, and a fail-closed whitespace/markup-normalized
public content comparison. URL-only inline code and escaped citation Markdown
are rendered as links. Inline Evidence A/B/C and 출처 fields receive explicit HTML
line breaks throughout prose, lists and table cells; Markdown newlines alone
collapse, and a line-start-only field matcher misses Watchlist and signal prose.
Canonical research, statuses, event counts and URLs are not
rewritten. `_layouts/ai-intel.html` scopes responsive typography to AI reports.

Tests:

```sh
/usr/bin/python3 -m unittest discover -s ops/ai-intel/tests -v
```

Browser verification (requires Puppeteer Core and Google Chrome):

```sh
AUDIT_URL='https://akaslany.github.io/ai-intel/2026-10-02/?v=8a87494' \
EXPECT_LABELS=86 EXPECT_ANCHORS=41 CLICK=1 \
PUPPETEER_MODULE=/home/kjkim/research/x-betatomorrow/browser/node_modules/puppeteer-core \
node ops/ai-intel/tests/verify_public_dom.cjs
```

The browser assertion checks every Evidence/source text rectangle at 1280px and
390px, every anchor's href/size/pointer-events/elementFromPoint hit target, no bare
URLs, and an actual arXiv-link click/navigation. It writes its receipt in TMPDIR.
Count-only HTML verification is insufficient: the previous page had 41 working
anchors but 26 desktop / 22 mobile label occurrences still sharing a prose line.

Telegram is currently publication-notice-only (`telegram_body_suppressed=true`):
the preserved editorial `.telegram.txt` draft is not sent. The notice uses a raw
URL, not unparsed Markdown. Do not change its archive/manifest or send a duplicate
full report to fix Pages presentation. No existing Telegram message is edited by
this deployment.

Deploy changed publisher mirrors to `~/.local/bin/`, then use the service normally
for future reports. For a presentation-only republish, generate `make_post` under
`~/.cache/akaslany-github-pages.lock`, commit only explicit AI paths, push, wait for
Pages build and read back the exact public report. Do not call `publish()` for a
presentation-only correction: it also invokes the Telegram publication notice.

2026-10-02 correction: canonical SHA-256 and public semantic digest verified
unchanged; all 23 adopted events retained. Adjacent source links and inline
watchlist citations are covered by focused tests. Runtime JSON/HTML/Chrome probes
belong in scratch, not this repository.
