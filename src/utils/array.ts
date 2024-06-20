export function replaceAt<T>(target: T, array: Array<T>, index: number) {
  array.splice(index, 1, target);
  return [...array]
}