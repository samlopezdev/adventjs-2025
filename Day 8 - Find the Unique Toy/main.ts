export function findUniqueToy(toy: string): string {
  const seenLetters: Record<string, number> = {};

  for (const letter of toy) {
    const lower: string = letter.toLowerCase();

    seenLetters[lower] = (seenLetters[lower] || 0) + 1;
  }

  for (const char of toy) {
    if (seenLetters[char.toLowerCase()] === 1) return char;
  }

  return "";
}