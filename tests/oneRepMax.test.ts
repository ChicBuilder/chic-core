import { describe, expect, it } from 'bun:test';
import { estimateOneRepMax } from '../src/oneRepMax';

describe('estimateOneRepMax', () => {
  it('calculates 1RM estimates using standard biomechanical models', () => {
    const estimates = estimateOneRepMax(100, 5);
    expect(estimates.epley).toBe(117);
    expect(estimates.brzycki).toBe(113);
    expect(estimates.average).toBeGreaterThan(100);
  });
  it('returns exact weight for a single rep', () => {
    const estimates = estimateOneRepMax(150, 1);
    expect(estimates.average).toBe(150);
  });
});
