export function convertToUppercaseAndReplaceHyphens(inputString: string) {
  if (typeof inputString !== "string") {
    throw new TypeError("The input must be a string")
  }
  return inputString.toUpperCase().replace(/-/g, " ")
}
