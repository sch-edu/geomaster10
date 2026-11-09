/* ============================================================
   12 · CASE STUDY DECISION MAKER
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx } from '../ui.js';
import { factForSection } from '../engine.js';

export default {
  id: 'case',
  name: 'Case Study Decision Maker',
  emoji: '🧑‍⚖️',
  tag: 'Application',
  blurb: 'Real NCERT dilemmas — Sardar Sarovar, Buxa, Alwar. Decide, then live with the consequence.',
  count: 3,
  available: ch => (ch.scenarios || []).length >= 2,

  start(ctx) {
    const ch = ctx.chapter;
    const cases = shuffle(ch.scenarios).slice(0, Math.min(4, ch.scenarios.length));
    const frame = new GameFrame({ ctx, id: 'case', title: 'Case Study Decision Maker', emoji: '🧑‍⚖️', total: cases.length });
    let i = 0, good = 0, ethics = 50;

    const render = () => {
      if (i >= cases.length) return finish();
      const c = cases[i];
      let answered = false;
      frame.setProgress(i);
      frame.body(`
        <div class="qcard">
          <div class="qtag">DECISION ${i + 1}/${cases.length} · ${esc(ch.title)}</div>
          <div class="qtext small" style="margin-bottom:8px">${esc(c.title)}</div>
          <p style="color:#c8d6f2">${esc(c.text)}</p>
          <div class="options">
            ${c.opts.map((o, k) => `<button class="opt" data-o="${k}"><span class="key">${k + 1}</span><span>${esc(o.t)}</span></button>`).join('')}
          </div>
          <div class="sim-panel" style="margin-top:16px">
            <div class="meter ${ethics > 65 ? 'good' : ethics > 40 ? 'warn' : 'bad'}">
              <span>🌏 Sustainability</span><span class="bar"><i style="width:${ethics}%"></i></span><b>${ethics}%</b>
            </div>
            <div class="tiny muted">Your decisions move this meter. The board does not ask for balance — it asks for the NCERT position.</div>
          </div>
        </div>
        <div data-fb></div>`);

      frame.bodyEl.querySelectorAll('[data-o]').forEach(b => {
        b.onclick = ev => {
          if (answered) return;
          answered = true;
          const k = +b.dataset.o;
          const opt = c.opts[k];
          frame.bodyEl.querySelectorAll('[data-o]').forEach(x => {
            x.classList.add('locked');
            if (x === b) x.classList.add(opt.ok ? 'correct' : 'wrong');
          });
          const rightIndex = c.opts.findIndex(o => o.ok);
          if (!opt.ok) frame.bodyEl.querySelectorAll('[data-o]')[rightIndex]?.classList.add('correct');
          if (opt.ok) { good++; ethics = Math.min(100, ethics + 14); sfx.good(); } else { ethics = Math.max(15, ethics - 10); sfx.bad(); }
          frame.q('.meter').className = `meter ${ethics > 65 ? 'good' : ethics > 40 ? 'warn' : 'bad'}`;
          frame.q('.meter .bar i').style.width = ethics + '%';
          frame.q('.meter b').textContent = ethics + '%';

          frame.record(opt.ok, { factId: factForSection(ch, ch.sections[0]), base: 20, difficulty: 3 });
          const fb = frame.q('[data-fb]');
          fb.innerHTML = frame.feedbackHTML({
            ok: opt.ok,
            head: opt.ok ? 'Policy accepted. The NCERT line agrees with you.' : 'Consequence triggered. Read why this fails the board answer.',
            body: `<b>Your call:</b> ${esc(opt.t)}<br><b>Verdict:</b> ${esc(opt.why)}`,
            ref: `Ch ${ch.n} · case study`
          }) + `<div class="btn-row"><button class="btn primary" data-next>${i + 1 < cases.length ? 'Next case →' : 'See verdict →'}</button></div>`;
          fb.querySelector('[data-next]').onclick = () => { i++; render(); };
        };
      });
    };

    function finish() {
      frame.finish({
        retry: true,
        title: 'Case Study Decision Maker',
        subtitle: good === cases.length ? 'Every call matched NCERT policy.' : `${good}/${cases.length} decisions matched the book.`
      });
    }
    render();
  }
};
