/**
 * Creates an array of a specified length and maps its elements using a provided mapping function.
 *
 * @template T - The type of the input value for the mapping function.
 * @template U - The type of the output value from the mapping function. Defaults to `T`.
 * @param {number} length - The length of the array to create.
 * @param {(v: T, k: number) => U} mapfn - A function that maps each element of the array.
 *   - `v` - The current value (of type `T`).
 *   - `k` - The index of the current element.
 * @param {any} [thisArg] - Optional. A value to use as `this` when executing the mapping function.
 * @returns {U[]} An array of length `length` with elements mapped by the provided function.
 */
const createArrayObject = <T, U = T>(
  length: number,
  mapfn: (v: T, k: number) => U,
  thisArg?: any,
): U[] => Array.from({ length }, mapfn, thisArg);

export default createArrayObject;
