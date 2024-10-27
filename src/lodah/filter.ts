// lodash/filter.ts

// filter関数の代替実装
export function filter<T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}
