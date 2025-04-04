type Filter = [string, string[]];

/**
 * Filters an array of items based on a set of filters and a custom filtering function.
 *
 * @template T - The type of items in the array. Defaults to an empty object.
 * @param {T[]} array - The array of items to be filtered.
 * @param {Filter[]} filters - An array of filter criteria to apply to the items.
 * @param {(filter: Filter, item: T, index: number, array: T[]) => any} filterFn -
 * A custom function that determines whether an item satisfies a filter.
 * It receives the current filter, the current item, its index, and the original array as arguments.
 * @returns {T[]} A new array containing the items that satisfy all the filters.
 */
const filter = <T extends object = {}>(
  array: T[],
  filters: Filter[],
  filterFn: (filter: Filter, item: T, index: number, array: T[]) => any,
) => {
  if (array.length === 0 || filters.length === 0) return [];

  let filterArray = [...array];

  filters.forEach((filter) => {
    filterArray = filterArray.filter((item, i) => {
      return filterFn(filter, item, i, array);
    });
  });

  return filterArray;
};

export default filter;
