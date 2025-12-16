export function elfBattle(elf1: string, elf2: string) {
  const STARTING_HP = 3;
  const ATTACK_DAMAGE = 1;
  const FIRE_DAMAGE = 2;

  let hp1: number = STARTING_HP;
  let hp2: number = STARTING_HP;

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