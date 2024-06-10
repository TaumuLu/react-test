export function isUrl(path?: string) {
  if (!path) return false

  return /^(https?:)/.test(path)
}

export function isExternal(path?: string) {
  if (!path) return false

  return isUrl(path) || /^(mailto:|tel:)/.test(path)
}
