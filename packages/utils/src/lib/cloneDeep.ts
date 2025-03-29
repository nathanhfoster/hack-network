import { cloneDeep } from 'lodash-es'

/**
 * Deeply clones a given value, creating a new instance of the value
 * with all nested properties recursively copied.
 *
 * This function is useful for creating a completely independent copy
 * of objects, arrays, or other complex data structures to avoid
 * unintended mutations to the original data.
 *
 * @template T - The type of the value to be cloned.
 * @param value - The value to be deeply cloned. Can be an object, array, or any other data type.
 * @returns A deep clone of the provided value.
 */
export default cloneDeep
