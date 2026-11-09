/* ============================================================
   10 · LIFELINES NETWORK BUILDER — build the corridor, node by node
   ============================================================ */
import { GameFrame } from './base.js';
import { indiaSVG } from '../map.js';
import { esc, sfx } from '../ui.js';
import { factForSection } from '../engine.js';
import { addXP, recordAnswer } from '../core.js';

const TASKS = [
  {
    label: 'Golden Quadrilateral',
    instruction: 'Click the four metro cities in this order: <b>Delhi → Kolkata → Chennai → Mumbai</b>.',
    seq: ['Delhi', 'Kolkata', 'Chennai', 'Mumbai'],
    fact: 'The Golden Quadrilateral is a 5,846 km road connecting Delhi, Mumbai, Chennai and Kolkata.'
  },
  {
    label: 'North–South corridor',
    instruction: 'Connect the corridor from north to south: <b>Srinagar → Kanniyakumari</b>.',
    seq: ['Srinagar', 'Kanniyakumari'],
    fact: 'The North–South corridor is 4,000 km long, from Srinagar (J&K) to Kanniyakumari (TN).'
  },
  {
    label: 'East–West corridor',
    instruction: 'Connect the corridor east to west: <b>Silchar → Porbandar</b>.',
    seq: ['Silchar', 'Porbandar'],
    fact: 'The East–West corridor is 3,300 km long, from Silchar (Assam) to Porbandar (Gujarat).'
  },
  {
    label: 'Port network',
    instruction: 'Find these ports in order: <b>Kandla (tidal) → JNPT (containers) → Visakhapatnam (deepest landlocked)</b>.',
    seq: ['Kandla', 'JNPT', 'Visakhapatnam'],
    fact: 'Kandla is the tidal port, Jawaharlal Nehru Port the largest container port, and Visakhapatnam the deepest landlocked port.'
  },
  {
    label: 'National Waterway 1',
    instruction: 'Trace NW1 on the Ganga: <b>Prayagraj → Haldia</b>.',
    seq: ['Prayagraj', 'Haldia'],
    fact: 'NW1 is the Ganga waterway from Prayagraj to Haldia, 1,620 km long, developed by IWAI.'
  }
];

const match = (pinName, target) => {
  const p = pinName.toLowerCase();
  return p.startsWith(target.toLowerCase()) || p.includes(target.toLowerCase());
};

export default {
  id: 'lifelines',
  name: 'Lifelines Network Builder',
  emoji: '🚢',
  tag: 'Map network',
  blurb: 'Build the Golden Quadrilateral, both corridors, the port chain and NW1 — click by click.',
  count: TASKS.length,
  available: ch => ch.id === 'ch7',

  start(ctx) {
    const ch = ctx.chapter;
    const TOTAL_NODES = TASKS.reduce((n, t) => n + t.seq.length, 0);
    const frame = new GameFrame({ ctx, id: 'lifelines', title: 'Lifelines Network Builder', emoji: '🚢', total: TOTAL_NODES });
    let t = 0, step = 0, connected = [];

    const render = () => {
      if (t >= TASKS.length) return finish();
      const task = TASKS[t];
      step = 0;
      const pins = ch.mapItems.map((m, k) => ({ name: m.name, lat: m.lat, lon: m.lon, id: k, label: '', cls: connected.some(c => match(m.name, c)) ? 'dim' : '' }));
      frame.setProgress(t);
      frame.body(`
        <div class="qcard" style="padding:16px">
          <div class="between" style="margin-bottom:10px">
            <div>
              <div class="qtag" style="margin:0">NODE ${t + 1}/5 · ${esc(task.label)}</div>
              <div class="qtext small" style="margin:6px 0 0">${task.instruction}</div>
            </div>
            <span class="pill amber" data-step>0 / ${task.seq.length}</span>
          </div>
          <div class="map-wrap">${indiaSVG({ pins, showLabels: false, legend: false })}</div>
          <div class="row" style="margin-top:10px">
            ${task.seq.map((s, k) => `<span class="pill ${k < step ? 'lime' : ''}" data-node="${k}">${esc(s)}</span>`).join('<span class="muted">→</span>')}
          </div>
        </div>
        <div data-fb></div>`);

      const stepEl = frame.q('[data-step]');
      frame.bodyEl.querySelectorAll('[data-pin]').forEach(g => {
        g.onclick = ev => {
          const k = +g.dataset.id;
          const m = ch.mapItems[k];
          const target = task.seq[step];
          const ok = match(m.name, target);
          if (ok) {
            step++;
            connected.push(target);
            g.classList.add('correct');
            g.querySelector('.dot')?.setAttribute('r', 7);
            const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            lbl.setAttribute('text-anchor', 'middle'); lbl.setAttribute('y', '-10');
            lbl.setAttribute('font-size', '9'); lbl.setAttribute('fill', '#b8ff5c');
            lbl.textContent = target;
            g.appendChild(lbl);
            stepEl.textContent = `${step} / ${task.seq.length}`;
            const nodePill = frame.q(`[data-node="${step - 1}"]`);
            if (nodePill) nodePill.classList.add('lime');
            frame.record(true, { factId: factForSection(ch, ch.sections[0]), base: 14, difficulty: 3, mapPin: true });
            sfx.pin();
            if (step === task.seq.length) {
              sfx.great();
              const fb = frame.q('[data-fb]');
              fb.innerHTML = frame.feedbackHTML({
                ok: true, head: `Network live: ${task.label} connected.`,
                body: esc(task.fact),
                ref: `Ch 7 · ${task.label}`
              }) + `<div class="btn-row"><button class="btn primary" data-next>${t + 1 < TASKS.length ? 'Next network →' : 'Final map report →'}</button></div>`;
              fb.querySelector('[data-next]').onclick = () => { t++; render(); };
              frame.bodyEl.querySelectorAll('[data-pin]').forEach(x => x.style.pointerEvents = 'none');
            }
          } else {
            g.classList.add('wrong');
            setTimeout(() => g.classList.remove('wrong'), 500);
            addXP(-2);
            frame.total++;
            recordAnswer(factForSection(ch, ch.sections[0]), false, { game: 'lifelines' });
            sfx.bad();
            const fb = frame.q('[data-fb]');
            fb.innerHTML = frame.feedbackHTML({
              ok: false,
              head: `That is ${esc(m.name.split(' — ')[0])}, not ${target}.`,
              body: `Look for <b>${task.seq[step]}</b>. ${esc(m.why || '')}`,
              ref: `Ch 7 · map work`
            });
          }
        };
      });
    };

    function finish() {
      frame.finish({ retry: true, title: 'Lifelines Network Builder', subtitle: 'All five lifelines connected. The map is yours.' });
    }
    render();
  }
};
