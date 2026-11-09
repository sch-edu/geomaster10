/* ============================================================
   09 · INDUSTRY LOCATION ARCHITECT
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx } from '../ui.js';
import { factForSection } from '../engine.js';

const ROUNDS = [
  {
    industry: 'Integrated Iron & Steel Plant',
    icon: '🏗️',
    needs: 'Bulky raw material + coking coal + water → locate at the raw material.',
    sites: [
      { name: 'Bastar–Jharia rail corridor (Chhattisgarh/Jharkhand)', tags: ['Ore: adjacent', 'Coal: 200 km', 'Water: Mahanadi', 'Market: rail-linked'], ok: true, why: 'Weight-losing bulky ore and coal decide the location. This is exactly why Bhilai, Rourkela, Durgapur and Bokaro sit in the eastern mineral belt.' },
      { name: 'Central Delhi industrial estate', tags: ['Ore: 1,200 km', 'Coal: 1,100 km', 'Market: huge', 'Land: very costly'], ok: false, why: 'Market size cannot compensate for transporting bulky ore and coal over 1,000 km. Heavy, weight-losing industry must sit near raw materials.' },
      { name: 'A hill resort with cheap land', tags: ['Ore: 600 km', 'Coal: 700 km', 'Power: scarce', 'Labour: scarce'], ok: false, why: 'Cheap land is irrelevant when raw material, power and labour are all missing. Location factors are a package.' }
    ]
  },
  {
    industry: 'Cotton Textile Mill',
    icon: '🧵',
    needs: 'Cotton + humid climate + skilled labour + market.',
    sites: [
      { name: 'Ahmedabad — Gujarat cotton belt', tags: ['Cotton: local', 'Humidity: high', 'Labour: skilled', 'Market: port nearby'], ok: true, why: 'Ahmedabad earned the name “Manchester of India” for exactly this combination — local cotton, humid climate, skilled labour and market access.' },
      { name: 'A dry desert town with no cotton', tags: ['Cotton: 500 km', 'Humidity: very low', 'Labour: scarce', 'Market: small'], ok: false, why: 'Dry air breaks yarn; absent cotton and labour make it unviable.' },
      { name: 'A port with imported cotton only', tags: ['Cotton: imported', 'Power: costly', 'Labour: available'], ok: false, why: 'Workable but weaker than the domestic cotton belt; importing the main raw material raises costs.' }
    ]
  },
  {
    industry: 'Aluminium Smelter',
    icon: '🔩',
    needs: 'Bauxite + cheap continuous electricity.',
    sites: [
      { name: 'Korba — near bauxite and thermal/hydel power', tags: ['Bauxite: regional', 'Power: cheap', 'Transport: rail'], ok: true, why: 'Aluminium smelting needs enormous continuous electricity, which is why plants cluster at Hirakud, Korba, Renukoot and Nagpur.' },
      { name: 'A city with diesel generators only', tags: ['Bauxite: 400 km', 'Power: expensive', 'Labour: skilled'], ok: false, why: 'Smelting is power-hungry; expensive captive diesel power destroys the economics.' },
      { name: 'A port with imported bauxite', tags: ['Bauxite: imported', 'Power: moderate'], ok: false, why: 'Possible in principle, but India’s advantage is domestic bauxite plus cheap power — Odisha leads for a reason.' }
    ]
  },
  {
    industry: 'Sugar Mill',
    icon: '🍬',
    needs: 'Sugarcane loses sucrose after harvesting → mill must sit in the cane belt.',
    sites: [
      { name: 'Inside the Uttar Pradesh cane belt', tags: ['Cane: walking distance', 'Labour: seasonal', 'Market: local mandi'], ok: true, why: 'Cane is bulky and its sucrose content falls quickly after cutting, so mills locate within the cane-growing area — UP and Maharashtra dominate.' },
      { name: 'A metro 400 km from any cane field', tags: ['Cane: 400 km', 'Transport: good', 'Market: huge'], ok: false, why: 'Transporting cane 400 km loses sucrose and adds cost. Sugar is a raw-material-oriented industry.' },
      { name: 'A coastal site importing raw sugar', tags: ['Cane: imported', 'Power: cheap'], ok: false, why: 'India’s sugar industry is agro-based on domestic cane, not a refiner of imported raw sugar.' }
    ]
  },
  {
    industry: 'Cement Plant',
    icon: '🧱',
    needs: 'Limestone + silica + alumina + gypsum — bulky, weight-losing.',
    sites: [
      { name: 'Adjacent to a limestone deposit with rail', tags: ['Limestone: on site', 'Gypsum: 150 km', 'Market: rail-linked'], ok: true, why: 'Cement needs bulky limestone; plants locate near limestone deposits. The first plant was set up in Chennai in 1904.' },
      { name: 'City centre with no limestone', tags: ['Limestone: 350 km', 'Market: next door', 'Dust: complaints'], ok: false, why: 'Hauling limestone 350 km plus dust nuisance in a city makes no sense.' },
      { name: 'A port importing clinker', tags: ['Limestone: imported', 'Power: available'], ok: false, why: 'Only viable as a grinding unit; the core industry follows limestone.' }
    ]
  },
  {
    industry: 'Software / IT Services Firm',
    icon: '💻',
    needs: 'Skilled labour + connectivity + city services (agglomeration).',
    sites: [
      { name: 'Bengaluru electronic city', tags: ['Labour: skilled', 'Airport: 40 km', 'Agglomeration: strong'], ok: true, why: 'IT is footloose but labour- and connectivity-hungry. Bengaluru became the electronic capital through skilled labour and agglomeration economies.' },
      { name: 'Remote mining town', tags: ['Labour: scarce', 'Connectivity: poor', 'Power: unstable'], ok: false, why: 'IT needs skilled people and reliable links, not minerals.' },
      { name: 'A small town with cheap land and no college', tags: ['Labour: unskilled', 'Connectivity: weak'], ok: false, why: 'Cheap land is useless when the key input — skilled labour — is absent.' }
    ]
  }
];

export default {
  id: 'industry',
  name: 'Industry Location Architect',
  emoji: '🏭',
  tag: 'Application',
  blurb: 'Raw material, power, market, labour. Place six industries where the NCERT logic says they belong.',
  count: 6,
  available: ch => ch.id === 'ch6',

  start(ctx) {
    const ch = ctx.chapter;
    const rounds = shuffle(ROUNDS).slice(0, 6);
    const frame = new GameFrame({ ctx, id: 'industry', title: 'Industry Location Architect', emoji: '🏭', total: rounds.length });
    let i = 0, profit = 0;

    const render = () => {
      if (i >= rounds.length) return finish();
      const r = rounds[i];
      let answered = false;
      frame.setProgress(i);
      frame.body(`
        <div class="qcard">
          <div class="qtag">PROJECT ${i + 1}/6 · site selection</div>
          <div class="qtext small">${r.icon} Where do you build the <b>${esc(r.industry)}</b>?</div>
          <div class="qhint" style="margin-bottom:14px">${esc(r.needs)}</div>
          <div style="display:grid;gap:10px">
            ${r.sites.map((s, k) => `<button class="opt" data-s="${k}" style="flex-direction:column;align-items:flex-start;gap:8px">
              <div style="display:flex;gap:8px;align-items:center"><span class="key">${k + 1}</span><b>${esc(s.name)}</b></div>
              <div style="display:flex;gap:6px;flex-wrap:wrap">${s.tags.map(t => `<span class="pill">${esc(t)}</span>`).join('')}</div>
            </button>`).join('')}
          </div>
          <div class="meter good" style="margin-top:16px"><span>💰 Projected profit</span><span class="bar"><i style="width:${Math.min(100, 20 + profit)}%"></i></span><b>${profit >= 0 ? '+' : ''}${profit}</b></div>
        </div>
        <div data-fb></div>`);

      frame.bodyEl.querySelectorAll('[data-s]').forEach(b => {
        b.onclick = ev => {
          if (answered) return;
          answered = true;
          const k = +b.dataset.s;
          const site = r.sites[k];
          const ok = !!site.ok;
          frame.bodyEl.querySelectorAll('[data-s]').forEach(x => {
            x.classList.add('locked');
            if (r.sites[+x.dataset.s].ok) x.classList.add('correct');
            else if (x === b) x.classList.add('wrong');
          });
          profit += ok ? 25 : -18;
          frame.record(ok, { factId: factForSection(ch, ch.sections[1]), base: 20, difficulty: 3 });
          ok ? sfx.good() : sfx.bad();
          frame.q('.meter').className = `meter ${profit >= 0 ? 'good' : 'bad'}`;
          frame.q('.meter .bar i').style.width = Math.min(100, Math.max(5, 20 + profit)) + '%';
          frame.q('.meter b').textContent = (profit >= 0 ? '+' : '') + profit;

          const fb = frame.q('[data-fb]');
          fb.innerHTML = frame.feedbackHTML({
            ok,
            head: ok ? 'Site approved. NCERT location logic wins again.' : 'Bad site. The plant is bleeding money and the examiner is unimpressed.',
            body: `<b>${esc(site.name)}</b><br>${esc(site.why)}`,
            ref: `Ch ${ch.n} · Location of Industries`
          }) + `<div class="btn-row"><button class="btn primary" data-next>${i + 1 < rounds.length ? 'Next project →' : 'See the balance sheet →'}</button></div>`;
          fb.querySelector('[data-next]').onclick = () => { i++; render(); };
        };
      });
    };

    function finish() {
      frame.finish({
        retry: true, title: 'Industry Location Architect',
        subtitle: profit > 80 ? 'Tycoon. Every plant is where the book says.' : 'Sites reviewed. Read the location factors once more.'
      });
    }
    render();
  }
};
