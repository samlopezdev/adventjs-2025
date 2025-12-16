export function findUnsafeGifts(warehouse: string[]) {
  const rows = warehouse.length;
  const cols = warehouse[0].length;
  let count = 0;

  // directions: top, bottom, left, right
  const directions: Array<[number, number]> = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (warehouse[r][c] === "*") {
        let guarded = false;

        for (const [dr, dc] of directions) {
          const nr = r + dr;
          const nc = c + dc;

          // Check bounds
          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            warehouse[nr][nc] === "#"
          ) {
            guarded = true;
            break;
          }
        }

        if (!guarded) count++;
      }
    }
  }

  return count;
}
