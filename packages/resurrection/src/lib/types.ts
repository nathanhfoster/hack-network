import {
  ComponentType,
  CSSProperties,
  Dispatch,
  ReactNode,
  RefObject,
} from 'react';

import {
  IfMaybeUndefined,
  IfVoid,
  IsAny,
  IsUnknownOrNonInferrable,
} from './utils/tsHelpers';

/**
 * Represent a generic function.
 * Used internally to improve code readability
 */
export type GenericFunction = (...args: any[]) => any;

/**
 * Typed generic callback function, used mostly internally
 * to defined callback setters
 */
export type SomeCallback<TArgs, TResult = void> = (...args: TArgs[]) => TResult;

/**
 * A callback setter is generally used to set the value of
 * a callback that will be used to perform updates
 */
export type CallbackSetter<TArgs> = (nextCallback: SomeCallback<TArgs>) => void;

export type _ActionCreatorWithPreparedPayload<
  PA extends PrepareAction<any> | void,
  T extends string = string,
> =
  PA extends PrepareAction<infer P>
    ? ActionCreatorWithPreparedPayload<
        Parameters<PA>,
        P,
        T,
        ReturnType<PA> extends {
          error: infer E;
        }
          ? E
          : never,
        ReturnType<PA> extends {
          meta: infer M;
        }
          ? M
          : never
      >
    : void;
export interface ActionCreatorWithNonInferrablePayload<
  T extends string = string,
> extends BaseActionCreator<unknown, T> {
  <PT>(payload: PT): PayloadAction<T, PT>;
}
export interface ActionCreatorWithOptionalPayload<P, T extends string = string>
  extends BaseActionCreator<P, T> {
  (payload?: P): PayloadAction<T, P>;
}
export interface ActionCreatorWithoutPayload<T extends string = string>
  extends BaseActionCreator<undefined, T> {
  (): PayloadAction<T, undefined>;
}
export interface ActionCreatorWithPayload<P, T extends string = string>
  extends BaseActionCreator<P, T> {
  (payload: P): PayloadAction<T, P>;
}
export interface ActionCreatorWithPreparedPayload<
  Args extends unknown[],
  P,
  T extends string = string,
  E = never,
  M = never,
> extends BaseActionCreator<P, T, M, E> {
  /**
   * Calling this {@link redux#ActionCreator} with `Args` will return
   * an Action with a payload of type `P` and (depending on the `PrepareAction`
   * method used) a `meta`- and `error` property of types `M` and `E` respectively.
   */
  (...args: Args): PayloadAction<T, P, M, E>;
}
export type ActionPayload<P = any> = {
  payload: P;
};

export interface BaseActionCreator<P, T extends string, M = never, E = never> {
  type: T;
  match: (
    action: PayloadAction<string, unknown>,
  ) => action is PayloadAction<T, P, M, E>;
}

export type ContextStore<S> = S & { error?: ContextStoreError };

export type ContextStoreActionCallback<S> = (state: S) => S;

export type ContextStoreError = unknown | string;

export type ContextStoreInitializer<S = any, I = S> = (
  initialState?: I extends S ? S : I,
  edit?: boolean,
) => S;

export type ActionCreatorType = {
  [key: string]: (...args: any[]) => any;
};

export type DispatchMaybeWithAction<A = any> = (value?: A) => void;

export type PayloadActionType<
  T extends string = string,
  M = never,
  E = never,
> = {
  type: T;
} & ([M] extends [never]
  ? {}
  : {
      meta: M;
    }) &
  ([E] extends [never]
    ? {}
    : {
        error: E;
      });
export type PayloadAction<
  T extends string = string,
  P = any,
  M = never,
  E = never,
> = {
  type: T;
  payload: P;
} & ([M] extends [never]
  ? {}
  : {
      meta: M;
    }) &
  ([E] extends [never]
    ? {}
    : {
        error: E;
      });
export type PayloadActionCreator<P = void, T extends string = string> = {
  type: T;
  payload: P;
  (payload: P): { type: T; payload: P };
};

export type PrepareAction<P> =
  | ((...args: any[]) => { payload: P })
  | ((...args: any[]) => { payload: P; meta: any })
  | ((...args: any[]) => { payload: P; error: any })
  | ((...args: any[]) => { payload: P; meta: any; error: any });

export type ReducerMaybeWithAction<S, A = DispatchMaybeWithAction> = (
  state: S,
  action?: A,
) => S;

export type ReducerStateMaybeWithAction<
  R extends ReducerMaybeWithAction<any>,
  A = DispatchMaybeWithAction,
> = R extends ReducerMaybeWithAction<infer S, A> ? S : never;

export type Thunk<A, S, P = void> = (
  dispatch: Dispatch<A>,
  getState: () => RefObject<S>['current'],
) => PayloadActionCreator | Promise<P> | Promise<void> | P;

export type ThunkFunction<P = void, S = any, A = any> = IsAny<
  P,
  ThunkFunctionWithParam<any, S, A>,
  IsUnknownOrNonInferrable<
    P,
    ThunkFunctionWithParam<unknown, S, A>,
    // else
    IfVoid<
      P,
      ThunkFunctionWithParam<P, S, A>,
      // else
      IfMaybeUndefined<
        P,
        ThunkFunctionWithOptionalPayload<P, S, A>,
        // else
        ThunkFunctionWithParam<P, S, A>
      >
    >
  >
>;

type ThunkFunctionWithParam<Param = void, S = any, A = any> = (
  param: Param,
) => Thunk<A, S>;

type ThunkFunctionWithOptionalPayload<Param = void, S = any, A = any> = (
  param?: Param,
) => Thunk<A, S>;

export type LoosePartial<T> = {
  [P in keyof T]?: T[P] | undefined;
};

export type DataComponent<T extends object> = {
  data: T[];
};

export type DataConfigComponent<
  T extends object,
  C extends object = {},
> = DataComponent<T> & {
  config: C[];
};

export type Ensure<T, K extends keyof T> = T & PickEnsure<T, K>;

export type Falsely = null | undefined | false | typeof NaN | 0 | bigint | '';

export type LayoutProps = {
  Footer?: ComponentType;
  Header?: ComponentType;
  children: ReactNode;
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

export type Subset<T, K extends keyof T> = Pick<T, K>;

export type Truthy<T> = T extends Falsely ? never : T;

export type ValueComponent<T = any> = {
  value: T;
};

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export interface ClickableComponent {
  onClick?: React.MouseEventHandler<HTMLElement>;
  //   onClick?: (...args: unknown[]) => void;
}

export interface ExtendableComponent extends ClickableComponent {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export interface PolyMorphicComponent<
  T extends React.ElementType = 'button' | 'span',
> extends ExtendableComponent {
  component?: T;
  props?: React.ComponentProps<T>;
}

export type Reducer<S, A> = (state: S, action: A) => S;

export type Action =
  | ActionCreatorWithPayload<any, string>
  | PayloadActionCreator<any, string>;
