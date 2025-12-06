type Glove = { hand: "L" | "R"; color: string };
type GloveCount = { L: number; R: number }

export function matchGloves(gloves: Glove[]): string[] {
  const pairs: string[] = [];
  const seenGloves: Record<string, GloveCount> = {};

  for (const { hand, color } of gloves) {
    if (!seenGloves[color]) {
      seenGloves[color] = { L: 0, R: 0 };
    }
    seenGloves[color][hand]++;
  }

  for (const color in seenGloves) {
    let left: number = seenGloves[color].L;
    let right: number = seenGloves[color].R;

    const min: number = Math.min(left, right);

    for (let i = 0; i < min; i++) {
      pairs.push(color);
    }
  }

  return pairs;
}
