import hasProp from './hasProp';
import isObjectLike from './isObjectLike';

/**
 * This function does a shallow comparison on two objects
 * @param {*} a - first object to compare
 * @param {*} b - second object to compare
 * @returns {boolean} - whether the two objects are equal
 */
const is = <T = any>(a: T, b: T) => {
  // If they have the same reference
  if (a === b) {
    return a !== 0 || b !== 0 || 1 / (a as number) === 1 / (b as number);
  }

  // Check if they are both NaN
  return a !== a && b !== b;
};

/**
 * Performs a shallow equality check between two values of the same type.
 *
 * This function compares two values to determine if they are shallowly equal.
 * It first checks if the values are strictly equal using the `is` function.
 * If not, it verifies that both values are object-like and compares their
 * properties. The comparison ensures that all properties in the first object
 * exist in the second object and have the same value, and vice versa.
 *
 * @typeParam T - The type of the values being compared.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` if the values are shallowly equal, otherwise `false`.
 */
const shallowEquals = <T = any>(a: T, b: T) => {
  if (is(a, b)) {
    return true;
  }

  if (!isObjectLike(a) || !isObjectLike(b)) {
    return false;
  }

  const keys = Object.keys(a as object);

  for (let i = 0; i < keys.length; i++) {
    if (
      !hasProp.call(b, keys[i]) ||
      !is(
        (a as Record<string, any>)[keys[i]],
        (b as Record<string, any>)[keys[i]],
      )
    ) {
      return false;
    }
  }

  return keys.length === Object.keys(b as object).length;
};

export default shallowEquals;
