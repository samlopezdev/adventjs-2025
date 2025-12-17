// Find the Gift Path

// At the North Pole, the elves have simplified their storage system to avoid mistakes.
// They now keep the presents in a magical object with limited depth, where each value appears only once.

// Santa needs a quick way to know which path of keys he must follow to find a specific present.

// Your task is to write a function that, given an object and a value, returns the array of keys that must be traversed to reach that value.

// Rules:

// The object has at most 3 levels of depth.
// The value to search for appears at most once.
// The object only contains other objects and primitive values (strings, numbers, booleans).
// If the value does not exist, return an empty array.
// Examples:

// const workshop = {
//   storage: {
//     shelf: {
//       box1: 'train',
//       box2: 'switch'
//     },
//     box: 'car'
//   },
//   gift: 'doll'
// }

// findGiftPath(workshop, 'train')
// // ➜ ['storage', 'shelf', 'box1']

// findGiftPath(workshop, 'switch')
// // ➜ ['storage', 'shelf', 'box2']

// findGiftPath(workshop, 'car')
// // ➜ ['storage', 'box']

// findGiftPath(workshop, 'doll')
// // ➜ ['gift']

// findGiftPath(workshop, 'plane')
// // ➜ []

function findGiftPath(workshop, gift) {
  // Helper function that traverses recursively
  function helper(currentObj, pathSoFar) {
    for (const key in currentObj) {
      if (!currentObj.hasOwnProperty(key)) continue;

      const value = currentObj[key];

      if (value === gift) {
        // Found the target, return the path including this key
        return [...pathSoFar, key];
      } else if (value && typeof value === "object") {
        // Recursively search deeper
        const result = helper(value, [...pathSoFar, key]);
        if (result.length > 0) {
          return result;
        }
      }
    }
    // Not found in this branch
    return [];
  }

  return helper(workshop, []);
}