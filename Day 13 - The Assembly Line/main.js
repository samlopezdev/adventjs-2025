// The Assembly Line

// Simulate the path of a gift inside a factory and return how it ends. To do this, you must create a function runFactory(factory).

// factory is a string[] where each cell can be:

// > < ^ v movements
// . correct exit
// Keep in mind that all rows have the same length and that there will be no other symbols.

// The gift always starts at position (0,0) (top left). At each step it reads the current cell and moves according to the direction. If it reaches a cell with a dot (.) it means it has correctly exited the factory.

// Result

// Return one of these values:

// 'completed' if it reaches a .
// 'loop' if it visits a position twice
// 'broken' if it goes outside the board
// Examples

// runFactory([
//   '>>.'
// ]) // 'completed'

// runFactory([
//   '>>>'
// ]) // 'broken'

// runFactory([
//   '>><'
// ]) // 'loop'

// runFactory([
//   '>>v',
//   '..<'
// ]) // 'completed'

// runFactory([
//   '>>v',
//   '<<<'
// ]) // 'broken'

// runFactory([
//   '>v.',
//   '^..'
// ]) // 'completed'

// runFactory([
//   'v.',
//   '^.'
// ]) // 'loop'

function runFactory(factory) {
  // start at [0, 0]
  const rows = factory.length;
  const cols = factory[0].length;

  let r = 0;
  let c = 0;
  const visited = new Set();

  while (true) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) {
      return "broken";
    }

    const cell = factory[r][c];
    if (cell === ".") {
      return "completed";
    }

    const key = `${r},${c}`;
    if (visited.has(key)) {
      return "loop";
    }
    visited.add(key);
    console.log(visited);

    if (cell === ">") c++;
    else if (cell === "<") c--;
    else if (cell === "^") r--;
    else if (cell === "v") r++;
  }
}

runFactory([">>>"]); // 'broken'

runFactory([">>v", "..<"]); // 'completed'

runFactory([">><"]); // 'loop'

// Alternative Solution
function runFactory(factory) {
  const rows = factory.length;
  const cols = factory[0].length;
  const maxSteps = rows * cols;

  let r = 0;
  let c = 0;
  let steps = 0;

  while (steps <= maxSteps) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) {
      return "broken";
    }

    if (factory[r][c] === ".") {
      return "completed";
    }

    const cell = factory[r][c];
    if (cell === ">") c++;
    else if (cell === "<") c--;
    else if (cell === "^") r--;
    else if (cell === "v") r++;

    steps++;
  }

  return "loop";
}
