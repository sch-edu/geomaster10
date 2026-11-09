/* ============================================================
   05 · FOREST & WILDLIFE GUARDIAN QUEST — RPG story mode
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, sfx } from '../ui.js';
import { factForSection } from '../engine.js';

const EPISODES = [
  {
    scene: 'Buxa Tiger Reserve, West Bengal · 06:40',
    text: 'You are the new Field Director. A dolomite mine adjacent to the reserve has applied for a 10-year lease extension. The elephant corridor runs right through the proposed lease area. The mining lobby says jobs depend on it.',
    choices: [
      { t: 'Refuse the extension and notify the corridor as inviolate.', fx: { bio: 22, trust: 10, will: -6 }, ok: true, why: 'NCERT is explicit: dolomite mining in Buxa has disturbed habitats and blocked the migration route of the great Indian elephant.' },
      { t: 'Approve the lease but ask for boundary plantation.', fx: { bio: -20, trust: -8, will: 12 }, ok: false, why: 'Planting a boundary does not reopen a migration corridor. Habitat destruction is a stated cause of biodiversity decline.' },
      { t: 'Refer the file upward and take no position.', fx: { bio: -8, trust: -4, will: 0 }, ok: false, why: 'Inaction is still a decision — the corridor degrades while the file moves.' }
    ]
  },
  {
    scene: 'Alwar district, Rajasthan · 11:15',
    text: 'Five villages have declared 1,200 hectares as the Bhairodev Dakav Sonchuri, with their own hunting ban. The Forest Department wants the land brought under its direct control.',
    choices: [
      { t: 'Recognise the Sonchuri and back the villagers’ own rules.', fx: { bio: 20, trust: 18, will: -4 }, ok: true, why: 'Community-led protection with locally framed rules is exactly the NCERT example of successful conservation.' },
      { t: 'Take over the area and post armed guards.', fx: { bio: 2, trust: -16, will: 10 }, ok: false, why: 'The chapter’s clear lesson: involvement of local communities is a must, not an obstacle.' },
      { t: 'Convert the forest to farmland for village income.', fx: { bio: -24, trust: -6, will: 6 }, ok: false, why: 'Agricultural expansion is one of the major causes of forest depletion since 1951.' }
    ]
  },
  {
    scene: 'Project Tiger HQ · 15:00',
    text: 'The tiger census is grim. You have one budget line: anti-poaching patrols, prey-base restoration, or a tourism safari park. Poaching is driven by the skin and bone trade.',
    choices: [
      { t: 'Fund patrols and prey-base restoration; tighten trade checks.', fx: { bio: 22, trust: 8, will: 4 }, ok: true, why: 'Threats named in NCERT: poaching for trade, shrinking habitat, depletion of prey base, growing human population.' },
      { t: 'Build the safari park — tourism will pay for conservation.', fx: { bio: -6, trust: 6, will: 10 }, ok: false, why: 'Tourism revenue is welcome but does not address poaching, habitat loss or prey depletion.' },
      { t: 'Legalise limited bone trade to fund protection.', fx: { bio: -26, trust: -8, will: 8 }, ok: false, why: 'The skin and bone trade is precisely what pushed the tiger to the verge of extinction.' }
    ]
  },
  {
    scene: 'Himachal Pradesh · 09:30',
    text: 'A pharmaceutical firm wants Himalayan Yew bark at industrial scale. Taxol, extracted from the bark, needles, twigs and roots, is the world’s largest-selling anti-cancer drug. The Yew is already in danger of extinction.',
    choices: [
      { t: 'Permit only regulated, sustainable extraction with replanting and community benefit-sharing.', fx: { bio: 16, trust: 12, will: 2 }, ok: true, why: 'The Yew is threatened by excessive exploitation; regulated use protects both the species and livelihoods.' },
      { t: 'Allow clear-felling for maximum taxol yield.', fx: { bio: -28, trust: -10, will: 14 }, ok: false, why: 'Excessive exploitation is exactly what is pushing the Himalayan Yew toward extinction.' },
      { t: 'Ban all extraction and ignore the drug demand.', fx: { bio: 10, trust: -12, will: -8 }, ok: false, why: 'Conservation must involve communities and sustainable use, not a blanket ban that ignores needs.' }
    ]
  },
  {
    scene: 'Odisha Forest Secretariat · 10:00',
    text: 'A draft resolution would let village institutions protect degraded forest land managed by the Forest Department, in return for non-timber forest produce and shares in timber. It is 1988.',
    choices: [
      { t: 'Pass the resolution — this is Joint Forest Management.', fx: { bio: 18, trust: 20, will: 6 }, ok: true, why: 'Odisha passed the first JFM resolution in 1988; members get intermediary benefits like NTFP and timber shares.' },
      { t: 'Reject it — forests must be guarded only by the state.', fx: { bio: -10, trust: -18, will: 4 }, ok: false, why: 'JFM is the NCERT model of community partnership in forest restoration.' },
      { t: 'Pass it but give villagers no share in produce.', fx: { bio: 4, trust: -12, will: 2 }, ok: false, why: 'Without intermediary benefits the incentive collapses; JFM is a bargain, not a donation.' }
    ]
  }
];

export default {
  id: 'guardian',
  name: 'Forest Guardian Quest',
  emoji: '🐅',
  tag: 'Story RPG',
  blurb: 'Become a forest officer. Five decisions, three meters, one biodiversity score. The book grades your ethics.',
  count: 5,
  available: ch => ch.id === 'ch2',

  start(ctx) {
    const ch = ctx.chapter;
    const frame = new GameFrame({ ctx, id: 'guardian', title: 'Forest Guardian Quest', emoji: '🐅', total: EPISODES.length });
    let i = 0;
    const m = { bio: 50, trust: 40, will: 45 };
    const log = [];

    const render = () => {
      if (i >= EPISODES.length) return finish();
      const ep = EPISODES[i];
      let answered = false;
      frame.setProgress(i);
      frame.body(`
        <div class="qcard">
          <div class="qtag">SCENE ${i + 1}/5 · ${esc(ep.scene)}</div>
          <p style="font-size:15.5px;line-height:1.6;color:#dbe6fb">${esc(ep.text)}</p>
          <div class="options" style="margin-top:16px">
            ${ep.choices.map((c, k) => `<button class="opt" data-c="${k}"><span class="key">${k + 1}</span><span>${esc(c.t)}</span></button>`).join('')}
          </div>
          <div class="sim-panel" style="margin-top:16px">
            <div class="meter ${m.bio > 60 ? 'good' : m.bio > 35 ? 'warn' : 'bad'}"><span>🌿 Biodiversity</span><span class="bar"><i style="width:${m.bio}%"></i></span><b>${m.bio}</b></div>
            <div class="meter ${m.trust > 60 ? 'good' : m.trust > 35 ? 'warn' : 'bad'}"><span>🤝 Community trust</span><span class="bar"><i style="width:${m.trust}%"></i></span><b>${m.trust}</b></div>
            <div class="meter ${m.will > 60 ? 'good' : m.will > 35 ? 'warn' : 'bad'}"><span>🏛️ Political will</span><span class="bar"><i style="width:${m.will}%"></i></span><b>${m.will}</b></div>
          </div>
        </div>
        <div data-fb></div>`);

      frame.bodyEl.querySelectorAll('[data-c]').forEach(b => {
        b.onclick = ev => {
          if (answered) return;
          answered = true;
          const k = +b.dataset.c;
          const c = ep.choices[k];
          frame.bodyEl.querySelectorAll('[data-c]').forEach(x => {
            x.classList.add('locked');
            if (x === b) x.classList.add(c.ok ? 'correct' : 'wrong');
            if (ep.choices[+x.dataset.c].ok) x.classList.add('correct');
          });
          Object.keys(c.fx).forEach(key => { m[key] = Math.max(0, Math.min(100, m[key] + c.fx[key])); });
          log.push({ scene: ep.scene, choice: c.t, ok: c.ok });
          frame.record(c.ok, { factId: factForSection(ch, ch.sections[7] || ch.sections[0]), base: 24, difficulty: 3 });
          c.ok ? sfx.good() : sfx.bad();

          const fb = frame.q('[data-fb]');
          fb.innerHTML = frame.feedbackHTML({
            ok: c.ok,
            head: c.ok ? 'The forest breathes a little easier.' : 'Consequence: the ecosystem takes the hit.',
            body: `<b>${esc(c.why)}</b><br><span class="muted">Biodiversity ${c.fx.bio >= 0 ? '+' : ''}${c.fx.bio} · Trust ${c.fx.trust >= 0 ? '+' : ''}${c.fx.trust} · Political will ${c.fx.will >= 0 ? '+' : ''}${c.fx.will}</span>`,
            ref: `Ch 2 · Community & Conservation`
          }) + `<div class="btn-row"><button class="btn primary" data-next>${i + 1 < EPISODES.length ? 'Next scene →' : 'Final field report →'}</button></div>`;
          fb.querySelector('[data-next]').onclick = () => { i++; render(); };
        };
      });
    };

    function finish() {
      const pct = Math.round((m.bio * 0.6 + m.trust * 0.3 + m.will * 0.1));
      frame.finish({
        retry: true,
        title: 'Forest Guardian Quest',
        subtitle: pct >= 80 ? 'Guardian of the year. Biodiversity secured.' : pct >= 55 ? 'A working forest officer. Some scars remain.' : 'The forest needs a better officer. Replay the decisions.',
        extra: `<div class="card"><h3>📋 Field log</h3><div class="stack" style="margin-top:10px">
          ${log.map(l => `<div class="review-item ${l.ok ? 'good' : ''}"><div style="font-size:12px;color:var(--muted)">${esc(l.scene)}</div><div>${esc(l.choice)}</div></div>`).join('')}
        </div></div>`
      });
    }
    render();
  }
};
