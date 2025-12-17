function packGifts(gifts, maxWeight) {
  let sleighs = 0;
  let total = 0;

  for (const weight of gifts) {
    if (weight > maxWeight) return null;

    total += weight;

    // reset total to weight if its over maxWeight
    if (total > maxWeight) {
      total = weight;
      sleighs++;
    } else if (total === maxWeight) {
      total = 0;
      sleighs++;
    }
  }
  // add gift + gift , check if total > maxWeight, keep last gift val and +1 to sleighs
  // if total is greater than or equal to maxWeight, sleigh++
  // add gifts until total is greater than or equal to maxWeigh
  // .reduce( (total, n, ) => total + n > maxWeight ?)
  return sleighs + (total > 0 ? 1 : 0);
}



// Alternative Solution
function packGifts(gifts, maxWeight) {
  let sleighs = 0;
  let total = 0;

  for (const weight of gifts) {
    if (weight > maxWeight) return null;

    if (total + weight <= maxWeight) {
      total += weight;
    } else {
      sleighs++;
      total = weight;
    }
  }
  
  return sleighs + (total > 0 ? 1 : 0);
}