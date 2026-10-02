"""Deterministic presentation-only AI report formatting (after public filtering)."""
import re
from urllib.parse import urlsplit

LABELS = ('내용', 'Evidence', '근거 등급', '출처', '출처 URL', '일차 출처 URL',
          '코드 URL', 'Source URL', '한국 연결', '한국 연관성', '다음 확인',
          '상태', '핵심 내용', '요약', '중요한 이유', '판단', '불확실성')
FIELD = re.compile(r'^(\s*)([-*]\s+)?(' + '|'.join(map(re.escape, LABELS)) + r'):\s*(.*)$')
# Existing links, code and HTML autolinks must remain byte-stable.
PROTECTED = re.compile(r'(`+).*?\1|!?\[[^\]\n]*\]\([^\n]*?\)(?=\s|$|[.,;])|<https?://[^>]+>')
URL = re.compile(r'https?://[^\s<>]+')


def link_sources(text):
    def plain(chunk):
        def anchor(m):
            url = m.group()
            suffix = ''
            while url and (url[-1] in '.,;!?，。' or
                           (url[-1] == ')' and url.count(')') > url.count('(')) or
                           (url[-1] == ']' and url.count(']') > url.count('['))):
                suffix = url[-1] + suffix
                url = url[:-1]
            # Adjacent URLs without whitespace are separate citations.
            parts = re.split(r'(?=https?://)', url)
            return ' '.join(f'[{urlsplit(p).netloc}]({p})' for p in parts if p) + suffix
        return URL.sub(anchor, chunk)
    result, pos = [], 0
    for m in PROTECTED.finditer(text):
        result.extend((plain(text[pos:m.start()]), m.group()))
        pos = m.end()
    result.append(plain(text[pos:]))
    return ''.join(result)


def semantic_text(text):
    """Comparable public words and exact URLs, ignoring presentation syntax."""
    text = re.sub(r'\[[^\]\n]*\]\((https?://[^\n]*?)\)(?=\s|$|[.,;)])', r'\1', text)
    text = re.sub(r'(?m)^\s*[-*]\s+', '', text)
    return re.sub(r'\s+', '', text.replace('**', ''))


def normalize_report_typography(body):
    output = []
    fenced = False
    for line in body.splitlines():
        if line.lstrip().startswith(('```', '~~~')):
            fenced = not fenced
            output.append(line)
            continue
        if fenced:
            output.append(line)
            continue
        field = FIELD.match(line)
        if field:
            indent, bullet, label, value = field.groups()
            formatted = f'**{label}:** {link_sources(value)}'
            if indent and not bullet and label in ('출처', '출처 URL', 'Source URL') and output and any(x.lstrip().startswith('- ') for x in output[-3:]):
                # Signal source continuations become nested items, not collapsed prose.
                output.append('  - ' + formatted)
            elif bullet:
                output.append(indent + bullet + formatted)
            else:
                if output and output[-1] != '':
                    output.append('')
                output.extend((formatted, ''))
        else:
            line = link_sources(line)
            # Emphasize just the first conclusion sentence, never the whole paragraph.
            if line.startswith('- ') and '**' not in line:
                sentence = re.match(r'^- ([^\n]+?다\.)(\s+.+)$', line)
                if sentence:
                    line = f'- **{sentence.group(1)}**{sentence.group(2)}'
            output.append(line)
    result = '\n'.join(output).strip()
    if semantic_text(body) != semantic_text(result):
        raise RuntimeError('AI presentation changed public words or URLs')
    return result
