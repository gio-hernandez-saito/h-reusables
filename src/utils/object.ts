export function getKeysByValue<Dict extends Record<string, any>>(object: Dict, value: Dict[keyof Dict]): string[] {
  return Object.keys(object).filter((key) => object[key] === value)
}

// Lodash get 과 유사
export function getDeepValue(obj: any, keyPath: string, delim = '.'): any {
  return keyPath.split(delim).reduce((o, k) => (o || {})[k], obj)
}