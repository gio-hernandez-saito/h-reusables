export interface SVGIcon {
  path: string;
  viewBox?: string;
}

export interface BaseProps {
  cls?: string;
  styles?: Partial<CSSStyleDeclaration>;
}