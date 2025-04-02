const isPromise = <T>(value: unknown): value is Promise<T> =>
  value instanceof Promise;

export default isPromise;
