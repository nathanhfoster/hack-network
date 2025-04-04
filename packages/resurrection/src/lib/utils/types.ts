export type RunTests = <T>(
  callback: (...args: any[]) => any,
  tests: TestToRun<T>[],
) => void;

export type TestToRun<T = any> = {
  name?: string;
  args?: any | any[];
  expected: T;
};
