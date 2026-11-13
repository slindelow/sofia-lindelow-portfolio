/* Shared visuals and renderers for the site.
   Every drawn visual is labelled "Diagram". Only the EEG figures are real project figures.
   Themed through CSS custom properties set by each look:
   --gx-ink, --gx-soft, --gx-line, --gx-paper, --gx-accent, --gx-mono */
(function () {
  const C = window.CONTENT;
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const ARROW = '<svg class="ext" viewBox="0 0 10 10" aria-hidden="true"><path d="M3 2h5v5M8 2 2.5 7.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function link(l) {
    const external = /^https?:|^mailto:/.test(l.href) || /\.pdf$/.test(l.href);
    const attrs = external && !/^mailto:/.test(l.href) ? ' target="_blank" rel="noreferrer"' : '';
    return `<a class="tl" href="${l.href}"${attrs}>${esc(l.label)}${external && !/^mailto:/.test(l.href) ? ARROW : ''}</a>`;
  }
  const links = (arr) => (arr && arr.length ? `<p class="d-links">${arr.map(link).join('<span class="dot" aria-hidden="true">·</span>')}</p>` : '');
  const bullets = (arr) => `<ul class="d-bullets">${arr.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`;
  const tags = (t) => (t ? `<p class="d-tags">${esc(t)}</p>` : '');

  /* ---------- small visuals (viewBox 320 x 200) ---------- */
  const T = (x, y, s, cls = '') => `<text x="${x}" y="${y}" class="gx-t ${cls}">${esc(s)}</text>`;

  const svg = {
    tooling: () => {
      const rows = [
        ['skill-compass', ['installed tools', 'grouped by job', 'routing table']],
        ['Hemingway Bridge', ['session ends', 'BRIDGE.md', 'next session']]
      ];
      const body = rows.map(([name, steps], r) => {
        const y = 34 + r * 72;
        const chips = steps.map((s, i) => {
          const x = 12 + i * 104;
          const arrow = i < 2 ? `<path d="M${x + 92} ${y + 29}h10" class="gx-stroke-soft"/>` : '';
          return `<g class="gx-row" style="--i:${r * 3 + i}"><rect x="${x}" y="${y + 18}" width="92" height="22" rx="5" class="${i === 2 ? 'gx-rowbg gx-model' : 'gx-rowbg'}"/>${T(x + 46, y + 33, s, 'gx-mid')}</g>${arrow}`;
        }).join('');
        return `${T(14, y + 8, name, 'gx-dim')}${chips}`;
      }).join('');
      return `
<svg viewBox="0 0 320 200" class="gx-svg gx-tooling" role="img" aria-label="Diagram of the agent tooling: skill-compass turns installed tools into a routing table, and Hemingway Bridge carries each project's next step from one agent session to the next">
  ${body}
  ${T(14, 186, 'Claude Code · Codex · Gemini CLI', 'gx-s gx-sfix')}
</svg>`;
    },

    relay: () => `
<svg viewBox="0 0 320 200" class="gx-svg gx-relay" role="img" aria-label="Diagram of the RELAY loop: an unanswered Slack question, a deadline, a cited draft and human approval">
  ${T(18, 24, '#customer-success', 'gx-dim')}
  <rect x="18" y="38" width="112" height="16" rx="4" class="gx-fill"/>
  <rect x="18" y="62" width="86" height="16" rx="4" class="gx-fill"/>
  <rect x="18" y="86" width="124" height="16" rx="4" class="gx-fill gx-q"/>
  <rect x="18" y="86" width="124" height="16" rx="4" class="gx-qring"/>
  <circle cx="160" cy="94" r="8" class="gx-stroke-soft"/>
  <circle cx="160" cy="94" r="8" class="gx-clock" pathLength="100" transform="rotate(-90 160 94)"/>
  <path d="M174 94h22" class="gx-stroke-soft" marker-end="url(#gxa)"/>
  <defs><marker id="gxa" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 6 3 0 6z" class="gx-ink-fill"/></marker></defs>
  <rect x="202" y="34" width="102" height="122" rx="7" class="gx-card"/>
  ${T(212, 52, 'draft', 'gx-dim')}
  <rect x="212" y="62" width="80" height="5" rx="2.5" class="gx-ink-fill gx-l gx-l1"/>
  <rect x="212" y="73" width="66" height="5" rx="2.5" class="gx-ink-fill gx-l gx-l2"/>
  <rect x="212" y="84" width="74" height="5" rx="2.5" class="gx-ink-fill gx-l gx-l3"/>
  <rect x="212" y="97" width="16" height="10" rx="2" class="gx-accent-fill gx-chip gx-c1"/>
  <rect x="232" y="97" width="16" height="10" rx="2" class="gx-accent-fill gx-chip gx-c2"/>
  <rect x="212" y="128" width="58" height="18" rx="9" class="gx-btn"/>
  <path d="M229 137l5 5 9-9" class="gx-check" pathLength="100"/>
  ${T(18, 186, 'question detected', 'gx-s gx-s1')}
  ${T(18, 186, 'cited draft ready', 'gx-s gx-s2')}
  ${T(18, 186, 'approved, posted', 'gx-s gx-s3')}
</svg>`,

    cgnn: () => {
      const nodes = [[110, 100], [110, 52], [152, 76], [152, 124], [110, 148], [68, 124], [68, 76]];
      const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1]];
      const e = edges.map(([a, b], i) => `<line x1="${nodes[b][0]}" y1="${nodes[b][1]}" x2="${nodes[a][0]}" y2="${nodes[a][1]}" class="gx-stroke-soft"/>
        <line x1="${nodes[b][0]}" y1="${nodes[b][1]}" x2="${nodes[a][0]}" y2="${nodes[a][1]}" class="gx-msg" pathLength="100" style="--i:${i % 6}"/>`).join('');
      const n = nodes.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i === 0 ? 11 : 8}" class="gx-node" style="--i:${i}"/>`).join('');
      return `
<svg viewBox="0 0 320 200" class="gx-svg gx-cgnn" role="img" aria-label="Diagram of a crystal graph: atoms pass messages along bonds, then pool into one prediction">
  ${T(18, 24, 'atoms + bonds', 'gx-dim')}
  ${e}${n}
  <path d="M182 100h40" class="gx-stroke-soft" marker-end="url(#gxb)"/>
  <defs><marker id="gxb" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 6 3 0 6z" class="gx-ink-fill"/></marker></defs>
  <rect x="232" y="82" width="36" height="36" rx="18" class="gx-card"/>
  <circle cx="250" cy="100" r="7" class="gx-pool"/>
  <path d="M272 100h16" class="gx-stroke-soft"/>
  <rect x="288" y="90" width="18" height="20" rx="3" class="gx-out"/>
  ${T(230, 140, 'mean pool', 'gx-dim')}
  ${T(18, 186, 'gated message passing', 'gx-s gx-s1')}
  ${T(18, 186, 'crystal-level mean pooling', 'gx-s gx-s2')}
  ${T(18, 186, 'regression head', 'gx-s gx-s3')}
</svg>`;
    },

    kinase: () => {
      let dots = '';
      for (let c = 0; c < 10; c++) for (let r = 0; r < 5; r++) {
        const g = Math.floor(c / 2.5);
        dots += `<circle cx="${30 + c * 26}" cy="${56 + r * 22}" r="5.5" class="gx-dot gx-g${g}"/>`;
      }
      return `
<svg viewBox="0 0 320 200" class="gx-svg gx-kinase" role="img" aria-label="Diagram of evaluation splits: compounds and proteins grouped into clusters, with one cluster held out at a time">
  ${T(18, 24, 'kinase-ligand pairs', 'gx-dim')}
  <rect x="16" y="40" width="58" height="120" rx="8" class="gx-hold"/>
  ${dots}
  ${T(18, 186, 'scaffold holdout', 'gx-s gx-s1')}
  ${T(18, 186, 'protein holdout', 'gx-s gx-s2')}
  ${T(18, 186, 'MMseqs2 clusters at 40% identity', 'gx-s gx-s3')}
</svg>`;
    },

    agents: () => {
      const names = C.projects.find((p) => p.id === 'agents').children.map((c) => c.title);
      const rows = names.map((n, i) => {
        const y = 44 + i * 26;
        return `<g class="gx-row" style="--i:${i}">
          <rect x="12" y="${y - 13}" width="296" height="22" rx="5" class="gx-rowbg"/>
          ${T(22, y + 2, n, 'gx-rowt')}
          <rect x="214" y="${y - 6}" width="12" height="9" rx="2" class="gx-fill"/>
          <path d="M228 ${y - 1.5}h10" class="gx-stroke-soft"/>
          <rect x="240" y="${y - 6}" width="12" height="9" rx="2" class="gx-accent-fill gx-model"/>
          <path d="M254 ${y - 1.5}h10" class="gx-stroke-soft"/>
          <rect x="266" y="${y - 6}" width="12" height="9" rx="2" class="gx-ink-fill"/>
        </g>`;
      }).join('');
      return `
<svg viewBox="0 0 320 200" class="gx-svg gx-agents" role="img" aria-label="Diagram listing five earlier agent prototypes, each a pipeline of input, model step and deterministic step">
  ${T(214, 20, 'in · model · rules', 'gx-dim')}
  ${rows}
  ${T(18, 186, 'model language over deterministic routing', 'gx-s gx-sfix')}
</svg>`;
    },

    fde: () => {
      const st = ['discovery', 'scoping', 'implementation', 'testing', 'handoff'];
      const items = st.map((s, i) => {
        const x = [32, 94, 166, 238, 292][i];
        return `<g class="gx-stage" style="--i:${i}"><circle cx="${x}" cy="74" r="8" class="gx-node"/>${T(x, 100, s, 'gx-mid')}</g>`;
      }).join('');
      return `
<svg viewBox="0 0 320 150" class="gx-svg gx-fde" role="img" aria-label="Diagram of the delivery scope: discovery, scoping, implementation, testing and handoff">
  ${T(18, 24, 'assigned AI delivery', 'gx-dim')}
  <path d="M34 74H290" class="gx-stroke-soft"/>
  <path d="M34 74H290" class="gx-track" pathLength="100"/>
  ${items}
  ${T(18, 138, 'tested before handoff', 'gx-s gx-sfix')}
</svg>`;
    }
  };

  const caps = {
    relay: 'Diagram · core loop',
    cgnn: 'Diagram · message passing',
    kinase: 'Diagram · holdout splits',
    agents: 'Diagram · five prototypes',
    fde: 'Diagram · delivery scope',
    tooling: 'Diagram · agent tooling'
  };

  function visual(id) {
    if (id === 'eeg') {
      const f = C.projects.find((p) => p.id === 'eeg').figures[0];
      return `<figure class="gx gx-figure"><div class="gx-imgwrap"><img src="${f.src}" width="${f.w}" height="${f.h}" alt="Model AUC comparison figure from the EEG project" loading="lazy" decoding="async"></div><figcaption>${f.caption}</figcaption></figure>`;
    }
    return `<figure class="gx">${svg[id]()}<figcaption>${caps[id]}</figcaption></figure>`;
  }

  /* ---------- RELAY detail: responsive stage diagram ---------- */
  function relayStages() {
    const stages = [
      ['Slack Connect', 'unanswered question detected'],
      ['Deadline', 'response time tracked'],
      ['Evidence', 'HubSpot · GitHub · Slack search'],
      ['Draft', 'cited reply prepared'],
      ['Review', 'human approval'],
      ['Posted', 'approved reply sent']
    ];
    return `<figure class="stages" aria-label="Diagram of the RELAY core loop">
      <ol>${stages.map(([a, b], i) => `<li style="--i:${i}"><span class="st-n">${String(i + 1).padStart(2, '0')}</span><strong>${a}</strong><span>${b}</span></li>`).join('')}</ol>
      <figcaption>Diagram · RELAY stages, end to end</figcaption>
    </figure>`;
  }

  function projectDetail(p) {
    let vis = '';
    if (p.id === 'relay') vis = `<div class="d-visual d-visual-relay">${visual('relay')}${relayStages()}</div>`;
    else if (p.figures && p.figures.length) vis = `<div class="d-visual d-figs">${p.figures.map((f) => `<figure class="d-fig"><div class="gx-imgwrap"><img src="${f.src}" width="${f.w}" height="${f.h}" alt="${esc(f.caption.replace('Figure · ', ''))} figure from the EEG project" loading="lazy" decoding="async"></div><figcaption>${f.caption}</figcaption></figure>`).join('')}</div>`;
    else vis = `<div class="d-visual">${visual(p.id)}</div>`;

    const body = p.children
      ? p.children.map((c) => `<section class="d-child"><h3>${esc(c.title)}</h3><p class="d-childsub">${esc(c.sub)}</p>${bullets(c.bullets)}${tags(c.tags)}${links(c.links)}</section>`).join('')
      : `${bullets(p.bullets)}${tags(p.tags)}${links(p.links)}`;

    return `<header class="d-head"><h1 class="d-title">${esc(p.title)}</h1><p class="d-sub">${esc(p.sub)}</p></header>${vis}<div class="d-body">${body}</div>`;
  }

  function workItem(w, full) {
    return `<article class="w-item" id="w-${w.id}">
      <header><h3>${esc(w.title)}</h3><p class="w-meta">${esc(w.meta)}</p></header>
      ${w.lede ? `<p class="w-lede">${esc(w.lede)}</p>` : ''}
      ${full === false ? '' : bullets(w.bullets)}
      ${full === false ? '' : tags(w.tags)}
      ${w.link ? links([w.link]) : ''}
    </article>`;
  }

  function researchHTML() {
    const r = C.research;
    return `<div class="r-lab"><h3>${esc(r.lab.title)}</h3><p class="w-meta">${esc(r.lab.meta)}</p>
      ${r.lab.studies.map((s) => `<section class="r-study"><h4>${esc(s.title)}</h4>${bullets(s.bullets)}${tags(s.tags)}</section>`).join('')}</div>
      <div class="r-ind"><h3>${esc(r.independent.title)}</h3><ul class="d-bullets">${r.independent.items.map((i) => `<li>${link(i)}. ${esc(i.text)}</li>`).join('')}</ul>
      <p class="r-int">${esc(r.interests)}</p></div>`;
  }

  function writingHTML() {
    return C.writing.map((g) => `<section class="wr-g"><h3>${esc(g.title)}</h3><ul class="wr-list">${g.items.map((i) => `<li>${link(i)}${i.date ? `<span class="wr-date">${esc(i.date)}</span>` : ''}</li>`).join('')}</ul></section>`).join('');
  }

  function educationHTML() {
    return C.education.map((e) => `<section class="ed"><h3>${esc(e.title)}</h3><p class="w-meta">${esc(e.meta)}</p>${e.text ? `<p>${esc(e.text)}</p>` : ''}${links(e.links)}</section>`).join('');
  }

  const contactHTML = () => links(C.contact);

  window.KIT = { esc, link, links, bullets, tags, visual, projectDetail, workItem, researchHTML, writingHTML, educationHTML, contactHTML, relayStages };
})();
