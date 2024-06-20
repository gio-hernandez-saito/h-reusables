import { isNumeric } from './assertion'

export function normalize(number: number, min: number, max: number, from: number = 0, to: number = 0) {
  return from + ((number - min) * (to - from)) / (max - min)
}

export function getNumberMagnitude(value: string | number) {
  if (!isNumeric(value)) return 0
  return Number(Number(value).toExponential().split('e')[1])
}

export function getDecimalCount(value: string | number) {
  if (!isNumeric(value)) return 0
  const num = Number(value)
  const split = (num: number, separator: string) => num.toString().split(separator);
  if (Math.floor(num) === num) return 0
  if (num.toString() === num.toExponential()) return Math.abs(Number(split(num, 'e')[1] || 0))
  if (num > (Number as any).MAX_SAFE_INTEGER || num < (Number as any).MIN_SAFE_INTEGER) {
    console.warn('Given value is too large or small to count decimal.')
    return 0
  }
  return split(num, '.')[1].length || 0
}