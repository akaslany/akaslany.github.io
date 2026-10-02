# AI Daily Intel presentation

Production service: `daily-ai-intel-pages.service`, running
`~/.local/bin/publish_ai_daily_intel_to_github.py` with the sibling
`ai_report_typography.py` (both tracked here as deployment mirrors).
Existing `publication_notice.py` remains an external production dependency.

The public filter retains its existing internal-field policy. The subsequent
formatter changes presentation only: semantic field paragraphs, label emphasis,
first-sentence conclusion emphasis, domain-labelled source anchors, protected
existing Markdown/code, and a fail-closed whitespace/markup-normalized public
content comparison. Canonical research, statuses, event counts and URLs are not
rewritten. `_layouts/ai-intel.html` scopes responsive typography to AI reports.

Tests:

```sh
/usr/bin/python3 -m unittest discover -s ops/ai-intel/tests -v
```

Deploy changed publisher mirrors to `~/.local/bin/`, then use the service normally
for future reports. For a presentation-only republish, generate `make_post` under
`~/.cache/akaslany-github-pages.lock`, commit only explicit AI paths, push, wait for
Pages build and read back the exact public report. Do not call `publish()` for a
presentation-only correction: it also invokes the Telegram publication notice.

2026-10-02 correction: canonical SHA-256 and public semantic digest verified
unchanged; all 23 adopted events retained. Adjacent source links and inline
watchlist citations are covered by focused tests. Runtime JSON/HTML/Chrome probes
belong in scratch, not this repository.
