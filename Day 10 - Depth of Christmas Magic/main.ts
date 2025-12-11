export function maxDepth(str: string) {
  let depth: number = 0;
  let max: number = 0;

  for (const ch of str) {
    if (ch === "[") {
      depth++;
      max = Math.max(max, depth);
    } else if (ch === "]") {
      depth--;

      // closed before opening
      if (depth < 0) return -1;
    }
  }

  return depth === 0 ? max : -1; // must end perfectly balanced
}