type MapFunctionCallback<T> = (item: T, index: number, array: T[]) => any;

/**
 * A utility function that combines filtering and mapping operations on an array.
 * It applies a mapping function to each element of the array and then filters
 * the results based on a provided filtering function. The order of mapping and
 * filtering can be controlled via the `mapFirst` parameter.
 *
 * @template T - The type of elements in the input array.
 * @template F - The type of the mapping function.
 * @template M - A boolean indicating whether mapping should occur before filtering.
 *
 * @param array - The input array to process.
 * @param filterFn - A function used to filter the elements. It receives the mapped
 * or original item (depending on `mapFirst`), the index of the item, and the original array.
 * @param mapFn - A function used to map the elements. It receives the original item,
 * the index of the item, and the original array.
 * @param mapFirst - An optional boolean indicating whether to apply the mapping function
 * before filtering (`true`) or after filtering (`false`). Defaults to `false`.
 *
 * @returns An array of elements that have been mapped and filtered based on the provided functions.
 */
const filterMap = <
  T,
  F extends MapFunctionCallback<T>,
  M extends boolean = false,
>(
  array: T[],
  filterFn: (
    item: M extends true ? ReturnType<F> : T,
    index: number,
    array: T[],
  ) => any,
  mapFn: F,
  mapFirst?: M,
): ReturnType<F>[] => {
  return array.reduce((acc, item, i) => {
    let newItem = mapFirst ? mapFn(item, i, array) : undefined;

    if (filterFn(mapFirst ? newItem : item, i, array)) {
      if (!newItem) {
        newItem = mapFn(item, i, array);
      }

      acc.push(newItem);
    }

    return acc;
  }, [] as ReturnType<F>[]);
};

export default filterMap;
