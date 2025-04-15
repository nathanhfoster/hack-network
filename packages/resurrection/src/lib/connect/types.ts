import {
  FC,
  ForwardRefExoticComponent,
  NamedExoticComponent,
  RefAttributes,
} from 'react';
import type { Context } from 'use-context-selector';

import {
  LoosePartial,
  ActionCreatorWithPayload,
  PayloadActionCreator,
  ContextStore,
  Thunk,
} from '../types';
import { ReducerActionCreators } from '../utils/createSlice/types';

export type ComponentPropsType<T extends object = object> = T;

export type ConnectedComponent<P extends ComponentPropsType> =
  | ForwardRefExoticComponent<RefAttributes<unknown>>
  | FC<
      P & {
        forwardedRef?: any;
      }
    >
  | NamedExoticComponent<
      P & {
        forwardedRef?: any;
      }
    >;

export type ConnectedComponentProps<
  MSTP extends ComponentPropsType,
  MDTP extends ComponentPropsType = ComponentPropsType,
  OWNP extends ComponentPropsType = ComponentPropsType,
> = MSTP & MDTP & OWNP;

export type ConnectHookProps<
  MSTP extends ComponentPropsType,
  MDTP extends ComponentPropsType,
  OWNP extends ComponentPropsType,
> = {
  stateToProps: MSTP;
  dispatchToProps: MDTP;
  ownProps: OWNP;
  mergedProps: MergePropsReturnType<MSTP, MDTP, OWNP>;
};

export type ConnectOptions<
  MSTP extends ComponentPropsType,
  MDTP extends ComponentPropsType,
  OWNP extends ComponentPropsType,
  S extends ContextStore<any>[] = [],
  A extends (
    | Thunk<any, any>
    | ActionCreatorWithPayload<any, string>
    | PayloadActionCreator<any, string>
    | ReducerActionCreators<any, string>
  )[] = [],
> = {
  mapStateToPropsOptions?: MapStateToPropsItem<MSTP, S[number], OWNP>[];
  mapDispatchToPropsOptions?: MapDispatchToPropsArrayItem<
    MDTP,
    A[number],
    OWNP
  >[];
  pure?: boolean;
  forwardRef?: boolean;
  mergeProps?: MergePropsType<MSTP, MDTP, OWNP>;
  areOwnPropsEqual?: EqualityFunctionType;
  areMergedPropsEqual?: EqualityFunctionType;
  useHookDataFetchingOnce?: (
    props: ConnectHookProps<MSTP, MDTP, OWNP>,
  ) => Promise<void> | void;
  useHookEffectAfterChange?: <T = any>(
    props: ConnectHookProps<MSTP, MDTP, OWNP>,
  ) => ConnectOptionUseEffectAfterChangeReturn<T>;
};

export type ConnectOptionUseEffectAfterChangeReturn<T = any> = [
  value?: T,
  callback?: (previousValue: T, value: T) => any,
  condition?: (previousValue: T, value: T) => boolean,
  throttle?: number,
];

export type EqualityFunctionType<
  P extends ComponentPropsType = ComponentPropsType,
> = (prevPropsOrState: P, nextPropsOrState: P) => boolean;

export type DispatchType<T> =
  | Thunk<T, any>
  | ActionCreatorWithPayload<any, string>
  | PayloadActionCreator<any, string>;

export type MapDispatchToPropsArrayItem<
  MDTP extends ComponentPropsType,
  T extends ComponentPropsType,
  P extends ComponentPropsType,
> = {
  context: Context<React.Dispatch<T>>;
  mapDispatchToProps:
    | LoosePartial<
        Record<
          keyof MDTP,
          | ActionCreatorWithPayload<any, string>
          | PayloadActionCreator<any, string>
          | ((...args: any[]) => any)
        >
      >
    | ((
        dispatch: React.Dispatch<DispatchType<T>>,
        ownProps: P,
      ) => LoosePartial<Record<keyof MDTP, (...args: any[]) => any>>);
};

export type MapStateToPropsCallback<
  MSTP extends ComponentPropsType,
  S extends ComponentPropsType,
  OWNP extends ComponentPropsType,
> = (state: S, ownProps: OWNP) => LoosePartial<MSTP>;

export type MapStateToPropsItem<
  MSTP extends ComponentPropsType,
  S extends ComponentPropsType,
  OWNP extends ComponentPropsType,
> = {
  context: Context<S>;
  mapStateToProps: MapStateToPropsCallback<MSTP, S, OWNP>;
};

export type MergePropsReturnType<
  MSTP extends ComponentPropsType,
  MDTP extends ComponentPropsType,
  OWNP extends ComponentPropsType,
> = Partial<MSTP> & Partial<MDTP> & Partial<OWNP>;

export type MergePropsType<
  MSTP extends ComponentPropsType,
  MDTP extends ComponentPropsType,
  OWNP extends ComponentPropsType,
> = (
  stateToProps: ComponentPropsType,
  dispatchToProps: MDTP,
  ownProps: OWNP,
) => MergePropsReturnType<MSTP, MDTP, OWNP>;

export type InferStateFromContext<C> = C extends Context<infer S> ? S : never;
