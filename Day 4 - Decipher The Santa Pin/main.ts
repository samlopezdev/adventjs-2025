export function decodeSantaPin(code: string): string | null {
  const blocks = [...code.matchAll(/\[(.*?)\]/g)];
  const result: string[] = [];

  for (const match of blocks) {
    const content = match[1];

    if (content === "<") {
      if (result.length === 0) return null; // invalid
      result.push(result[result.length - 1]);
      continue;
    }

    // normal block: first char must be a digit
    const base = Number(content[0]);
    if (isNaN(base)) return null;

    let value = base;

    // apply operations
    for (const op of content.slice(1)) {
      if (op === "+") value = (value + 1) % 10;
      else if (op === "-") value = (value + 9) % 10; // equivalent to -1 mod 10
      else return null; // invalid char
    }

    result.push(value);
  }

  return result.length >= 4 ? result.join("") : null;
}