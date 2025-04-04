import { RefObject } from 'react';

import isObject from './isObject';

export const isRef = <T = any>(value: any): value is RefObject<T> => {
  if (!isObject(value)) return false;

  const objectKeys = Object.keys(value);

  if (objectKeys.length !== 1) return false;

  return objectKeys[0] === 'current';
};

export default isRef;
