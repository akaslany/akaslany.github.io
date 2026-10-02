import sys
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from ai_report_typography import normalize_report_typography as fmt, link_sources, semantic_text


class TypographyTests(unittest.TestCase):
    def test_plain_event_fields(self):
        s = '  내용: 발표다. 조건은 미확인이다.\n  Evidence: A\n  한국 연결: 잠재적이다.\n  다음 확인: 재현.'
        out = fmt(s)
        self.assertIn('**내용:** 발표다. 조건은 미확인이다.\n\n**Evidence:** A', out)
        self.assertEqual(semantic_text(s), semantic_text(out))

    def test_bullet_source_and_signal(self):
        s = '- 발표됐다. 조건은 미확인이다.\n  출처: https://a.example/x\n  출처: https://b.example/y'
        out = fmt(s)
        self.assertIn('- **발표됐다.** 조건은 미확인이다.', out)
        self.assertEqual(out.count('  - **출처:**'), 2)
        self.assertEqual(semantic_text(s), semantic_text(out))

    def test_multiple_inline_links(self):
        s = '출처: https://a.example/x https://b.example/y)'
        out = link_sources(s)
        self.assertIn('[a.example](https://a.example/x) [b.example](https://b.example/y))', out)
        self.assertEqual(semantic_text(s), semantic_text(out))

    def test_adjacent_links(self):
        out = link_sources('https://a.example/xhttps://b.example/y')
        self.assertEqual(out, '[a.example](https://a.example/x) [b.example](https://b.example/y)')

    def test_existing_markdown_protected(self):
        s = '[원문](https://a.example/x) <https://auto.example/z>'
        self.assertEqual(link_sources(s), s)
        self.assertEqual(fmt(s), s)

    def test_inline_exact_user_regression(self):
        for citation in ('https://a.example/x', '`https://a.example/x`',
                         '[원문](https://a.example/x)',
                         r'\[원문\]\(https://a.example/x\)',
                         r'\[원문\](https://a.example/x)'):
            for grade in 'ABC':
                s = f'- 발표다. Evidence {grade}, 조건 미확인 / 출처: {citation} 출처: https://b.example/y'
                out = fmt(s)
                self.assertEqual(out.count('<br class="report-field-break" />'), 3)
                self.assertEqual(semantic_text(s), semantic_text(out))
                self.assertEqual(fmt(out), out)
                self.assertNotIn('`https://', out)
                self.assertIn('(https://a.example/x)', out)
                self.assertIn('(https://b.example/y)', out)

    def test_every_section_and_table_inline_evidence(self):
        for s in ('편집 원칙이다. Evidence A는 일차 문서다.',
                  '| 층 | 투자 발표, Evidence B | 조건 |',
                  '- 제외: 일차 발표 Evidence A는 인정한다.',
                  '- 후보: 연구, Evidence C (미확인 / 출처: https://a.example/a_(b)?x=1&y=2)'):
            out = fmt(s)
            self.assertIn('<br class="report-field-break" />Evidence', out)
            self.assertEqual(fmt(out), out)
            self.assertEqual(semantic_text(s), semantic_text(out))

    def test_code_expressions_and_fences_protected(self):
        s = '실행 예시 `Evidence A 출처: fetch("https://a.example/x")`\n```text\n내용: Evidence A 출처: https://a.example/x\n```'
        self.assertEqual(fmt(s), s)

    def test_balanced_parentheses_and_query(self):
        s = '출처: https://a.example/a_(b)?x=1&y=2.'
        out = link_sources(s)
        self.assertIn('(https://a.example/a_(b)?x=1&y=2).', out)
        self.assertEqual(semantic_text(s), semantic_text(out))

    def test_fenced_code_unchanged(self):
        s = '```text\n내용: https://code.example/x\n```'
        self.assertEqual(fmt(s), s)

    def test_status_and_uncertainty(self):
        s = '상태: production=unknown\n불확실성: 재현 미확인.'
        self.assertEqual(semantic_text(s), semantic_text(fmt(s)))
        self.assertIn('\n\n**불확실성:**', fmt(s))

    def test_canonical_public_digest_and_idempotence(self):
        sys.path.insert(0, '/home/kjkim/.local/bin')
        import publish_ai_daily_intel_to_github as p
        path = p.REPORT_ROOT / '2026/10/2026-10-02-ai-daily-intel.md'
        if not path.exists():
            self.skipTest('production canonical report not available')
        source = path.read_text()
        self.assertEqual(p.validate_source(path, source), '2026-10-02')
        public = p.format_report_for_public(source)
        out = fmt(public)
        self.assertEqual(semantic_text(public), semantic_text(out))
        self.assertEqual(fmt(out), out)
        self.assertEqual(out.count('**내용:**'), 23)
        self.assertIn('수록 사건 수:** 23', out)


if __name__ == '__main__':
    unittest.main()
