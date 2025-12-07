export function drawTree(height: number, ornament: string, frequency: number): string {
  let result = "";
  let pos = 1; // global position counter for characters

  for (let i = 1; i <= height; i++) {
    const stars = 2 * i - 1;
    const spaces = height - i;

    result += " ".repeat(spaces);

    for (let j = 0; j < stars; j++) {
      const char = pos % frequency === 0 ? ornament : "*";
      result += char;
      pos++;
    }

    result += "\n";
  }

  // add trunk
  result += " ".repeat(height - 1) + "#";

  return result;
}
