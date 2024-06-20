export function camelToDashed(string: string) {
  return camelToCustom(string, '-')
}

export function camelToSnake(string: string) {
  return camelToCustom(string, '_')
}

export function camelToCustom(string: string, delimiter: string) {
  return string.replace(/([a-z])([A-Z])/g, `$1${ delimiter }$2`).toLowerCase()
}

export function truncateString(str: string, length = 10) {
  return str.length <= length ? str : `${str.slice(0, length)}...`;
}