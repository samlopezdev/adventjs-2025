// Santas Secret Journey

// The sleigh’s GPS has gone crazy! 😱 Santa Claus has the segments of his trip, but they’re all out of order.

// Your mission is to reconstruct the complete route from the origin to the final destination.

// Keep in mind: The first element of the array is always the first segment of the trip. From there, you must keep connecting destinations to the next origins.

// revealSantaRoute([
//   ['MEX', 'CAN'],
//   ['UK', 'GER'],
//   ['CAN', 'UK']
// ])
// // → ['MEX', 'CAN', 'UK', 'GER']

// revealSantaRoute([
//   ['USA', 'BRA'],
//   ['JPN', 'PHL'],
//   ['BRA', 'UAE'],
//   ['UAE', 'JPN'],
//   ['CMX', 'HKN']
// ])
// // → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

// revealSantaRoute([
//   ['STA', 'HYD'],
//   ['ESP', 'CHN']
// ])
// // → ['STA', 'HYD']
// 🔎 Keep in mind:

// There are no duplicate routes or cycles in Santa’s path.
// There may be segments that don’t belong to the route; these must be ignored.


function revealSantaRoute(routes) {
  const route = [...segments[0]]; // start with first segment
  let current = segments[0][1];

  while (true) {
    const nextSegment = segments.find(([from]) => from === current);

    if (!nextSegment) break;

    route.push(nextSegment[1]);
    current = nextSegment[1];
  }

  return route;
}