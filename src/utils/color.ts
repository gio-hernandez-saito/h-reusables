import { RGB, RGBType } from "@/types/utils/color";

export function hexToRGB(hex: string): RGB {
  const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  if (!normal && !shorthand) throw Error('Invalid Hex String.')
  const obj = {
    target: (normal ? normal : shorthand) as RegExpMatchArray,
    factor: normal ? 1 : 0x11
  }
  const [r, g, b] = obj.target.slice(1).map((item) => obj.factor * parseInt(item, 16))
  return { r, g, b }
}

export function rgbToHex(r: number, g: number, b: number) {
  const isValid = (num: number) => num % 1 === 0 && num >= 0 && num <= 255
  if ([r, g, b].some(value => !isValid(value))) throw Error('Invalid Parameter. RGB should be an integer between 0 and 255.')
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

export function linearInterpolationColor(startRGB: RGB, endRGB: RGB, factor: number) {
  const arr: RGBType[] = ['r', 'g', 'b']
  const [r, g, b] = arr.map(e => Math.round(startRGB[e] + factor * (endRGB[e] - startRGB[e])))
  return rgbToHex(r, g, b)
}

export function interpolateColors(startHex: string, endHex: string, steps: number) {
  const interpolatedColors = []
  const startRGB = hexToRGB(startHex)
  const endRGB = hexToRGB(endHex)
  
  for (let i = 0; i < steps; i++) {
    const factor = i / steps
    interpolatedColors.push(linearInterpolationColor(startRGB, endRGB, factor))
  }
  
  return interpolatedColors
}
