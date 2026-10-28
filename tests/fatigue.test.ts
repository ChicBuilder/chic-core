import { describe, expect, it } from 'bun:test';
import { calculateSessionFatigueScore } from '../src/fatigue';

describe('calculateSessionFatigueScore', () => {
  it('computes percentage fatigue index', () => {
    const score = calculateSessionFatigueScore(12, 8);
    expect(score).toBe(80);
  });
});
