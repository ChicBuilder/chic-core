export function calculateRecommendedRestSeconds(rpe: number, reps: number): number {
  if (rpe >= 9.5) return 240; // 4 mins
  if (rpe >= 8.5) return 180; // 3 mins
  if (rpe >= 7.0 && reps <= 6) return 150; // 2.5 mins
  if (reps >= 12) return 60; // 1 min (hypertrophy / endurance)
  return 90; // Default 1.5 mins
}
