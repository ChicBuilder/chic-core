import { describe, expect, it } from 'bun:test';
import { calculateVelocityLoss, analyzeSet } from '../src/kinematics';

describe('Kinematics', () => {
  it('calculates velocity loss across multiple reps', () => {
    const reps = [
      { repNumber: 1, concentricDurationMs: 600, eccentricDurationMs: 1200, meanVelocityMps: 0.8, peakVelocityMps: 1.1 },
      { repNumber: 2, concentricDurationMs: 800, eccentricDurationMs: 1200, meanVelocityMps: 0.6, peakVelocityMps: 0.9 },
      { repNumber: 3, concentricDurationMs: 1100, eccentricDurationMs: 1200, meanVelocityMps: 0.48, peakVelocityMps: 0.7 }
    ];
    const loss = calculateVelocityLoss(reps);
    expect(loss).toBe(40);
  });

  it('analyzes entire set to estimate RPE', () => {
    const reps = [
      { repNumber: 1, concentricDurationMs: 500, eccentricDurationMs: 1000, meanVelocityMps: 1.0, peakVelocityMps: 1.2 },
      { repNumber: 2, concentricDurationMs: 600, eccentricDurationMs: 1000, meanVelocityMps: 0.8, peakVelocityMps: 1.0 }
    ];
    const analytics = analyzeSet(reps);
    expect(analytics.totalReps).toBe(2);
    expect(analytics.estimatedRpe).toBe(8.0);
  });
});
