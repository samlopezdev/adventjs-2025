// Elf Battle

// Two elves are playing a turn-based battle. Each one has a deck of moves represented as a string where each character is an action.

// A Normal attack: deals 1 point of damage if it’s not blocked
// B Block: blocks a normal attack (A)
// F Strong attack: deals 2 points of damage, cannot be blocked
// Both elves start with 3 hit points. The first elf to reach 0 hit points or less loses and the battle ends immediately (no further moves are processed).

// Round rules

// If both use an attack (A or F), both take damage according to the type.
// B blocks A, but does not block F.
// Everything is resolved simultaneously.
// Your task

// Return the result of the battle as a number:

// 1 → if Elf 1 wins
// 2 → if Elf 2 wins
// 0 → if it’s a draw (both reach 0 at the same time or end with the same health)
// elfBattle('A', 'B')
// // Round 1: A vs B -> Elf 2 blocks
// // Result: Elf 1 = 3 HP
// //         Elf 2 = 3 HP
// // → 0

// elfBattle('F', 'B')
// // Round 1: F vs B -> Elf 2 takes 2 damage (F cannot be blocked)
// // Result: Elf 1 = 3 HP
// //         Elf 2 = 1 HP
// // → 1

// elfBattle('AAB', 'BBA')
// // R1: A vs B → Elf 2 blocks
// // R2: A vs B → Elf 2 blocks
// // R3: B vs A → Elf 1 blocks
// // Result: Elf 1 = 3, Elf 2 = 3
// // → 0

// elfBattle('AFA', 'BBA')
// // R1: A vs B → Elf 2 blocks
// // R2: F vs B → Elf 2 takes 2 damage (F cannot be blocked)
// // R3: A vs A → both -1
// // Result: Elf 1 = 2, Elf 2 = 0
// // → 1

// elfBattle('AFAB', 'BBAF')
// // R1: A vs B → Elf 2 blocks
// // R2: F vs B → Elf 2 takes 2 damage (F cannot be blocked)
// // R3: A vs A → both -1 → Elf 2 reaches 0 Battle ends!
// // R4: is not played, since Elf 2 has no health left
// // → 1

// elfBattle('AA', 'FF')
// // R1: A vs F → Elf 1 -2, Elf 2 -1
// // R2: A vs F → Elf 1 -2, Elf 2 -1 → Elf 1 reaches -1
// // → 2

function elfBattle(elf1, elf2) {
  // compare each letter in both strings; loop
  // if letter is 'A' and other letter is NOT 'B', elfHP - 1.
  // if letter is 'F', elfHP - 2
  // check who has more HP ? Same amount of HP ?
  let hp1 = 3,
    hp2 = 3;
  const maxLen = Math.max(elf1.length, elf2.length);

  for (let i = 0; i < maxLen; i++) {
    if (elf1[i] === "A" && elf2[i] !== "B") hp2--;
    if (elf2[i] === "A" && elf1[i] !== "B") hp1--;

    if (elf1[i] === "F") hp2 -= 2;
    if (elf2[i] === "F") hp1 -= 2;

    if (hp1 <= 0 || hp2 <= 0) break;
  }
  return hp1 > hp2 ? 1 : hp2 > hp1 ? 2 : 0;
}

// elf1 & elf2 -> string including 'A', 'B', or 'F'
// return -> number. 1 if elf1 wins. 2 if elf2 wins. 0 if its a draw.

// compare each letter in both strings; loop
// if letter is 'A' and other letter is NOT 'B', elfHP - 1.
// if letter is 'F', elfHP - 2
// check who has more HP ? Same amount of HP ?


// Alternative Solution
function elfBattle(elf1, elf2) {
  const STARTING_HP = 3;
  const ATTACK_DAMAGE = 1;
  const FIRE_DAMAGE = 2;

  let hp1 = STARTING_HP;
  let hp2 = STARTING_HP;

  const maxLen = Math.max(elf1.length, elf2.length);

  for (let i = 0; i < maxLen && hp1 > 0 && hp2 > 0; i++) {
    const move1 = elf1[i] ?? "";
    const move2 = elf2[i] ?? "";

    // Normal attack
    if (move1 === "A" && move2 !== "B") hp2 -= ATTACK_DAMAGE;
    if (move2 === "A" && move1 !== "B") hp1 -= ATTACK_DAMAGE;

    // Fire attack
    if (move1 === "F") hp2 -= FIRE_DAMAGE;
    if (move2 === "F") hp1 -= FIRE_DAMAGE;
  }

  if (hp1 > hp2) return 1;
  if (hp2 > hp1) return 2;
  return 0;
}