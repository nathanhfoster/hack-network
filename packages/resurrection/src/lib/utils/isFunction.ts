const isFunction = (value: any): value is Function =>
  value instanceof Function || typeof value === 'function';

export default isFunction;
