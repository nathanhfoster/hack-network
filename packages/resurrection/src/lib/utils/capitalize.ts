/**
 * Capitalizes the first character of a given string.
 *
 * @param str - The string to be capitalized.
 * @returns A new string with the first character converted to uppercase and the rest of the string unchanged.
 */
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
