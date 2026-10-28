export function calculateSessionFatigueScore(setsCount: number, meanRpe: number): number {
  const rawLoad = setsCount * meanRpe;
  return Math.min(100, Math.round((rawLoad / 120) * 100));
}
