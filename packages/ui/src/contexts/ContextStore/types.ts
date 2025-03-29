import { Dispatch, MutableRefObject, Reducer } from 'react'

import NextRouterAugmented from '../../hooks/useRouterParams/types.js'

import { ProviderProps } from './Provider/types.js'
import {
  IfMaybeUndefined,
  IfVoid,
  IsAny,
  IsUnknownOrNonInferrable
} from './utils/tsHelpers.js'

export type _ActionCreatorWithPreparedPayload<
  PA extends PrepareAction<any> | void,
  T extends string = string
> =
  PA extends PrepareAction<infer P>
    ? ActionCreatorWithPreparedPayload<
        Parameters<PA>,
        P,
        T,
        ReturnType<PA> extends {
          error: infer E
        }
          ? E
          : never,
        ReturnType<PA> extends {
          meta: infer M
        }
          ? M
          : never
      >
    : void
export interface ActionCreatorWithNonInferrablePayload<
  T extends string = string
> extends BaseActionCreator<unknown, T> {
  <PT>(payload: PT): PayloadAction<T, PT>
}
export interface ActionCreatorWithOptionalPayload<P, T extends string = string>
  extends BaseActionCreator<P, T> {
  (payload?: P): PayloadAction<T, P>
}
export interface ActionCreatorWithoutPayload<T extends string = string>
  extends BaseActionCreator<undefined, T> {
  (): PayloadAction<T, undefined>
}
export interface ActionCreatorWithPayload<P, T extends string = string>
  extends BaseActionCreator<P, T> {
  (payload: P): PayloadAction<T, P>
}
export interface ActionCreatorWithPreparedPayload<
  Args extends unknown[],
  P,
  T extends string = string,
  E = never,
  M = never
> extends BaseActionCreator<P, T, M, E> {
  /**
   * Calling this {@link redux#ActionCreator} with `Args` will return
   * an Action with a payload of type `P` and (depending on the `PrepareAction`
   * method used) a `meta`- and `error` property of types `M` and `E` respectively.
   */
  (...args: Args): PayloadAction<T, P, M, E>
}
export type ActionPayload<P = any> = {
  payload: P
}

export interface BaseActionCreator<P, T extends string, M = never, E = never> {
  type: T
  match: (
    action: PayloadAction<string, unknown>
  ) => action is PayloadAction<T, P, M, E>
}

export type ContextProviderProps<S, A = any> = Pick<
  ProviderProps<S, A>,
  'initialState' | 'derivedStateFromProps' | 'children'
>

export type ContextStore<S> = S & { error?: ContextStoreError }

export type ContextStoreActionCallback<S> = (state: S) => S

export type ContextStoreError = unknown | string

export type ContextStoreInitializer<A = any, S = A> = (
  arg?: A,
  edit?: boolean
) => S
export type DispatchMaybeWithAction<A = any> = (value?: A) => void

export type PayloadAction<
  T extends string = string,
  P = any,
  M = never,
  E = never
> = {
  type: T
  payload: P
} & ([M] extends [never]
  ? {}
  : {
      meta: M
    }) &
  ([E] extends [never]
    ? {}
    : {
        error: E
      })

export type PayloadActionCreator<P = void, T extends string = string> = IsAny<
  P,
  ActionCreatorWithPayload<any, T>,
  IsUnknownOrNonInferrable<
    P,
    ActionCreatorWithNonInferrablePayload<T>,
    // else
    IfVoid<
      P,
      ActionCreatorWithPayload<P, T>,
      // else
      IfMaybeUndefined<
        P,
        ActionCreatorWithOptionalPayload<P, T>,
        // else
        ActionCreatorWithPayload<P, T>
      >
    >
  >
>

export type PayloadActionType<
  T extends string = string,
  M = never,
  E = never
> = {
  type: T
} & ([M] extends [never]
  ? {}
  : {
      meta: M
    }) &
  ([E] extends [never]
    ? {}
    : {
        error: E
      })

export type PrepareAction<P> =
  | ((...args: any[]) => { payload: P })
  | ((...args: any[]) => { payload: P; meta: any })
  | ((...args: any[]) => { payload: P; error: any })
  | ((...args: any[]) => { payload: P; meta: any; error: any })

export type ReducerMaybeWithAction<S, A = DispatchMaybeWithAction> = (
  state: S,
  action?: A
) => S

export type ReducerStateMaybeWithAction<
  R extends ReducerMaybeWithAction<any>,
  A = DispatchMaybeWithAction
> = R extends ReducerMaybeWithAction<infer S, A> ? S : never

type ThunkFunctionWithParam<Param = void, S = any, A = any> = (
  param: Param
) => Thunk<A, S>

type ThunkFunctionWithOptionalPayload<Param = void, S = any, A = any> = (
  param?: Param
) => Thunk<A, S>

export type Thunk<A, S, P = void> = (
  dispatch: Dispatch<A>,
  getState: () => MutableRefObject<S>['current'],
  getRouter: () => NextRouterAugmented
) => PayloadActionCreator | Promise<P> | Promise<void> | P
export type ThunkAction<
  S extends Reducer<any, any>,
  D extends Reducer<any, any> = any
> = ((...args: any[]) => PayloadAction) | Thunk<any, S, D>

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
>
