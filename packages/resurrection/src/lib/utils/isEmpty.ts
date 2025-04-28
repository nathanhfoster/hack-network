/**
 * Checks if a value is empty. A value is considered empty if it is:
 * - null or undefined
 * - an empty string
 * - an empty array
 * - an empty object
 * - a number that is 0
 */
const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  if (typeof value === 'number') {
    return value === 0;
  }

  return false;
};

export default isEmpty;
