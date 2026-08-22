import re, html

SRC = "/Users/phaedrus/Documents/PhaedrusAI-main/Obsidian/MEMORY.md"
OUT = "layouts/_default/phaedrus-obsidian.html"

def inline(s):
    s = s.replace("fuck", "f***").replace("Fuck", "F***")
    s = html.escape(s, quote=False)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    s = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r'<a href="\2" target="_blank" rel="noopener">\1</a>', s)
    s = re.sub(r"_([A-Za-z][^_]*)_", r"<em>\1</em>", s)
    return s

lines = open(SRC).read().splitlines()
sections = []   # (name, [entries]) ; entry = (item, detail) or ("_note_", text)
cur = None
entry_lines = []

def flush_entry():
    global entry_lines
    if not entry_lines or cur is None: return
    raw = entry_lines
    first = raw[0][2:].strip()  # strip "- "
    extra = []
    in_code = False
    for l in raw[1:]:
        t = l.strip()
        if t.startswith("```"):
            in_code = not in_code
            extra.append("\u0000CODE\u0000")
            continue
        if t:
            extra.append(t)
    m = re.match(r"\*\*(.+?)\*\*\s*(.*)", first)
    if m:
        item = m.group(1).rstrip(".").rstrip(":")
        detail = m.group(2)
    else:
        item = ""
        detail = first
    if extra:
        detail = (detail + " " if detail else "") + " ".join(extra)
    # collapse code markers into <code> spans
    parts = detail.split("\u0000CODE\u0000")
    out = ""
    for i,p in enumerate(parts):
        p = p.strip()
        if i % 2 == 1:
            out += ' <code>' + html.escape(p, quote=False).replace("fuck","f***") + '</code> '
        else:
            out += inline(p)
    cur[1].append((inline(item), out.strip()))
    entry_lines = []

preamble = []
for ln in lines:
    if ln.startswith("# "):
        continue
    h = re.match(r"^(##+)\s+(.*)", ln)
    if h:
        flush_entry()
        name = h.group(2).strip()
        if h.group(1) == "###" and sections:
            name = sections[-1][0] + " — " + name
        cur = (name, [])
        sections.append(cur)
        continue
    if ln.startswith("- "):
        flush_entry()
        if cur is None:
            cur = ("General", []); sections.append(cur)
        entry_lines = [ln]
        continue
    if entry_lines:
        entry_lines.append(ln)
        continue
    t = ln.strip()
    if t in ("", "---"): continue
    if cur is None:
        if t.startswith("_") : preamble.append(t.strip("_"))
    else:
        cur[1].append(("", inline(t.strip("_"))))
flush_entry()

rows = []
n = 1
def band(label, count):
    global n
    rows.append(f'<tr class="stage-band"><td class="row-num">{n}</td><td colspan="2">{label}<span class="stage-count">— {count}</span></td></tr>'); 
def row(item, detail):
    global n
    it = f'<span class="item-name">{item}</span>' if item else '<span class="muted-dash">—</span>'
    rows.append(f'<tr><td class="row-num">{n}</td><td class="item-cell">{it}</td><td class="bg-cell">{detail}</td></tr>')

n = 1
band("About This File", len(preamble)); n += 1
for p in preamble:
    row("", inline(p)); n += 1
for name, entries in sections:
    if not entries: continue
    band(html.escape(name), f"{len(entries)} entries"); n += 1
    for item, detail in entries:
        row(item, detail); n += 1

TBODY = "\n".join(rows)

template = open("layouts/_default/sdcfo-candidates.html").read()

head_style_end = template.index("</style>")
style = template[:head_style_end]

page = f"""<!DOCTYPE html>
<html lang="en" dir="auto">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{{{ .Title }}}}</title>
  <meta name="description" content="{{{{ .Params.summary | default .Description }}}}">
  <meta name="robots" content="noindex, nofollow">
  <link rel="icon" href="/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;500&family=Manrope:wght@600;700&display=swap" rel="stylesheet">
  <style>
    :root {{
      --navy-950: #071726; --teal-300: #39d0c6; --sheet-green: #0b5d3b; --sheet-green-mid: #188038;
      --band-green: #d9ead3; --band-green-text: #0b5d3b; --grid-line: #d7dce0; --col-header-bg: #f1f3f4;
      --col-header-text: #5f6368; --cell-text: #202124; --muted: #5f6368;
    }}
    *, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{ background: #f8f9fa; color: var(--cell-text); font-family: "Roboto", Arial, sans-serif; }}
    a {{ color: inherit; text-decoration: none; }}
    .site-header {{ background: rgba(7,23,38,0.97); border-bottom: 1px solid rgba(255,255,255,0.12); }}
    .header-inner {{ max-width: min(1300px, calc(100vw - 40px)); margin: 0 auto; height: 60px; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; }}
    .header-brand {{ color: #fff; font-family: "Manrope", sans-serif; font-size: 17px; font-weight: 700; letter-spacing: -0.03em; }}
    .header-brand span {{ color: var(--teal-300); }}
    .header-note {{ color: rgba(255,255,255,0.55); font-size: 12px; }}
    .sheet-chrome {{ max-width: min(1300px, calc(100vw - 24px)); margin: 18px auto 0; background: #fff; border: 1px solid var(--grid-line); border-radius: 10px 10px 0 0; overflow: hidden; box-shadow: 0 8px 30px rgba(7,23,38,0.08); }}
    .sheet-titlebar {{ display: flex; align-items: center; gap: 12px; padding: 12px 16px 6px; }}
    .sheet-icon {{ width: 26px; height: 34px; border-radius: 4px; background: var(--sheet-green-mid); position: relative; flex-shrink: 0; }}
    .sheet-icon::after {{ content: ""; position: absolute; inset: 9px 5px 6px; background:
      linear-gradient(#fff, #fff) 0 0/100% 2px no-repeat,
      linear-gradient(#fff, #fff) 0 6px/100% 2px no-repeat,
      linear-gradient(#fff, #fff) 0 12px/100% 2px no-repeat; opacity: 0.95; }}
    .sheet-name {{ font-size: 17px; font-weight: 500; }}
    .sheet-menus {{ display: flex; gap: 14px; margin-top: 3px; color: var(--muted); font-size: 12.5px; }}
    .sheet-updated {{ margin-left: auto; color: var(--muted); font-size: 12px; }}
    .formula-bar {{ display: flex; align-items: center; gap: 10px; border-top: 1px solid var(--grid-line); border-bottom: 1px solid var(--grid-line); padding: 6px 16px; font-size: 13px; }}
    .fx {{ color: var(--muted); font-style: italic; font-family: "Roboto Mono", monospace; font-size: 12px; }}
    .formula-box {{ flex: 1; color: var(--muted); font-family: "Roboto Mono", monospace; font-size: 12px; border-left: 1px solid var(--grid-line); padding-left: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }}
    .grid-wrap {{ overflow-x: auto; }}
    table {{ border-collapse: collapse; width: 100%; min-width: 900px; font-size: 13px; }}
    th, td {{ border: 1px solid var(--grid-line); padding: 7px 10px; vertical-align: top; text-align: left; }}
    .col-letters th {{ background: var(--col-header-bg); color: var(--col-header-text); font-weight: 500; font-size: 11px; text-align: center; padding: 3px 4px; border-color: #c9ced3; }}
    .row-num {{ background: var(--col-header-bg); color: var(--col-header-text); font-size: 11px; text-align: center; width: 34px; min-width: 34px; font-weight: 500; border-color: #c9ced3 !important; vertical-align: middle; }}
    .head-band th {{ background: var(--sheet-green); color: #fff; font-weight: 700; font-size: 12px; letter-spacing: 0.02em; white-space: nowrap; border-color: #0a5134; }}
    .stage-band td {{ background: var(--band-green); color: var(--band-green-text); font-weight: 700; font-size: 12.5px; letter-spacing: 0.03em; text-transform: uppercase; }}
    .stage-band .stage-count {{ font-weight: 500; text-transform: none; letter-spacing: 0; color: #3c6e50; margin-left: 8px; }}
    .item-cell {{ min-width: 220px; max-width: 320px; }}
    .item-name {{ font-weight: 500; }}
    .muted-dash {{ color: #9aa0a6; }}
    .bg-cell {{ color: #3c4043; line-height: 1.5; }}
    .bg-cell code, .item-cell code {{ font-family: "Roboto Mono", monospace; font-size: 11.5px; background: #f1f3f4; padding: 1px 5px; border-radius: 4px; }}
    .bg-cell a {{ color: var(--sheet-green-mid); font-weight: 500; }}
    tbody tr:hover td:not(.row-num) {{ background: #f6fbf8; }}
    .stage-band:hover td {{ background: var(--band-green) !important; }}
    .sheet-tabs {{ display: flex; align-items: center; gap: 2px; background: var(--col-header-bg); border-top: 1px solid var(--grid-line); padding: 5px 12px 0; overflow-x: auto; }}
    .sheet-tab {{ padding: 6px 18px 7px; font-size: 12.5px; color: var(--muted); border: 1px solid transparent; border-bottom: none; border-radius: 6px 6px 0 0; white-space: nowrap; }}
    .sheet-tab.active {{ background: #fff; color: var(--sheet-green); font-weight: 700; border-color: var(--grid-line); position: relative; top: 1px; }}
    .page-footer {{ max-width: min(1300px, calc(100vw - 24px)); margin: 0 auto 50px; padding: 14px 6px; color: var(--muted); font-size: 12px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; }}
    .page-footer a {{ color: var(--sheet-green-mid); font-weight: 500; }}
    @media (max-width: 700px) {{ .sheet-menus {{ display: none; }} .header-note {{ display: none; }} }}
  </style>
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a class="header-brand" href="/phaedrus/">Phaedrus<span>.Obsidian</span></a>
      <span class="header-note">Internal · The workspace, as a spreadsheet</span>
    </div>
  </header>
  <div class="sheet-chrome">
    <div class="sheet-titlebar">
      <div class="sheet-icon" aria-hidden="true"></div>
      <div>
        <div class="sheet-name">Phaedrus Obsidian Workspace</div>
        <div class="sheet-menus"><span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Data</span><span>Help</span></div>
      </div>
      <span class="sheet-updated">Last updated 2026-08-21 · Maintained by Phaedrus</span>
    </div>
    <div class="formula-bar">
      <span class="fx">fx</span>
      <span class="formula-box">=IMPORTRANGE("obsidian://PhaedrusAI-main/Obsidian/MEMORY.md", "Memory!A:B")</span>
    </div>
    <div class="grid-wrap">
      <table>
        <thead>
          <tr class="col-letters">
            <th class="row-num"></th>
            <th>A</th><th>B</th>
          </tr>
          <tr class="head-band">
            <td class="row-num">·</td>
            <th>Entry</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
{TBODY}
        </tbody>
      </table>
    </div>
    <div class="sheet-tabs">
      <span class="sheet-tab active">MEMORY.md</span>
      <span class="sheet-tab">AGENTS.md</span>
      <span class="sheet-tab">SOUL.md</span>
      <span class="sheet-tab">USER.md</span>
      <span class="sheet-tab">TOOLS.md</span>
      <span class="sheet-tab">HEARTBEAT.md</span>
    </div>
  </div>
  <div class="page-footer">
    <span>Live mirror of <code>MEMORY.md</code> — Phaedrus's long-term memory file, loaded every session. Other tabs coming as they're wired up.</span>
    <a href="/phaedrus/">← Phaedrus system reference</a>
  </div>
</body>
</html>
"""
open(OUT, "w").write(page)
print("rows:", len(rows))
