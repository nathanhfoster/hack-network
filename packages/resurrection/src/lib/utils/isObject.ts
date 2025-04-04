import isNull from './isNull';

const isObject = (value: any): value is object => {
  const type = typeof value;

  return !isNull(value) && (type === 'object' || type === 'function');
};

export default isObject;
