import isNull from './isNull';

export const isNil = (value: unknown): boolean =>
  isNull(value) || value === undefined;

export default isNil;
