# GeoQuest: India Mastery 🌏

A complete, playable **gamified learning universe** for CBSE Class 10 Geography — NCERT *Contemporary India II* (rationalised edition).

No notes. No lectures. Every sentence is turned into a game.

```bash
# run it
python3 -m http.server 8000 --bind 0.0.0.0
# open http://localhost:8000
```

Plain HTML + CSS + ES modules. No build step, no dependencies, no accounts. All progress lives in `localStorage`.

---

## What is actually inside

| | |
|---|---|
| Chapters | **7** (all of *Contemporary India II*) |
| NCERT fact objects | **383** — each with its chapter + section reference |
| Board-style MCQs | **126** |
| Definitions | **62** exact-vs-trap pairs |
| Fact-check statements | **78** (twisted + true) |
| Map pins | **121** across 20+ categories |
| Long-answer questions | **31** with full marking schemes and model answers |
| Case studies | **19** branching NCERT dilemmas |
| Game formats | **18** |
| Ranks | **10** (Soil Beginner → Geography God 100/100) |
| Badges | **12** |

### The seven chapters

1. Resources and Development
2. Forest and Wildlife Resources
3. Water Resources
4. Agriculture
5. Minerals and Energy Resources
6. Manufacturing Industries
7. Lifelines of National Economy (with the full CBSE map list)

---

## The 18 game engines

01 **Sentence Sniper** — a real NCERT paragraph, split into sentences; click the one sentence that answers the question.
02 **Map Blitz Arena** — alternating "find the pin" / "name the glowing pin" on a lat–long India map.
03 **Classification Battle** — drag/tap biotic, abiotic, renewable, national… into the right bins.
04 **Soil Detective** — clues drop one at a time (each costs XP); name the subject before erosion hits.
05 **Forest & Wildlife Guardian Quest** — RPG story mode with Biodiversity / Community trust / Political will meters.
06 **Water Scarcity Survival** — allocate 100 units of water across irrigation, power, urban supply and ecology.
07 **Crop Command Center** — plant the right crop in the right state, season, rainfall and soil.
08 **Mineral Hunt & Energy Empire** — masked NCERT clue, 12-tile dig grid, wrong pits cost XP.
09 **Industry Location Architect** — site six industries using raw material / power / market / labour logic.
10 **Lifelines Network Builder** — connect the Golden Quadrilateral, both corridors, the port chain and NW1, node by node.
11 **Definition Duel** — two definitions enter, one is NCERT-exact; then blind typed recall.
12 **Case Study Decision Maker** — Sardar Sarovar, Buxa, Alwar, Punjab; live with the consequences.
13 **Long Answer Arena** — write a real 3/5-marker, get marked against a keyword rubric, then see the model answer.
14 **Spot the Error** — true line or twisted trap, always followed by the corrected NCERT quote.
15 **Rapid Fire Board Booster** — 15 questions, 10 seconds each, combo multipliers.
16 **Memory Palace Builder** — rebuild ordered NCERT lists in numbered rooms.
17 **Boss Fight** — 18 mixed questions, 25 s each; unlocks at 90% chapter coverage, clears at 95%.
18 **Ultimate Geography God Challenge** — 30 cross-chapter questions, 30 s each; 90% for the badge.

---

## The systems underneath

**Fact bank → every game.** Each fact has a stable id (`ch1-f42`), a section reference and a chapter. Games never invent their own content; they read the same bank. That is why a fact missed in Map Blitz reappears in Rapid Fire and in the micro-rematch drill.

**Spaced repetition (SM-2 lite).** Every answer updates `{streak, ease, interval, dueDate}`:
- correct → streak +1, ease grows, interval multiplies;
- wrong → streak 0, ease drops, due immediately.
A fact is **mastered** at streak ≥ 2. Coverage % = mastered ÷ 383.

**Forced micro-rematch.** Wrong answers show the exact NCERT sentence and the section reference, then require a correction before continuing. Timed exam modes (Rapid Fire / Boss / God) skip the inline rematch so they stay exam-realistic — the miss is logged and returns in the results drill.

**Adaptive difficulty.** Hard mode shortens every timer by 40% and boosts the speed multiplier. The weak-area radar builds drills filtered to facts you have missed or that are due.

**XP maths.** `base × difficulty × combo (up to ×2.44) × speed (up to ×1.45)`. Ranks at 0 / 250 / 600 / 1,150 / 1,900 / 2,900 / 4,100 / 5,600 / 7,600 / 10,000 XP.

**Streaks & dailies.** One play per day keeps the streak; the daily challenge is seeded from the date, so it is identical for everyone that day. Weekly boss resets each Monday.

---

## Screens

- **HQ** — rank, XP, streak, coverage, 20-minute session plan, rank ladder.
- **Chapters** — seven vaults with live mastery bars + the official CBSE map list.
- **Chapter hub** — every unlocked format, coverage by NCERT section, boss gate.
- **Map Arena** — all-India mixed blitz or chapter-specific map drills.
- **Daily** — daily challenge + weekly boss.
- **God Exam** — the final simulation.
- **Radar** — weak facts, due facts, targeted drill generation.
- **Coverage** — every one of the 383 sentences with a ✅ / 🟡 / 🔴 / ⬜ status.
- **Profile** — badges, level, lifetime accuracy, settings.
- **Plan** — 30-day and 45-day mastery schedules.
- **Library** — all 18 formats with rules, scoring and feedback documented.

---

## Accuracy notes

- References are by **chapter + NCERT section heading**, not page number, because pagination changes between reprints.
- Data figures follow the rationalised NCERT edition as commonly printed (e.g. 2.5% freshwater, 45.5% net sown area, 21.7% forest cover, 5,846 km Golden Quadrilateral).
- Where editions differ (e.g. census-style counts like tiger numbers), the book's own figures are used.
- The India map is a deliberately simplified equirectangular outline for pin practice, not a survey map.

## Files

```
index.html
assets/css/style.css
assets/js/app.js            router + all screens
assets/js/core.js           profile, XP, ranks, badges, SRS, streaks
assets/js/engine.js         question factories + scoring
assets/js/map.js            India SVG + lat/long projection
assets/js/ui.js             DOM helpers, sound, confetti, toasts
assets/js/data/             ch1–ch7 content banks + index
assets/js/games/            18 game engines + shared frame
```
