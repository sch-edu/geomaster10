/* ============================================================
   07 · CROP COMMAND CENTER
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx } from '../ui.js';
import { factForSection } from '../engine.js';

export default {
  id: 'crop',
  name: 'Crop Command Center',
  emoji: '🌾',
  tag: 'Agriculture',
  blurb: 'Plant the right crop in the right state, season and soil. Eight fields, zero excuses.',
  count: 8,
  available: ch => !!ch.crops,

  start(ctx) {
    const ch = ctx.chapter;
    const crops = ch.crops;
    const rounds = shuffle(crops).slice(0, 8);
    const frame = new GameFrame({ ctx, id: 'crop', title: 'Crop Command Center', emoji: '🌾', total: rounds.length });
    let i = 0, planted = [];

    const render = () => {
      if (i >= rounds.length) return finish();
      let answered = false;
      const crop = rounds[i];
      const mode = i % 3 === 2 ? 'state' : 'crop';
      frame.setProgress(i);

      let options, answer, prompt, sub;
      if (mode === 'crop') {
        const others = shuffle(crops.filter(c => c.name !== crop.name)).slice(0, 3);
        options = shuffle([crop.name, ...others.map(c => c.name)]);
        answer = options.indexOf(crop.name);
        prompt = `Which crop belongs in this field?`;
        sub = `State: <b>${esc(crop.states[0])}</b> · Season: <b>${esc(crop.season)}</b> · Rainfall: <b>${esc(crop.rain)}</b> · Soil: <b>${esc(crop.soil)}</b>`;
      } else {
        const otherStates = shuffle([...new Set(crops.flatMap(c => c.states))].filter(s => !crop.states.includes(s))).slice(0, 3);
        options = shuffle([crop.states[0], ...otherStates]);
        answer = options.indexOf(crop.states[0]);
        prompt = `Where does ${esc(crop.name)} lead?`;
        sub = `${esc(crop.icon)} <b>${esc(crop.name)}</b> · ${esc(crop.season)} · ${esc(crop.note)}`;
      }

      frame.body(`
        <div class="qcard">
          <div class="qtag">FIELD ${i + 1}/8 · ${mode === 'crop' ? 'PLANT IT' : 'LOCATE IT'}</div>
          <div style="display:flex;gap:6px;margin-bottom:14px" data-plots>
            ${Array.from({ length: 8 }, (_, k) => `<div title="${planted[k] || ''}" style="flex:1;height:14px;border-radius:4px;background:${planted[k] ? 'linear-gradient(90deg,#b8ff5c,#3ddc97)' : 'rgba(255,255,255,.07)'};border:1px solid var(--line)"></div>`).join('')}
          </div>
          <div class="qtext small">${prompt}</div>
          <div class="quote" style="margin:12px 0">${sub}</div>
          <div class="options">
            ${options.map((o, k) => `<button class="opt" data-o="${k}"><span class="key">${'ABCD'[k]}</span><span>${esc(o)}</span></button>`).join('')}
          </div>
        </div>
        <div data-fb></div>`);

      frame.bodyEl.querySelectorAll('[data-o]').forEach(b => {
        b.onclick = ev => {
          if (answered) return;
          answered = true;
          const k = +b.dataset.o;
          const ok = k === answer;
          frame.bodyEl.querySelectorAll('[data-o]').forEach(x => {
            x.classList.add('locked');
            if (+x.dataset.o === answer) x.classList.add('correct');
            else if (x === b) x.classList.add('wrong');
          });
          frame.record(ok, { factId: factForSection(ch, ch.sections[2] || ch.sections[0]), base: 12, difficulty: 2 });
          if (ok) { planted[i] = crop.name; sfx.good(); } else sfx.bad();

          const fb = frame.q('[data-fb]');
          fb.innerHTML = frame.feedbackHTML({
            ok,
            head: ok ? `${crop.icon} Planted. Yield secured.` : 'Crop failure. The field is now a case study.',
            body: mode === 'crop'
              ? `<b>${crop.name}</b> — ${esc(crop.note)}<br><span class="muted">${esc(crop.season)} · ${esc(crop.rain)} · ${esc(crop.soil)}</span>`
              : `<b>${crop.states[0]}</b> leads ${crop.name}. ${esc(crop.note)}`,
            ref: `Ch ${ch.n} · Agriculture`
          }) + `<div class="btn-row"><button class="btn primary" data-next>${i + 1 < rounds.length ? 'Next field →' : 'Harvest results →'}</button></div>`;
          fb.querySelector('[data-next]').onclick = () => { i++; render(); };
        };
      });
    };

    function finish() {
      frame.finish({ retry: true, title: 'Crop Command Center', subtitle: `${planted.filter(Boolean).length}/8 fields planted correctly.` });
    }
    render();
  }
};
