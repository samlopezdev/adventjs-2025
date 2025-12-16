// Unwatched Gifts

// The Grinch wants to steal the Christmas presents from the warehouse. To do this, he needs to know which presents are not under surveillance.

// The warehouse is represented as an array of strings (string[]), where each present (*) is protected if its position is next to a camera (#). Each empty space is represented with a dot (.).

// Your task is to count how many presents are not under surveillance, meaning they do not have any adjacent camera (up, down, left, or right).

// Keep in mind: only the 4 cardinal directions are considered "adjacent", not diagonals.

// Presents in the corners or at the edges can be unguarded, as long as they do not have cameras directly next to them.


function findUnsafeGifts(warehouse) {
  // keep the location of a present '*'
  // check if there is a '#' on the top/bottom left/right side
  // if theres no camera next to a gift, +1 to count
  const rows = warehouse.length;
  const cols = warehouse[0].length;
  let count = 0;

  // directions: top, bottom, left, right
  const directions = [
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