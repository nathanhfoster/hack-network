import deepEquals from './deepEquals';
import pickBy from './pickBy';

const getObjectDiff = <
  OO extends Record<string, any>,
  UO extends Record<string, any>,
>(
  originalObject: OO,
  updatedObject: UO,
): Partial<UO> => {
  const diff = pickBy(updatedObject, (v, k) => !deepEquals(originalObject[k], v));
  const diffKeys = Object.keys(diff);

  return pickBy(updatedObject, (_, k) => diffKeys.includes(k)) as Partial<UO>;
};

export default getObjectDiff;
