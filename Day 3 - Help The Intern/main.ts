// My Solution
function drawGift(size: number, symbol: string): string {
  if (size < 2) return "";

  const middle: string = (symbol + " ".repeat(size - 2) + symbol + "\n").repeat(
    size - 2
  );

  return symbol.repeat(size) + "\n" + middle + symbol.repeat(size);
}