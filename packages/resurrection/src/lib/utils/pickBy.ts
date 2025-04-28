/**
 * Creates an object composed of the object properties that satisfy the predicate.
 * The predicate is invoked with two arguments: (value, key).
 */
const pickBy = <T extends Record<string, any>>(
  object: T,
  predicate: (value: any, key: string) => boolean,
): Partial<T> => {
  const result: Partial<T> = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (predicate(value, key)) {
        result[key] = value;
      }
    }
  }

  return result;
};

export default pickBy;
