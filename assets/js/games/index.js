/* ============================================================
   Game registry — 18 formats
   ============================================================ */
import sniper from './sniper.js';
import { buildMapGame } from './mapblitz.js';
import sortBattle from './sortbattle.js';
import detective from './detective.js';
import guardian from './guardian.js';
import water from './water.js';
import crop from './crop.js';
import hunt from './mineralhunt.js';
import industry from './industry.js';
import lifelines from './lifelines.js';
import defduel from './defduel.js';
import caseStudy from './casestudy.js';
import longAnswer from './longanswer.js';
import palace from './memorypalace.js';
import { spotError, rapidFire, bossFight, godExam } from './quiz.js';

export const mapBlitz = buildMapGame({});

export const GAMES = [
  sniper, mapBlitz, sortBattle, detective, guardian, water, crop, hunt, industry,
  lifelines, defduel, caseStudy, longAnswer, spotError, rapidFire, palace, bossFight, godExam
];

export const globals = [godExam];

export const byId = Object.fromEntries(GAMES.map(g => [g.id, g]));

export function gamesFor(chapter) {
  return GAMES.map(g => {
    const isGlobal = g.id === 'god';
    const avail = isGlobal ? true : (g.available ? g.available(chapter) : true);
    return { ...g, availableHere: avail };
  });
}

export const WHY_LOCKED = {
  water: 'Unlocks in Chapter 3 (Water Resources).',
  crop: 'Unlocks in Chapter 4 (Agriculture).',
  guardian: 'Unlocks in Chapter 2 (Forest & Wildlife).',
  industry: 'Unlocks in Chapter 6 (Manufacturing Industries).',
  lifelines: 'Unlocks in Chapter 7 (Lifelines of National Economy).',
  palace: 'Extra memory sets unlock in this chapter soon.',
  detective: 'Needs at least 3 detective case files in this chapter.'
};

/* ============================================================
   Rules, scoring and feedback for every format (shown in the Library)
   ============================================================ */
export const RULES = {
  sniper: {
    rules: ['A real NCERT paragraph is split into its sentences.', 'One sentence contains the asked fact — click it.', 'A wrong shot reveals the exact line and forces a re-shot.'],
    scoring: 'Base 14 XP per hit, +speed bonus. Every re-shot costs 2 XP and is logged to the SRS.',
    feedback: '“Direct hit” for correct; “Missed shot — the book is disappointed” plus the exact line and section reference for wrong.'
  },
  map: {
    rules: ['Alternating rounds: FIND the named pin, then NAME the glowing pin.', 'State names can be toggled on as training wheels.', 'Wrong clicks reveal the true location and must be fixed before continuing.'],
    scoring: '18 XP per correct pin, difficulty-weighted, combo multiplier up to ×2.4.',
    feedback: 'Gold pin + NCERT reason on success; “Missed the map. Classic.” with the location and its chapter fact on error.'
  },
  sort: {
    rules: ['Tokens from the book appear in a pool.', 'Tap a token then a bin (or drag it) to classify it.', 'Check your sorting — wrong tokens bounce back until every token is right.'],
    scoring: '8 XP per token, +2 XP per combo step. First-try placement is tracked separately.',
    feedback: 'Combo callouts (“COMBO ×7 — you are sorting like a machine”) and a category reminder on rejects.'
  },
  detective: {
    rules: ['A case file opens with one clue.', 'Reveal more clues at −3 XP each.', 'Name the soil / crop / mineral / industry from four suspects.'],
    scoring: 'Starts at 18 XP and falls with each clue used. Case only closes when solved.',
    feedback: 'Wrong suspect triggers falling-soil “erosion” and another clue; correct shows the full NCERT explanation.'
  },
  guardian: {
    rules: ['Play a forest officer across five real NCERT scenes.', 'Each decision moves Biodiversity, Community trust and Political will.', 'No decision is free — every option has a consequence.'],
    scoring: '24 XP per NCERT-consistent decision; final biodiversity-weighted rank.',
    feedback: 'Consequence text + the exact NCERT position, plus a field log of every call you made.'
  },
  water: {
    rules: ['Three water crises. Allocate exactly 100 units across irrigation, hydropower, urban supply and environmental flow.', 'Sliders rebalance automatically.', 'Release the water and see the deviation from the sustainable allocation.'],
    scoring: 'Up to 22 XP, scaled by allocation accuracy (100 − total deviation).',
    feedback: 'Per-meter comparison against the ideal, then the NCERT paragraph that explains the trade-off.'
  },
  crop: {
    rules: ['Eight fields. Each shows state, season, rainfall and soil (or asks for the leading state).', 'Plant the crop that fits the conditions.', 'Correct crops light up your field strip.'],
    scoring: '12 XP per field; season/soil mismatches are explained.',
    feedback: '“Planted. Yield secured.” vs “Crop failure. The field is now a case study.” with the exact conditions.'
  },
  hunt: {
    rules: ['A masked NCERT clue describes a site.', 'Dig tiles on the grid to find it.', 'Wrong digs cost XP and reveal what was actually there.'],
    scoring: '18 XP per site; −2 XP per wrong dig, −4 XP for shrinking the grid.',
    feedback: '“Strike!” with the full map fact; “Empty pit — that was X” with that site’s own fact.'
  },
  industry: {
    rules: ['Six industries need a site.', 'Each candidate shows raw material, power, market, labour and transport chips.', 'Choose the site the NCERT location factors actually favour.'],
    scoring: '20 XP per correct site; profit meter moves ±25/−18.',
    feedback: 'Site report explaining weight-losing raw materials, power needs or agglomeration economies.'
  },
  lifelines: {
    rules: ['Five networks to connect: Golden Quadrilateral, N–S corridor, E–W corridor, ports and NW1.', 'Click nodes in the stated order.', 'A wrong node grows the score denominator and costs XP.'],
    scoring: '14 XP per node; wrong node −2 XP and +1 to the attempt total.',
    feedback: 'Network-live banner with the corridor length/fact; wrong node names what you actually clicked.'
  },
  defduel: {
    rules: ['Rounds 1–4: two definitions, only one is NCERT-exact.', 'Rounds 5–6: the definition is given and you must TYPE the term.', 'Fuzzy matching tolerates spelling but not wrong concepts.'],
    scoring: '12 XP per duel, 18 XP for typed recall, +2 for a corrected retry.',
    feedback: '“That is the trap version. Almost identical — which is why CBSE loves it.”'
  },
  case: {
    rules: ['Real NCERT dilemmas (Sardar Sarovar, Buxa, Alwar, Punjab).', 'Choose a policy response.', 'Watch the sustainability meter move, then read the verdict.'],
    scoring: '20 XP per NCERT-consistent decision; the meter is your visible conscience.',
    feedback: '“Policy accepted” or “Consequence triggered” with the precise book reason.'
  },
  long: {
    rules: ['Pick a real 3- or 5-mark board question.', 'Write a structured answer in the box.', 'The examiner marks it against a keyword rubric and shows the model answer.'],
    scoring: 'Marks are awarded point-by-point; XP = marks × 6 × your percentage.',
    feedback: 'A full marking table, hit/missed keywords, model answer and a “how to convert this to full marks” note.'
  },
  error: {
    rules: ['Statements appear, some exact from NCERT, some twisted.', 'Declare TRUE or FALSE.', 'Every item ends with the corrected NCERT line.'],
    scoring: '11 XP per fact-check with combo multipliers; wrong items are forced into the SRS.',
    feedback: 'The correction is shown as a book quote with the section reference, every time.'
  },
  rapid: {
    rules: ['15 questions, 10 seconds each.', 'No rematch — the clock is the boss.', 'Combos stack from 3 upward.'],
    scoring: '9 XP base plus a speed multiplier up to ×1.45 and a combo multiplier up to ×2.4.',
    feedback: 'Fast green tick / red flash with a one-line reason; timeouts show the answer immediately.'
  },
  palace: {
    rules: ['Three lists per chapter must be rebuilt in the correct order.', 'Tap items in sequence to fill the palace rooms.', 'A wrong tap shakes the room and lowers stability.'],
    scoring: '8 XP per correct placement, 18 XP on room completion, −4 XP for a hint.',
    feedback: '“Room complete — a permanent memory hook” with the ordered list; crumbling-room warnings on errors.'
  },
  boss: {
    rules: ['Unlocks at 90% chapter coverage.', '18 mixed questions — MCQ, definitions, true/false and exact blanks.', '25 seconds per question, no rematch. 95% clears the chapter.'],
    scoring: '13 XP base, timed, combo-weighted. The grade uses board-style bands.',
    feedback: 'A full examiner-style report card, kill list of every miss and a micro-rematch drill.'
  },
  god: {
    rules: ['All seven chapters. 30 questions. 30 seconds each.', 'Competency-style mix, no hints, no rematch during the exam.', '90% unlocks the Geography God badge.'],
    scoring: '16 XP base, full combo and speed multipliers.',
    feedback: 'Final report with every miss quoted against its NCERT line, plus a targeted drill.'
  }
};
