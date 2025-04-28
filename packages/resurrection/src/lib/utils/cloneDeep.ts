/**
 * Deeply clones a given value, creating a new instance of the value
 * with all nested properties recursively copied.
 *
 * This function is useful for creating a completely independent copy
 * of objects, arrays, or other complex data structures to avoid
 * unintended mutations to the original data.
 */
const cloneDeep = <T>(value: T): T => {
  // Handle primitive types
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // Handle Date objects
  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }

  // Handle arrays
  if (Array.isArray(value)) {
    return value.map((item) => cloneDeep(item)) as T;
  }

  // Handle objects
  if (typeof value === 'object') {
    const result: Record<string, any> = {};
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        result[key] = cloneDeep(value[key]);
      }
    }
    return result as T;
  }

  return value;
};

export default cloneDeep;
