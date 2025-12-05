type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`;

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  const fromNoNP = fromTime.replace(" NP", "");
  const [fromDate, fromClock] = fromNoNP.split("@");
  const [fY, fM, fD] = fromDate.split("*").map(Number)
  const [fH, fMin, fS] = fromClock.split("|").map(Number)
  const fromMs = Date.UTC(fY, fM - 1, fD, fH, fMin, fS);

  const toNoNP = takeOffTime.replace(" NP", "");
  const [toDate, toClock] = toNoNP.split("@")
  const [tY, tM, tD] = toDate.split("*").map(Number);
  const [tH, tMin, tS] = toClock.split("|").map(Number);
  const takeMs = Date.UTC(tY, tM - 1, tD, tH, tMin, tS);

  return Math.floor((takeMs - fromMs) / 1000);
}
