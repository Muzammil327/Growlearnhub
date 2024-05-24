export const convertToUppercaseWithSpace = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ').toLowerCase();
}


// convert all case to uppercase
// convert hyphen to space
