export interface OneRepMaxEstimates {
  epley: number;
  brzycki: number;
  lombardi: number;
  average: number;
}

export function estimateOneRepMax(weight: number, reps: number): OneRepMaxEstimates {
  if (reps <= 1) {
    return { epley: weight, brzycki: weight, lombardi: weight, average: weight };
  }
  const epley = Math.round(weight * (1 + reps / 30));
  const brzycki = Math.round(weight * (36 / (37 - reps)));
  const lombardi = Math.round(weight * Math.pow(reps, 0.1));
  const average = Math.round((epley + brzycki + lombardi) / 3);
  return { epley, brzycki, lombardi, average };
}
