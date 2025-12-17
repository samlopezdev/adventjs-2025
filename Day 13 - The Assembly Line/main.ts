type Factory = string[]
type Result = "broken" | "loop" | "completed"


export function runFactory(factory: Factory): Result {
  const rows = factory.length;
  const cols = factory[0].length;

  let r = 0,
    c = 0;

  const visited = new Set<string>();

  while (true) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return "broken";

    if (factory[r][c] === ".") return "completed";

    const key = `${r}, ${c}`;
    if (visited.has(key)) return "loop";

    visited.add(key);

    switch (factory[r][c]) {
      case ">":
        c++;
        break;
      case "<":
        c--;
        break;
      case "v":
        r++;
        break;
      case "^":
        r--;
        break;
    }
  }
}
