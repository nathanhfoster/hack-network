import hasProp from './hasProp';
import isArray from './isArray';
import isDate from './isDate';
import isDomElement from './isDomElement';
import isObject from './isObject';

const keyList = Object.keys;

/**
 * Compares two values deeply to determine if they are equal.
 *
 * This function handles various data types including arrays, objects, dates, regular expressions,
 * and even React elements. It also includes custom handling for DOM elements and avoids traversing
 * React-specific circular references like `_owner`.
 *
 * @template T - The type of the values being compared.
 * @param {T} a - The first value to compare.
 * @param {T} b - The second value to compare.
 * @returns {boolean} `true` if the values are deeply equal, otherwise `false`.
 *
 * @example
 * ```typescript
 * deepEquals({ a: 1, b: [2, 3] }, { a: 1, b: [2, 3] }); // true
 * deepEquals([1, 2, 3], [1, 2, 3]); // true
 * deepEquals(new Date('2023-01-01'), new Date('2023-01-01')); // true
 * deepEquals({ a: 1 }, { a: 2 }); // false
 * ```
 */
const deepEquals = <T = any>(a: T, b: T) => {
  if (a === b) return true;

  if (a && b && isObject(a) && isObject(b)) {
    const arrA = isArray<T>(a),
      arrB = isArray<T>(b);

    let i, length, key;

    if (arrA && arrB) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) if (!deepEquals(a[i], b[i])) return false;

      return true;
    }

    if (arrA !== arrB) return false;

    const dateA = isDate(a),
      dateB = isDate(b);

    if (dateA !== dateB) return false;
    if (dateA && dateB) return a.getTime() === b.getTime();

    const regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;

    if (regexpA !== regexpB) return false;
    if (regexpA && regexpB) return a.toString() === b.toString();

    const keys = keyList(a);

    length = keys.length;

    if (length !== keyList(b).length) return false;

    for (i = length; i-- !== 0; ) if (!hasProp.call(b, keys[i])) return false;

    // custom handling for DOM elements
    if (isDomElement(a)) return false;

    // custom handling for React
    for (i = length; i-- !== 0; ) {
      key = keys[i];
      //@ts-expect-error React elements have $$typeof property that TypeScript doesn't know about
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        if (
          !deepEquals(
            (a as Record<string, any>)[key],
            (b as Record<string, any>)[key],
          )
        )
          return false;
      }
    }

    return true;
  }

  return a !== a && b !== b;
};

export default deepEquals;
