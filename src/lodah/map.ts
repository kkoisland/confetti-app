// lodash/map.ts

// map関数の代替実装
export function map<T, U>(array: T[], iteratee: (value: T, index: number, array: T[]) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(iteratee(array[i], i, array));
  }
  return result;
}
