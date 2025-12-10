type Board = string;
type Moves = string;
type Result = "fail" | "crash" | "success";

export function moveReno(board: Board, moves: Moves): Result {
  const rows: string[] = board.split("\n").slice(1, -1);
  let ver: number = rows.findIndex((val) => val.includes("@"));
  let hor: number = rows[ver].indexOf("@");

  for (let direction of moves) {
    switch (direction) {
      case "U":
        ver--;
        break;
      case "D":
        ver++;
        break;
      case "L":
        hor--;
        break;
      case "R":
        hor++;
        break;
    }

    // Checks for out of bounds and walls
    if (
      ver < 0 ||
      ver >= rows.length ||
      hor < 0 ||
      hor >= rows[ver].length ||
      rows[ver][hor] === "#"
    ) {
      return "crash";
    } else if (rows[ver][hor] === "*") return "success";
  }

  return "fail";
}