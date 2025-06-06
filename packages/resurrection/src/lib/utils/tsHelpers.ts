import { isFunction } from '../utils';

/** @public */
export type ActionFromMatcher<M extends Matcher<any>> =
  M extends Matcher<infer T> ? T : never;

export type ActionsUnionType<A extends Record<string, any>> = ReturnType<
  A[keyof A]
>;

/**
 * returns True if TS version is above 3.5, False if below.
 * uses feature detection to detect TS version >= 3.5
 * * versions below 3.5 will return `{}` for unresolvable interference
 * * versions above will return `unknown`
 *
 * @internal
 */
export type AtLeastTS35<True, False> = [True, False][IsUnknown<
  ReturnType<<T>() => T>,
  0,
  1
>];

/** @public */
export type DispatchFn<T extends (...a: any) => any> = (
  ...a: Parameters<T>
) => void;

// Appears to have a convenient side effect of ignoring `never` even if that's not what you specified
export type ExcludeFromTuple<T, E, Acc extends unknown[] = []> = T extends [
  infer Head,
  ...infer Tail,
]
  ? ExcludeFromTuple<Tail, E, [...Acc, ...([Head] extends [E] ? [] : [Head])]>
  : Acc;

export type FallbackIfUnknown<T, Fallback> = IsUnknown<T, Fallback, T>;

export interface HasMatchFunction<T> {
  match: TypeGuard<T>;
}

export type Id<T> = { [K in keyof T]: T[K] } & {};

/**
 * @internal
 */
export type IfMaybeUndefined<P, True, False> = [undefined] extends [P]
  ? True
  : False;

/**
 * @internal
 */
export type IfVoid<P, True, False> = [void] extends [P] ? True : False;

/**
 * return True if T is `any`, otherwise return False
 * taken from https://github.com/joonhocho/tsdef
 *
 * @internal
 */
export type IsAny<T, True, False = never> =
  // test if we are going the left AND right path in the condition
  true | false extends (T extends never ? true : false) ? True : False;

/**
 * @internal
 */
export type IsEmptyObj<T, True, False = never> = T extends any
  ? keyof T extends never
    ? IsUnknown<T, False, IfMaybeUndefined<T, False, IfVoid<T, False, True>>>
    : False
  : never;

/**
 * return True if T is `unknown`, otherwise return False
 * taken from https://github.com/joonhocho/tsdef
 *
 * @internal
 */
export type IsUnknown<T, True, False = never> = unknown extends T
  ? IsAny<T, False, True>
  : False;

/**
 * @internal
 */
export type IsUnknownOrNonInferrable<T, True, False> = AtLeastTS35<
  IsUnknown<T, True, False>,
  IsEmptyObj<T, True, IsUnknown<T, True, False>>
>;

export type Matcher<T> = HasMatchFunction<T> | TypeGuard<T>;

/**
 * Helper type. Passes T out again, but boxes it in a way that it cannot
 * "widen" the type by accident if it is a generic that should be inferred
 * from elsewhere.
 *
 * @internal
 */
export type NoInfer<T> = [T][T extends any ? 0 : never];

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export type ReplaceReturnType<T extends (...a: any) => any, TNewReturn> = (
  ...a: Parameters<T>
) => TNewReturn;

export interface TypeGuard<T> {
  (value: any): value is T;
}

/**
 * Convert a Union type `(A|B)` to an intersection type `(A&B)`
 */
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export const hasMatchFunction = <T>(
  v: Matcher<T>,
): v is HasMatchFunction<T> => {
  return v && isFunction((v as HasMatchFunction<T>).match);
};
