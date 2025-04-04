import isFunction from './isFunction';

const isAsyncFunction = (fn: any): fn is Function =>
  isFunction(fn) && fn.constructor.name === 'AsyncFunction';

export default isAsyncFunction;
