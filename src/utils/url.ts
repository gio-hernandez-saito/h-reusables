export function refineURL(url: string) {
  const regexList = [/\/$/, /^www\./, /^https?:\/\//]
  regexList.forEach((regex) => url = url.replace(regex, ''))
  return url
}