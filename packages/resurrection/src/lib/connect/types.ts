import {
  FC,
  ForwardRefExoticComponent,
  NamedExoticComponent,
  RefAttributes,
  Dispatch,
} from 'react';
import type { Context } from 'use-context-selector';

import {
  LoosePartial,
  ActionCreatorWithPayload,
  PayloadActionCreator,
  Thunk,
} from '../types';

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
> = {
  mapStateToPropsOptions?: {
    context: Context<any>;
    mapStateToProps: <C extends Context<any>>(
      state: InferStateFromContext<C>,
      ownProps: OWNP,
    ) => LoosePartial<MSTP>;
  }[];
  mapDispatchToPropsOptions?: Array<{
    context: Context<Dispatch<any>>;
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
          dispatch: Dispatch<any>,
          ownProps: OWNP,
        ) => LoosePartial<Record<keyof MDTP, (...args: any[]) => any>>);
  }>;
  pure?: boolean;
  forwardRef?: boolean;
  mergeProps?: (
    stateToProps: ComponentPropsType,
    dispatchToProps: MDTP,
    ownProps: OWNP,
  ) => MergePropsReturnType<MSTP, MDTP, OWNP>;
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

export type MergePropsReturnType<
  MSTP extends ComponentPropsType,
  MDTP extends ComponentPropsType,
  OWNP extends ComponentPropsType,
> = Partial<MSTP> & Partial<MDTP> & Partial<OWNP>;

export type InferStateFromContext<C> = C extends Context<infer S> ? S : never;
