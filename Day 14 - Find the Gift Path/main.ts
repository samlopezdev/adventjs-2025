type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

export function findGiftPath(workshop: Workshop, gift: Gift): Path {
  function helper(currentObj: Record<string, unknown>, pathSoFar: string[]): string[] {
    for (const key in currentObj) {
      if (!currentObj.hasOwnProperty(key)) continue;

      const value = currentObj[key];

      if (value === gift) {
        // Found the target, return the path including this key
        return [...pathSoFar, key];
      } else if (value && typeof value === "object") {
        // Recursively search deeper
        const result = helper(value as Record<string, unknown>, [...pathSoFar, key]);
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
