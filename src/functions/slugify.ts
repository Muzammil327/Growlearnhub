import slugify from "slugify"

interface SlugifyOptions {
  replacement?: string
  remove?: RegExp | undefined
  lower?: boolean
  strict?: boolean
  locale?: string
  trim?: boolean
}

export function CreateSlug(inputString: string): string {
  const options: SlugifyOptions = {
    replacement: "-", // replace spaces with replacement character
    remove: undefined, // remove characters that match regex
    lower: false, // convert to lower case
    strict: false, // strip special characters except replacement
    locale: "vi", // language code of the locale to use
    trim: true // trim leading and trailing replacement chars
  }

  return slugify(inputString, options)
}

export function DecodeSlug(url: string): string {
  // Remove leading slash if present
  //   if (url.startsWith("/")) {
  //     url = url.slice(1);
  //   }

  // Decode URL-encoded characters
  const decodedTitle = decodeURIComponent(url)

  // Replace `%20` with spaces
  const title = decodedTitle.replace(/%20/g, " ")

  return title
}
export function convertHyphensToSpaces(text: string) {
  return text.replace(/-/g, " ")
}

export const convertToLowercaseWithHyphen = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, "-")
}
