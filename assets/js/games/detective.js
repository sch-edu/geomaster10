/* ============================================================
   04 · SOIL DETECTIVE (works for any chapter's `detective` set)
   Clues reveal one by one; every clue costs XP. Wrong guess = erosion.
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx, toast } from '../ui.js';
import { factForSection } from '../engine.js';
import { recordAnswer, addXP } from '../core.js';

export default {
  id: 'detective',
  name: 'Detective Mode',
  emoji: '🔍',
  tag: 'Deduction',
  blurb: 'Clues drop one at a time. Name the soil / crop / mineral / industry before the clues eat your XP.',
  count: 5,
  available: ch => (ch.detective || []).length >= 3,

  start(ctx) {
    const ch = ctx.chapter;
    const cases = shuffle(ch.detective).slice(0, Math.min(5, ch.detective.length));
    const frame = new GameFrame({ ctx, id: 'detective', title: ch.id === 'ch1' ? 'Soil Detective' : 'Detective Mode', emoji: '🔍', total: cases.length });
    let i = 0, score = 0;

    const render = () => {
      if (i >= cases.length) return finish();
      const c = cases[i];
      const allNames = ch.detective.map(d => d.name);
      const others = shuffle(allNames.filter(n => n !== c.name)).slice(0, 3);
      const options = shuffle([c.name, ...others]);
      let revealed = 1, solved = false, missed = 0;

      frame.setProgress(i);
      frame.body(`
        <div class="qcard">
          <div class="qtag">CASE FILE ${String(i + 1).padStart(3, '0')} · ${esc(ch.title)}</div>
          <div class="qtext small">Identify the subject. Every extra clue costs 3 XP from the reward.</div>
          <div data-clues style="display:grid;gap:8px;margin:16px 0"></div>
          <div class="options" data-opts>
            ${options.map((o, k) => `<button class="opt" data-o="${k}"><span class="key">${'ABCD'[k]}</span><span>${esc(o)}</span></button>`).join('')}
          </div>
          <div class="row" style="margin-top:14px">
            <button class="btn sm" data-more>🔎 Reveal another clue (−3 XP)</button>
            <span class="pill cyan" data-reward>Reward: 18 XP</span>
          </div>
        </div>
        <div data-fb></div>`);

      const clueBox = frame.q('[data-clues]');
      const drawClues = () => {
        clueBox.innerHTML = c.clues.slice(0, revealed).map((cl, k) => `
          <div class="card tight" style="background:rgba(78,231,255,.06)">
            <span class="tiny" style="color:var(--cyan)">CLUE ${k + 1}</span>
            <div style="font-size:14px;margin-top:2px">${esc(cl)}</div>
          </div>`).join('');
        frame.q('[data-reward]').textContent = `Reward: ${Math.max(6, 18 - (revealed - 1) * 3)} XP`;
      };
      drawClues();

      frame.q('[data-more]').onclick = () => {
        if (solved || revealed >= c.clues.length) return;
        revealed++;
        drawClues();
        sfx.pin();
      };

      frame.bodyEl.querySelectorAll('[data-o]').forEach(b => {
        b.addEventListener('click', ev => {
          if (solved) return;
          const k = +b.dataset.o;
          const ok = options[k] === c.name;
          if (ok) {
            solved = true;
            score++;
            const xp = Math.max(6, 18 - (revealed - 1) * 3);
            frame.record(true, { factId: factForSection(ch, ch.sections[0]), base: xp, difficulty: 3 });
            sfx.good();
            frame.bodyEl.querySelectorAll('[data-o]').forEach(x => {
              x.classList.add('locked');
              if (x.textContent.includes(c.name)) x.classList.add('correct');
            });
            const fb = frame.q('[data-fb]');
            fb.innerHTML = frame.feedbackHTML({
              ok: true, head: 'Case cracked. Sherlock would take notes.',
              body: `<b>${esc(c.name)}</b> — ${esc(c.why)}`,
              ref: `Ch ${ch.n}`
            }) + `<div class="btn-row"><button class="btn primary" data-next>Next case →</button></div>`;
            fb.querySelector('[data-next]').onclick = () => { i++; render(); };
          } else {
            missed++;
            b.classList.add('wrong');
            b.classList.add('locked');
            recordAnswer(factForSection(ch, ch.sections[0]), false, { game: 'detective' });
            sfx.bad();
            // erosion visual
            const card = frame.q('.qcard');
            card.animate([{ transform: 'translate(0)' }, { transform: 'translate(-6px) rotate(-.4deg)' }, { transform: 'translate(6px) rotate(.4deg)' }, { transform: 'translate(0)' }], { duration: 380 });
            for (let e = 0; e < 6; e++) {
              const d = document.createElement('div');
              d.textContent = '🟤';
              d.style.cssText = `position:fixed;left:${40 + Math.random() * 60}%;top:${30 + Math.random() * 30}%;font-size:${16 + Math.random() * 16}px;z-index:99;pointer-events:none;transition:transform .9s ease-in,opacity .9s`;
              document.getElementById('fx-layer').appendChild(d);
              requestAnimationFrame(() => { d.style.transform = `translate(${(Math.random() - .5) * 90}px, 220px)`; d.style.opacity = '0'; });
              setTimeout(() => d.remove(), 1000);
            }
            if (revealed < c.clues.length) { revealed++; drawClues(); }
            const fb = frame.q('[data-fb]');
            fb.innerHTML = frame.feedbackHTML({
              ok: false,
              head: 'Wrong suspect. Soil erosion has been triggered. 🟤',
              body: `“${esc(options[k])}” does not fit. Reveal the next clue or try again — the case does not close until you get it.`,
              ref: `Ch ${ch.n}`
            });
          }
        });
      });
    };

    function finish() {
      frame.finish({ retry: true, title: 'Detective Mode', subtitle: `${score}/${cases.length} cases cracked.` });
    }

    render();
  }
};
