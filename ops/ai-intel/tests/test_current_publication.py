"""Default scheduled publication must not reselect yesterday's stale report."""
import importlib.util
from datetime import datetime
from pathlib import Path
import sys
from zoneinfo import ZoneInfo

import pytest

sys.path.insert(0, '/home/kjkim/.local/bin')
spec = importlib.util.spec_from_file_location('current_publisher', Path(__file__).resolve().parents[1] / 'publish_ai_daily_intel_to_github.py')
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class FixedClock:
    @staticmethod
    def now(tz):
        return datetime(2026, 10, 4, 6, 20, tzinfo=ZoneInfo('Asia/Seoul'))


def test_implicit_publication_waits_for_oct03_not_oct02(tmp_path, monkeypatch, capsys):
    monkeypatch.setattr(mod, 'datetime', FixedClock)
    monkeypatch.setattr(mod, 'REPORT_ROOT', tmp_path)
    stale = tmp_path / '2026/10/2026-10-02-ai-daily-intel.md'
    stale.parent.mkdir(parents=True)
    stale.write_text('stale report')
    monkeypatch.setattr(mod, 'publish', lambda *a, **k: pytest.fail('Must not publish/notify stale report'))
    assert mod.main([]) == 0
    assert 'waiting-for-current-report' in capsys.readouterr().out


def test_expected_path_uses_previous_kst_calendar_day(monkeypatch):
    monkeypatch.setattr(mod, 'datetime', FixedClock)
    assert mod.current_report().name == '2026-10-03-ai-daily-intel.md'


def test_notice_identity_survives_presentation_commit(monkeypatch):
    monkeypatch.setattr(mod, '_read_ledger', lambda: {
        'ai-daily-intel:2026-10-02:oldcommit': {'date': '2026-10-02', 'url': 'https://akaslany.github.io/ai-intel/2026-10-02/'}})
    assert mod.already_notified('2026-10-02', 'https://akaslany.github.io/ai-intel/2026-10-02/')
    assert not mod.already_notified('2026-10-03', 'https://akaslany.github.io/ai-intel/2026-10-03/')
