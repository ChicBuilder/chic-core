import { describe, expect, it } from 'bun:test';
import { calculateRecommendedRestSeconds } from '../src/restTimer';

describe('calculateRecommendedRestSeconds', () => {
  it('recommends longer rest for near-maximal RPE', () => {
    expect(calculateRecommendedRestSeconds(9.5, 3)).toBe(240);
    expect(calculateRecommendedRestSeconds(8.5, 5)).toBe(180);
    expect(calculateRecommendedRestSeconds(6.5, 15)).toBe(60);
  });
});
