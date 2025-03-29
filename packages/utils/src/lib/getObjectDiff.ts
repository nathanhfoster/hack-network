import { isEqual, pickBy } from 'lodash'

const getObjectDiff = <
  OO extends Record<string, any>,
  UO extends Record<string, any>
>(
  originalObject: OO,
  updatedObject: UO
): Partial<UO> => {
  const diff = pickBy(updatedObject, (v, k) => !isEqual(originalObject[k], v))
  const diffKeys = Object.keys(diff)

  return pickBy(updatedObject, (_, k) => diffKeys.includes(k)) as Partial<UO>
}

export default getObjectDiff
