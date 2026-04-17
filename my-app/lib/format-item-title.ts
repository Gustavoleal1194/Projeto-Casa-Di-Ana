const LOWERCASE_WORDS = new Set([
  "a",
  "o",
  "as",
  "os",
  "um",
  "uma",
  "uns",
  "umas",
  "de",
  "da",
  "do",
  "das",
  "dos",
  "e",
  "com",
  "em",
  "no",
  "na",
  "nos",
  "nas",
  "por",
  "para",
  "ao",
  "aos",
  "à",
  "às",
])

function capitalizeWord(word: string) {
  if (!word) return word
  return word.charAt(0).toLocaleUpperCase("pt-BR") + word.slice(1)
}

function titleCaseToken(token: string, isFirst: boolean) {
  // Preserve tokens that already look like acronyms/codes (e.g. "R$" / "NY" / "3D")
  if (/^[A-Z0-9$%]+$/.test(token) && token.length >= 2) return token

  const lower = token.toLocaleLowerCase("pt-BR")
  if (!isFirst && LOWERCASE_WORDS.has(lower)) return lower
  return capitalizeWord(lower)
}

export function formatItemTitle(input: string) {
  const trimmed = input.trim()
  if (!trimmed) return input

  // Split but keep separators so we don't lose punctuation/hyphens.
  const parts = trimmed.split(/(\s+|[-/()]+)/g)
  let wordIndex = 0

  return parts
    .map((part) => {
      if (!part) return part
      if (/^(\s+|[-/()]+)$/.test(part)) return part

      const isFirstWord = wordIndex === 0
      wordIndex += 1
      return titleCaseToken(part, isFirstWord)
    })
    .join("")
}

