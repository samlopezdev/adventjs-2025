// Decipher the Santa Pin

// The elves have found the encrypted code that protects the door to Santa’s workshop 🔐. The PIN has 4 digits, and it is hidden inside blocks like these:

// [1++][2-][3+][<]
// Write a function that deciphers the PIN from the code.

// The code is made up of blocks between brackets [...] and each block generates one digit of the PIN.

// A normal block has the form [nOP...], where n is a number (0-9) and after it there can be a list of (optional) operations.

// The operations are applied in order to the number and are:

// + adds 1
// - subtracts 1
// The result is always a digit (mod 10 arithmetic), for example 9 + 1 → 0 and 0 - 1 → 9.

// There is also the special block [<], which repeats the digit from the previous block.

// If in the end there are fewer than 4 digits, you must return null.

// 🧩 Examples
// decodeSantaPin('[1++][2-][3+][<]')
// // "3144"

// decodeSantaPin('[9+][0-][4][<]')
// // "0944"

// decodeSantaPin('[1+][2-]')
// // null (only 2 digits)


function decodeSantaPin(code) {
  const blocks = [...code.matchAll(/\[(.*?)\]/g)];
  const result = [];

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


decodeSantaPin("[1++][2-][3+][<]");