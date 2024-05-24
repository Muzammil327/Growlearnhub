export const convertToLowercaseWithHyphen = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

// convert all case to lowercase
// convert space to hyphen
