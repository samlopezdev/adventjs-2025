export function hasFourLights(board: string[]): boolean {
  let row = board.length;
  let col = board[0].length;

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const letter: string = board[r][c];
      if (letter === ".") continue;

      // Check horizontal
      if (c + 3 < col) {
        let count = 0;
        for (let i = 0; i < 4; i++) {
          if (board[r][c + i] === letter) count++;
        }
        if (count === 4) return true;
      }

      // Check vertical
      if (r + 3 < row) {
        let count = 0;
        for (let i = 0; i < 4; i++) {
          if (board[r + i][c] === letter) count++;
        }
        if (count === 4) return true;
      }
    }
  }
  return false;
}