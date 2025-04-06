import type { ComponentType, ReactNode } from 'react';

/**
 * A callback setter is generally used to set the value of
 * a callback that will be used to perform updates
 */
export type CallbackSetter<TArgs> = (nextCallback: SomeCallback<TArgs>) => void;

export type DataComponent<T extends object> = {
  data: T[];
};

export type DataConfigComponent<
  T extends object,
  C extends object = object,
> = DataComponent<T> & {
  config: C[];
};

export type Ensure<T, K extends keyof T> = T & PickEnsure<T, K>;

export type Falsely = null | undefined | false | typeof NaN | 0 | bigint | '';

/**
 * Represent a generic function.
 * Used internally to improve code readability
 */
export type GenericFunction = (...args: any[]) => any;

export type LayoutProps = {
  Footer?: ComponentType;
  Header?: ComponentType;
  children: ReactNode;
};

export type LoosePartial<T> = {
  [K in keyof T]?: undefined extends T[K] ? T[K] | undefined : T[K];
};

export type Nullable<T> = T | null;

export type NumberBoolean = 0 | 1;

export type PickEnsure<T, K extends keyof T> = Required<
  RequiredNotNull<Pick<T, K>>
>;

export type PickPartial<T, K extends keyof T> = Partial<Pick<T, K>>;

export type RequiredNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

/**
 * Typed generic callback function, used mostly internally
 * to defined callback setters
 */
export type SomeCallback<TArgs, TResult = void> = (...args: TArgs[]) => TResult;

export type Subset<T, K extends keyof T> = Pick<T, K>;

export type Truthy<T> = T extends Falsely ? never : T;

export type ValueComponent<T = any> = {
  value: T;
};

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
