// Matching Gloves

// In Santa's workshop, the elves have found a mountain of magical gloves completely disorganized. Each glove is described by two values:

// hand: indicates whether it is a left glove (L) or a right glove (R)
// color: the color of the glove (string)
// Your task is to help them match gloves: A valid pair is a left glove and a right glove of the same color.

// You must return a list with the colors of all the pairs found. Keep in mind that there can be several pairs of the same color.

// 🧩 Examples
// const gloves = [
//   { hand: 'L', color: 'red' },
//   { hand: 'R', color: 'red' },
//   { hand: 'R', color: 'green' },
//   { hand: 'L', color: 'blue' },
//   { hand: 'L', color: 'green' }
// ]

// matchGloves(gloves)
// // ["red", "green"]

// const gloves2 = [
//   { hand: 'L', color: 'gold' },
//   { hand: 'R', color: 'gold' },
//   { hand: 'L', color: 'gold' },
//   { hand: 'L', color: 'gold' },
//   { hand: 'R', color: 'gold' }
// ]

// matchGloves(gloves2)
// // ["gold", "gold"]

// const gloves3 = [
//   { hand: 'L', color: 'red' },
//   { hand: 'R', color: 'green' },
//   { hand: 'L', color: 'blue' }
// ]

// matchGloves(gloves3)
// // []


function matchGloves(gloves) {
  const pairs = [];
  const seenGloves = {};

  // Sets 'color': [hand array] to seenGloves 
  for (const { hand, color } of gloves) {
    if (seenGloves[color]) {
      seenGloves[color].push(hand);
    } else {
      seenGloves[color] = [hand];
    }
  }

  // Compares number of left & right in each color, pushes color to [pairs] 
  for (const color in seenGloves) {
    let left = seenGloves[color].filter((e) => e === "L").length;
    let right = seenGloves[color].filter((e) => e === "R").length;

    const pairCount = Math.min(left, right);

    for (let i = 0; i < pairCount; i++) {
      pairs.push(color);
    }
  }

  return pairs;
}


// Other Solution
function matchGloves(gloves) {
  const pairs = [];
  const seenGloves = {};

  // Count left and right gloves for each color
  for (const { hand, color } of gloves) {
    if (!seenGloves[color]) {
      seenGloves[color] = { L: 0, R: 0 };
    }
    seenGloves[color][hand]++;
  }

  // Loop through the seenGloves object and find pairs
  for (const color in seenGloves) {
    const left = seenGloves[color].L;
    const right = seenGloves[color].R;

    // We can form pairs as long as we have both left and right gloves
    const pairsCount = Math.min(left, right);

    // Add the color to the result for each pair
    for (let i = 0; i < pairsCount; i++) {
      pairs.push(color);
    }
  }

  return pairs;
}