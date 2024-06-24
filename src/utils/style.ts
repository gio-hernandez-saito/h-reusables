import { camelToDashed } from './string'
import { BaseProps } from "@/types/global";

export function convertStylesToString(stylePair: Partial<CSSStyleDeclaration>): string {
  return Object.entries(stylePair).map((pair: [string, any]) => `${ camelToDashed(pair[0]) }: ${ pair[1] };`).join(' ');
}

export function getStyleFromProps<T extends BaseProps>(property: T | undefined) {
  return property && property.styles ? convertStylesToString(property.styles) : '';
}

export function getCSSVariable(name: string) {
  return getComputedStyle(document.body).getPropertyValue(name)
}
