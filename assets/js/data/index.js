/* ============================================================
   Content index — hydrates chapter files, assigns stable fact IDs
   ============================================================ */
import ch1 from './ch1.js';
import ch2 from './ch2.js';
import ch3 from './ch3.js';
import ch4 from './ch4.js';
import ch5 from './ch5.js';
import ch6 from './ch6.js';
import ch7 from './ch7.js';

const RAW = [ch1, ch2, ch3, ch4, ch5, ch6, ch7];

export const CHAPTERS = RAW.map(ch => {
  const out = { ...ch };
  out.facts = ch.facts.map((f, i) => ({
    ...f,
    id: `${ch.id}-f${i}`,
    ch: ch.id,
    chN: ch.n,
    ref: `Ch ${ch.n} · ${f.s}`
  }));
  out.byId = Object.fromEntries(out.facts.map(f => [f.id, f]));
  return out;
});

export const byChapter = Object.fromEntries(CHAPTERS.map(c => [c.id, c]));
export const ALL_FACTS = CHAPTERS.flatMap(c => c.facts);
export const TOTAL_FACTS = ALL_FACTS.length;
export const factById = Object.fromEntries(ALL_FACTS.map(f => [f.id, f]));

export const BOOK = {
  title: 'Contemporary India — II',
  subtitle: 'NCERT Class 10 Geography · rationalised edition',
  totalFacts: TOTAL_FACTS,
  editionNote: 'References are given by chapter and NCERT section heading (not page numbers, which shift between reprints).'
};

/* Official CBSE Class 10 Geography map list (Social Science) */
export const CBSE_MAP_LIST = [
  { item: 'Major soil types', ch: 1 },
  { item: 'Areas of land degradation', ch: 1 },
  { item: 'Rivers: major Indian rivers', ch: 3 },
  { item: 'Dams: Salal, Bhakra Nangal, Tehri, Rana Pratap Sagar, Sardar Sarovar, Hirakud, Nagarjuna Sagar, Tungabhadra', ch: 3 },
  { item: 'Areas of rice, wheat, cotton, jute, sugarcane, tea, coffee cultivation', ch: 4 },
  { item: 'Iron ore mines: Mayurbhanj, Durg, Bailadila, Bellary, Kudremukh', ch: 5 },
  { item: 'Coal mines: Raniganj, Bokaro, Talcher, Neyveli, Singrauli, Korba', ch: 5 },
  { item: 'Oil fields: Digboi, Naharkatia, Mumbai High, Bassien, Kalol, Ankleshwar', ch: 5 },
  { item: 'Thermal power plants & nuclear plants', ch: 5 },
  { item: 'Cotton textile industry & iron and steel plants', ch: 6 },
  { item: 'Software technology parks', ch: 6 },
  { item: 'Major ports and airports', ch: 7 },
  { item: 'Golden Quadrilateral, North–South and East–West corridors', ch: 7 }
];

/* Extra map pins that appear in the official list but not in a chapter's game set */
export const EXTRA_MAP_PINS = [
  { name: 'Tungabhadra Dam', lat: 15.2, lon: 76.3, ch: 3, cat: 'dam', why: 'Dam on the Tungabhadra, a tributary of the Krishna.' },
  { name: 'Salal Dam — Chenab', lat: 33.1, lon: 74.8, ch: 3, cat: 'dam', why: 'Dam on the Chenab in Jammu & Kashmir.' },
  { name: 'Talcher — coal', lat: 20.9, lon: 85.2, ch: 5, cat: 'energy', why: 'Coalfield in Odisha, in the Mahanadi valley.' },
  { name: 'Neyveli — lignite', lat: 11.5, lon: 79.5, ch: 5, cat: 'energy', why: 'Lignite field in Tamil Nadu.' },
  { name: 'Singrauli — coal', lat: 24.2, lon: 82.7, ch: 5, cat: 'energy', why: 'Coalfield spanning MP and UP.' },
  { name: 'Bassien — petroleum', lat: 19.3, lon: 71.0, ch: 5, cat: 'energy', why: 'Offshore oil field near Mumbai High.' },
  { name: 'Kalol — petroleum', lat: 23.2, lon: 72.5, ch: 5, cat: 'energy', why: 'Gujarat oil field with Ankleshwar.' }
];

export const ALL_MAP_PINS = [
  ...CHAPTERS.flatMap(c => c.mapItems.map(m => ({ ...m, ch: c.n, chId: c.id, chapter: c.title }))),
  ...EXTRA_MAP_PINS
];

export function chapterStats() {
  return CHAPTERS.map(c => ({
    id: c.id, n: c.n, title: c.title, facts: c.facts.length,
    mcq: c.mcq.length, map: c.mapItems.length
  }));
}

export default CHAPTERS;
