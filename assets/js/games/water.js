/* ============================================================
   06 · WATER SCARCITY SURVIVAL — allocation simulator
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, sfx } from '../ui.js';
import { factForSection } from '../engine.js';

const SIMS = [
  {
    title: 'Drought year on the Narmada',
    brief: 'Reservoir at 38%. Farmers, the power grid, the city and the river itself all want water. Allocate 100 units.',
    meters: [
      { key: 'irrigation', label: '💧 Irrigation', target: 45 },
      { key: 'power', label: '⚡ Hydropower', target: 20 },
      { key: 'urban', label: '🏙️ Urban supply', target: 15 },
      { key: 'ecology', label: '🐟 Environmental flow', target: 20 }
    ],
    why: 'Multipurpose projects must integrate irrigation, electricity, water supply, recreation and navigation — but a drought year forces trade-offs. Cutting the environmental flow kills the river; starving irrigation kills the crop. NCERT treats all four as legitimate demands.'
  },
  {
    title: 'Punjab groundwater emergency',
    brief: 'The water table has dropped 20 m. Allocate the state’s water budget.',
    meters: [
      { key: 'irrigation', label: '💧 Irrigation', target: 35 },
      { key: 'power', label: '⚡ Hydropower', target: 15 },
      { key: 'urban', label: '🏙️ Urban supply', target: 20 },
      { key: 'ecology', label: '♻️ Recharge & ecology', target: 30 }
    ],
    why: 'Over-irrigation causes water-logging and alkalinity in Punjab, Haryana and western UP. Recharge — through rainwater harvesting and check dams — must get a real share, or the next generation inherits a dead aquifer.'
  },
  {
    title: 'City vs village: the Sabarmati dispute',
    brief: 'During a drought, urban taps are prioritised and farmers protest. Allocate the river water.',
    meters: [
      { key: 'irrigation', label: '💧 Irrigation', target: 40 },
      { key: 'power', label: '⚡ Hydropower', target: 15 },
      { key: 'urban', label: '🏙️ Urban supply', target: 25 },
      { key: 'ecology', label: '🐟 Environmental flow', target: 20 }
    ],
    why: 'In Gujarat, Sabarmati basin farmers agitated over the higher priority given to urban water supply during droughts. Equitable allocation — not winner-takes-all — is the NCERT position.'
  }
];

export default {
  id: 'water',
  name: 'Water Scarcity Survival',
  emoji: '💧',
  tag: 'Simulation',
  blurb: 'Run a river system. Every unit you allocate is taken from someone else. Survive three crises.',
  count: 3,
  available: ch => ch.id === 'ch3',

  start(ctx) {
    const ch = ctx.chapter;
    const frame = new GameFrame({ ctx, id: 'water', title: 'Water Scarcity Survival', emoji: '💧', total: SIMS.length });
    let i = 0, totalScore = 0;

    const render = () => {
      if (i >= SIMS.length) return finish();
      const sim = SIMS[i];
      const alloc = { irrigation: 25, power: 25, urban: 25, ecology: 25 };
      frame.setProgress(i);
      frame.body(`
        <div class="qcard">
          <div class="qtag">CRISIS ${i + 1}/3 · ALLOCATE 100 UNITS</div>
          <div class="qtext small">${esc(sim.title)}</div>
          <p class="muted" style="font-size:13px">${esc(sim.brief)}</p>
          <div class="sim-panel" style="margin-top:14px" data-panel>
            ${sim.meters.map(m => `
              <div>
                <div class="meter"><span style="min-width:150px">${m.label}</span>
                  <span class="bar"><i style="width:${alloc[m.key]}%;background:linear-gradient(90deg,#4ee7ff,#b8ff5c)"></i></span>
                  <b data-v="${m.key}">${alloc[m.key]}</b>
                </div>
                <input class="slider" type="range" min="0" max="100" value="${alloc[m.key]}" data-s="${m.key}" />
              </div>`).join('')}
            <div class="between">
              <span class="pill" data-total>Total: 100 units</span>
              <button class="btn primary sm" data-run>Release the water →</button>
            </div>
          </div>
          <div class="tiny muted" style="margin-top:10px">Reality check: the total must stay at 100. Moving a slider rebalances the others.</div>
        </div>
        <div data-fb></div>`);

      const update = (key, val) => {
        const others = sim.meters.filter(m => m.key !== key);
        alloc[key] = val;
        let remaining = 100 - val;
        const otherSum = others.reduce((s, m) => s + alloc[m.key], 0) || 1;
        let assigned = 0;
        others.forEach((m, idx) => {
          if (idx === others.length - 1) alloc[m.key] = Math.max(0, remaining - assigned);
          else {
            const v = Math.round((alloc[m.key] / otherSum) * remaining);
            alloc[m.key] = v; assigned += v;
          }
        });
        sim.meters.forEach(m => {
          const el = frame.q(`[data-v="${m.key}"]`);
          if (el) el.textContent = alloc[m.key];
          const slider = frame.q(`[data-s="${m.key}"]`);
          if (slider && m.key !== key) slider.value = alloc[m.key];
          const bar = slider?.previousElementSibling?.querySelector('i') || el?.parentElement?.querySelector('i');
          if (bar) bar.style.width = alloc[m.key] + '%';
        });
        frame.q('[data-total]').textContent = `Total: ${Object.values(alloc).reduce((a, b) => a + b, 0)} units`;
      };

      frame.bodyEl.querySelectorAll('[data-s]').forEach(sl => {
        sl.oninput = () => { sfx.tick(); update(sl.dataset.s, +sl.value); };
      });

      let released = false;
      frame.q('[data-run]').onclick = () => {
        if (released) return;
        released = true;
        const dev = sim.meters.reduce((s, m) => s + Math.abs(alloc[m.key] - m.target), 0);
        const score = Math.max(0, 100 - Math.round(dev * 1.1));
        totalScore += score;
        const ok = score >= 65;
        frame.record(ok, { factId: factForSection(ch, ch.sections[1]), base: 22, difficulty: 3 });
        ok ? sfx.good() : sfx.bad();

        const fb = frame.q('[data-fb]');
        fb.innerHTML = `
          <div class="feedback ${ok ? 'good' : 'bad'}">
            <div class="fb-head">${ok ? '✅' : '⚠️'} Allocation score: ${score}/100</div>
            <div style="display:grid;gap:6px;margin:12px 0">
              ${sim.meters.map(m => {
                const diff = alloc[m.key] - m.target;
                const good = Math.abs(diff) <= 8;
                return `<div class="meter ${good ? 'good' : Math.abs(diff) <= 18 ? 'warn' : 'bad'}">
                  <span style="min-width:150px">${m.label}</span>
                  <span class="bar"><i style="width:${Math.min(100, alloc[m.key] * 1.6)}%"></i></span>
                  <b>${alloc[m.key]}</b>
                  <span class="tiny muted" style="min-width:78px">ideal ${m.target}</span>
                </div>`;
              }).join('')}
            </div>
            <div class="fb-body">${esc(sim.why)}</div>
            <span class="ref">📖 Ch 3 · ${ok ? 'Multipurpose projects / scarcity' : 'Water scarcity & disputes'}</span>
          </div>
          <div class="btn-row"><button class="btn primary" data-next>${i + 1 < SIMS.length ? 'Next crisis →' : 'Final report →'}</button></div>`;
        fb.querySelector('[data-next]').onclick = () => { i++; render(); };
      };
    };

    function finish() {
      frame.finish({
        retry: true, title: 'Water Scarcity Survival',
        subtitle: totalScore >= 240 ? 'Water manager of the year.' : 'The river survived. Barely.'
      });
    }
    render();
  }
};
