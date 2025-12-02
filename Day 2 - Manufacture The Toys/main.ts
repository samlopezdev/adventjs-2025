export function manufactureGifts(giftsToProduce: { toy: string; quantity: number; }[]) {
  const result: string[] = [];

  for (const item of giftsToProduce) {
    const qty: number = item.quantity;

    if (qty > 0) result.push(...Array(qty).fill(item.toy));
  }

  return result;
}

console.log(
  manufactureGifts([
    { toy: "car", quantity: 3 },
    { toy: "doll", quantity: 1 },
    { toy: "ball", quantity: 2 },
  ])
);

console.log(
  manufactureGifts([
    { toy: "train", quantity: 0 }, // not manufactured
    { toy: "bear", quantity: -2 }, // neither
    { toy: "puzzle", quantity: 1 },
  ])
);
