export function revealSantaRoute(routes: string[][]): string[] {
  const route: string[] = [...routes[0]]; // first segment
  let current: string = routes[0][1];

  while (true) {
    const nextSegment = routes.find(([from]) => from === current);

    if (!nextSegment) break;

    route.push(nextSegment[1]);
    current = nextSegment[1];
  }

  return route;
}