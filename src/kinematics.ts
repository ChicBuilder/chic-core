import type { RepMetrics, SetAnalytics } from './types';

export function calculateVelocityLoss(reps: RepMetrics[]): number {
  if (reps.length <= 1) return 0;
  const firstRepVelocity = reps[0].meanVelocityMps;
  const lastRepVelocity = reps[reps.length - 1].meanVelocityMps;
  if (firstRepVelocity <= 0) return 0;
  const loss = ((firstRepVelocity - lastRepVelocity) / firstRepVelocity) * 100;
  return Math.max(0, Math.round(loss));
}

export function analyzeSet(reps: RepMetrics[]): SetAnalytics {
  const totalReps = reps.length;
  if (totalReps === 0) {
    return { totalReps: 0, meanSetVelocity: 0, velocityLossPercent: 0, estimatedRpe: 0 };
  }
  const sumVelocity = reps.reduce((acc, r) => acc + r.meanVelocityMps, 0);
  const meanSetVelocity = Math.round((sumVelocity / totalReps) * 100) / 100;
  const velocityLossPercent = calculateVelocityLoss(reps);
  let estimatedRpe = 6.0;
  if (velocityLossPercent >= 40) estimatedRpe = 10.0;
  else if (velocityLossPercent >= 30) estimatedRpe = 9.0;
  else if (velocityLossPercent >= 20) estimatedRpe = 8.0;
  else if (velocityLossPercent >= 10) estimatedRpe = 7.0;

  return { totalReps, meanSetVelocity, velocityLossPercent, estimatedRpe };
}
