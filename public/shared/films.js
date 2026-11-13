/* Project films: authored, scrubbable motion pieces played in a 90s movie player.
   Each film exposes: duration, gate (a time where it waits for the visitor), chapters,
   mount(stage) -> { render(t, state), caption(t) }. render(t) is pure: any t can be shown,
   so scrubbing and reduced-motion stepping both work. */
(function () {
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const prog = (t, a, b) => clamp((t - a) / (b - a));
  const easeOut = (p) => 1 - Math.pow(1 - p, 3);
  const easeIO = (p) => (p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  /* ---------------- RELAY ---------------- */
  // Sample data is fictional and labelled as a simulation in the film itself.
  const Q = 'Does the Team plan include SSO, and do you have an audit log?';
  const SOURCES = [
    { name: 'HubSpot', hit: 'Acme · Team plan · renewal in March' },
    { name: 'GitHub', hit: 'docs/sso.md · SAML available on Team' },
    { name: 'Slack search', hit: '#eng · audit log shipped in v2.3' }
  ];
  const DRAFT = 'Yes. SSO through SAML is included on the Team plan [1], and the audit log shipped in v2.3 [2]. Happy to send the setup guide.';
  const T = { chan: 0, q: 1.0, deadline: 2.4, src: [4.6, 5.9, 7.2], fly: 1.0, draft: 9.6, typed: 12.8, gate: 13.2, send: 13.2, posted: 14.6, end: 17.4, dur: 21 };

  const relay = {
    title: 'RELAY.mov',
    duration: T.dur,
    gate: T.gate,
    loopEnd: 17.0,
    still: 16.0,
    chapters: [
      { t: T.q, label: 'Question' }, { t: T.deadline, label: 'Deadline' }, { t: T.src[0], label: 'Sources' },
      { t: T.draft, label: 'Draft' }, { t: T.gate, label: 'Approve' }, { t: T.posted, label: 'Posted' }, { t: T.end, label: 'End' }
    ],
    award: 'Awarded Second Place in the New Slack Agent category of the 2026 Slack Agent Builder Challenge.',
    mount(stage, opts) {
      stage.classList.add('film-relay');
      stage.innerHTML = `
        <div class="fr-tag">Simulation · sample data</div>
        <section class="fr-pane fr-chan" aria-label="Slack Connect channel">
          <header><b># acme-support</b><span class="fr-pill">Slack Connect</span></header>
          <div class="fr-msgs">
            <div class="fr-msg ghost"><i></i><span><b></b><em></em></span></div>
            <div class="fr-msg ghost"><i></i><span><b></b><em style="width:58%"></em></span></div>
            <div class="fr-msg fr-cust"><i class="av">D</i><span><b>Dana · Acme</b><p>${esc(Q)}</p>
              <span class="fr-status"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7" class="ring-bg"/><circle cx="10" cy="10" r="7" class="ring" pathLength="100"/></svg><span class="fr-st"></span></span></span></div>
            <div class="fr-msg fr-reply"><i class="av av-csm">S</i><span><b>Sam · Customer Success <small>via RELAY</small></b><p class="fr-replytext"></p></span></div>
          </div>
        </section>
        <section class="fr-pane fr-relay" aria-label="RELAY">
          <header><b>RELAY</b><span class="fr-relaystatus"></span></header>
          <div class="fr-sources">${SOURCES.map((s, i) => `<div class="fr-src" data-i="${i}"><b>${s.name}</b><span>${esc(s.hit)}</span><em>[${i + 1}]</em></div>`).join('')}</div>
          <div class="fr-draft"><div class="fr-dlabel">Draft reply</div><p class="fr-dtext"></p><span class="fr-sent">Sent</span>
            <button type="button" class="fr-approve">Approve and post</button><span class="fr-hint">Click to approve</span></div>
        </section>
        <span class="fr-cursor" aria-hidden="true"><svg viewBox="0 0 12 18" shape-rendering="crispEdges"><path d="M0 0h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H7v1h1v2h1v2H7v-2H6v-2H5v1H4v1H3v1H2v1H1v1H0z" fill="#1d1b17"/><path d="M1 2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H6v1h1v2h1v2H7v-2H6v-2H5v1H4v1H3v1H2v1H1z" fill="#fff"/></svg></span><span class="fr-dot"></span><span class="fr-dot"></span><span class="fr-dot"></span><span class="fr-flydraft"><i></i><i></i><i></i></span>
        <div class="fr-end"><h2>RELAY</h2><p class="fr-endsub">Slack-native customer-success agent</p><p class="fr-award">${esc(this.award)}</p>
          <div class="fr-endbtns"><button type="button" class="btn" data-open="relay/readme">Read Me</button><button type="button" class="btn" data-href="${opts.code}">Code</button><button type="button" class="btn" data-href="${opts.demo}">Demo</button><button type="button" class="btn default fr-replay">Replay</button></div></div>`;

      const $ = (s) => stage.querySelector(s), $$ = (s) => [...stage.querySelectorAll(s)];
      const chan = $('.fr-chan'), cust = $('.fr-cust'), reply = $('.fr-reply'), ring = $('.ring'), st = $('.fr-st');
      const srcs = $$('.fr-src'), dots = $$('.fr-dot'), draft = $('.fr-draft'), dtext = $('.fr-dtext'), approve = $('.fr-approve');
      const hint = $('.fr-hint'), rstatus = $('.fr-relaystatus'), fly = $('.fr-flydraft'), end = $('.fr-end'), replyText = $('.fr-replytext');
      const ghosts = $$('.ghost'), cursor = $('.fr-cursor');
      let typedCache = -1;
      const withChips = (s) => esc(s).replace(/\[(\d)\]/g, '<span class="chip">$1</span>');
      const center = (el) => { const r = el.getBoundingClientRect(), s = stage.getBoundingClientRect(); return [r.left - s.left + r.width / 2, r.top - s.top + r.height / 2]; };

      function render(t, s) {
        // channel
        chan.style.opacity = easeOut(prog(t, 0, .5));
        ghosts.forEach((g, i) => { g.style.opacity = easeOut(prog(t, .2 + i * .15, .6 + i * .15)); });
        const qp = easeOut(prog(t, T.q, T.q + .6));
        cust.style.opacity = qp; cust.style.transform = `translateY(${(1 - qp) * 14}px)`;
        const ringP = prog(t, T.deadline, T.src[0] + 3.5);
        ring.style.strokeDashoffset = 100 - ringP * 72;
        const posted = t >= T.posted;
        st.textContent = posted ? 'answered · approved by a human' : t >= T.deadline ? 'unanswered · response deadline tracked' : 'unanswered';
        cust.classList.toggle('is-late', t >= T.deadline && !posted);
        // sources light up and send evidence to the draft
        srcs.forEach((el, i) => {
          const a = T.src[i];
          el.classList.toggle('on', t >= a);
          el.style.setProperty('--hit', easeOut(prog(t, a, a + .5)));
          const d = dots[i], fp = prog(t, a + .45, a + .45 + T.fly);
          if (fp > 0 && fp < 1 && !s.reduce) {
            const r0 = el.getBoundingClientRect(), sr = stage.getBoundingClientRect(); const x0 = r0.left - sr.left + r0.width / 2, y0 = r0.bottom - sr.top + 8; const [x1, y1] = center(draft), e = easeIO(fp);
            d.style.opacity = 1; d.style.transform = `translate(${x0 + (x1 - x0) * e}px, ${y0 + (y1 - y0) * e - Math.sin(Math.PI * fp) * 40}px)`;
          } else d.style.opacity = 0;
        });
        rstatus.textContent = posted ? 'posted' : t >= T.gate && s.approved ? 'posting' : t >= T.gate ? 'waiting for approval' : t >= T.draft ? 'drafting' : t >= T.src[0] ? 'searching sources' : t >= T.q ? 'question detected' : 'watching';
        // the draft types itself
        draft.style.opacity = easeOut(prog(t, T.draft - .4, T.draft));
        const n = Math.round(DRAFT.length * prog(t, T.draft, T.typed));
        if (n !== typedCache) { typedCache = n; dtext.innerHTML = n >= DRAFT.length ? withChips(DRAFT) : esc(DRAFT.slice(0, n)) + '<span class="caret"></span>'; }
        const waiting = t >= T.gate && !s.approved;
        approve.classList.toggle('show', t >= T.typed && !(s.approved && t > T.gate + .25));
        approve.classList.toggle('pulse', waiting && !s.reduce);
        approve.disabled = !waiting;
        hint.classList.toggle('show', waiting && s.waitedFor > 1.2);
        // in the looping graphic a cursor makes the approve click
        if (s.auto && !s.reduce && t >= T.typed - .3 && t < T.gate + .6) {
          const sr = stage.getBoundingClientRect(), ar = approve.getBoundingClientRect(), dr = draft.getBoundingClientRect();
          const x1 = ar.left - sr.left + 18, y1 = ar.top - sr.top + 10, x0 = dr.right - sr.left - 30, y0 = dr.top - sr.top + 20;
          const mp = easeIO(prog(t, T.typed - .3, T.gate - .1));
          const press = t >= T.gate - .05 && t < T.gate + .2 ? .82 : 1;
          cursor.style.opacity = 1; cursor.style.transform = `translate(${x0 + (x1 - x0) * mp}px, ${y0 + (y1 - y0) * mp}px) scale(${press})`;
          approve.classList.toggle('pressed', press < 1);
        } else { cursor.style.opacity = 0; approve.classList.remove('pressed'); }
        // send: the draft flies into the channel and posts
        const sp = prog(t, T.send, T.posted);
        if (sp > 0 && sp < 1 && !s.reduce) {
          const [x0, y0] = center(draft), [x1, y1] = center(reply), e = easeIO(sp);
          fly.style.opacity = 1; fly.style.transform = `translate(${x0 + (x1 - x0) * e}px, ${y0 + (y1 - y0) * e}px) scale(${1 - .4 * e})`;
        } else fly.style.opacity = 0;
        draft.classList.toggle('sent', t >= T.send + .2);
        const rp = easeOut(prog(t, T.posted - .2, T.posted + .4));
        reply.style.opacity = rp; reply.style.transform = `translateY(${(1 - rp) * 10}px)`;
        if (rp > 0 && !replyText.innerHTML) replyText.innerHTML = withChips(DRAFT);
        if (rp === 0) replyText.innerHTML = '';
        // end card
        const ep = easeOut(prog(t, T.end, T.end + .7));
        end.style.opacity = ep; end.style.pointerEvents = ep > .5 ? 'auto' : 'none'; end.style.transform = `scale(${.97 + .03 * ep})`;
      }
      function caption(t, s) {
        if (t >= T.end) return 'RELAY: Second Place, 2026 Slack Agent Builder Challenge.';
        if (t >= T.posted) return 'The approved reply posts to the customer channel.';
        if (t >= T.gate) return s.approved ? 'Approved. Posting the reply.' : 'Nothing is sent until a person approves the draft.';
        if (t >= T.draft) return 'RELAY prepares a cited reply from the evidence.';
        if (t >= T.src[0]) return 'It searches HubSpot, GitHub and Slack for evidence.';
        if (t >= T.deadline) return 'The question is unanswered, so RELAY tracks its response deadline.';
        if (t >= T.q) return 'A customer asks a question in a Slack Connect channel.';
        return 'A shared support channel with a customer.';
      }
      return { render, caption, approveButton: approve, replayButton: $('.fr-replay') };
    }
  };

  window.FILMS = { relay };
})();
