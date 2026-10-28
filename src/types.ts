export interface RepMetrics {
  repNumber: number;
  concentricDurationMs: number;
  eccentricDurationMs: number;
  meanVelocityMps: number;
  peakVelocityMps: number;
}

export interface SetAnalytics {
  totalReps: number;
  meanSetVelocity: number;
  velocityLossPercent: number;
  estimatedRpe: number;
}
