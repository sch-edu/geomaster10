/* ============================================================
   14 · SPOT THE ERROR
   15 · RAPID FIRE BOARD BOOSTER
   17 · BOSS FIGHT
   18 · ULTIMATE GEOGRAPHY GOD CHALLENGE
   ============================================================ */
import { makeMcqGame } from './base.js';
import { mixedQuestions, trueFalseQuestions, crossChapterQuestions, clozeQuestions, mcqQuestions, defQuestions } from '../engine.js';
import { shuffle } from '../ui.js';

export const spotError = makeMcqGame({
  id: 'error',
  name: 'Spot the Error',
  emoji: '🕵️',
  tag: 'Fact-check',
  blurb: 'True NCERT line or twisted trap? Call it, then read the correction. Twelve statements, zero mercy.',
  count: 10,
  base: 11,
  build: (ch, ctx, n) => trueFalseQuestions(ch, n)
});

export const rapidFire = makeMcqGame({
  id: 'rapid',
  name: 'Rapid Fire Board Booster',
  emoji: '⚡',
  tag: 'Speed',
  blurb: '15 questions, 10 seconds each. Combos stack XP. This is the board paper at 2x speed.',
  count: 15,
  timePerQ: 10,
  forceRematch: false,
  base: 9,
  build: (ch, ctx, n) => shuffle([
    ...mcqQuestions(ch, 9),
    ...trueFalseQuestions(ch, 3),
    ...clozeQuestions(ch, 3)
  ]).slice(0, n)
});

export const bossFight = makeMcqGame({
  id: 'boss',
  name: 'Chapter Boss Fight',
  emoji: '👑',
  tag: 'Exam',
  mode: 'boss',
  blurb: '18 mixed questions, 25 seconds each. 95% clears the chapter. Drops the examiner boss.',
  count: 18,
  timePerQ: 25,
  forceRematch: false,
  base: 13,
  build: (ch, ctx, n) => mixedQuestions(ch, n)
});

export const godExam = makeMcqGame({
  id: 'god',
  name: 'Ultimate Geography God Exam',
  emoji: '☠️',
  tag: 'Full syllabus',
  mode: 'boss',
  blurb: 'All 7 chapters. 30 questions, 30 seconds each, competency-style. The final boss of Class 10 Geography.',
  count: 30,
  timePerQ: 30,
  forceRematch: false,
  base: 16,
  build: (ch, ctx, n) => crossChapterQuestions(ctx.chapters || [], n)
});
