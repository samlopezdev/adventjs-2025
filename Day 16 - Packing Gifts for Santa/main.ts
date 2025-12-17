export function packGifts(gifts: number[], maxWeight: number): number | null {
  let sleighs = 0;
  let total = 0;

  for (const weight of gifts) {
    if (weight > maxWeight) return null;

    if (total + weight <= maxWeight) {
      total += weight;
    } else {
      sleighs++;
      total = weight;
    }
  }

  return sleighs + (total > 0 ? 1 : 0);
}