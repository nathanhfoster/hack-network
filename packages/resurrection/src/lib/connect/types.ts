import {
  FC,
  ForwardRefExoticComponent,
  NamedExoticComponent,
  RefAttributes,
  Dispatch,
} from 'react';
import type { Context } from 'use-context-selector';

import { LoosePartial, ActionCreatorWithPayload, PayloadActionCreator, Thunk } from '../types';

export type ComponentPropsType<T extends Record<string, any> = Record<string, any>> = T;

export type ConnectedComponent<P extends ComponentPropsType> =
  | ForwardRefExoticComponent<RefAttributes<HTMLElement>>
  | FC<
      P & {
        forwardedRef?: React.Ref<HTMLElement>;
      }
    >
  | NamedExoticComponent<
      P & {
        forwardedRef?: React.Ref<HTMLElement>;
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
      ownProps: OWNP
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
            | ((...args: unknown[]) => unknown)
          >
        >
      | ((
          dispatch: Dispatch<any>,
          ownProps: OWNP
        ) => LoosePartial<Record<keyof MDTP, (...args: unknown[]) => unknown>>);
  }>;
  pure?: boolean;
  forwardRef?: boolean;
  mergeProps?: <
    MSTP extends ComponentPropsType,
    MDTP extends ComponentPropsType,
    OWNP extends ComponentPropsType,
  >(
    stateToProps: MSTP,
    dispatchToProps: MDTP,
    ownProps: OWNP
  ) => MergePropsReturnType<MSTP, MDTP, OWNP>;
  areOwnPropsEqual?: EqualityFunctionType;
  areMergedPropsEqual?: EqualityFunctionType;
  useHookDataFetchingOnce?: <T extends ConnectHookProps<MSTP, MDTP, OWNP>>(
    props: T
  ) => Promise<void> | void;
  useHookEffectAfterChange?: <T = unknown>(
    props: ConnectHookProps<MSTP, MDTP, OWNP>
  ) => ConnectOptionUseEffectAfterChangeReturn<T>;
};

export type ConnectOptionUseEffectAfterChangeReturn<T> = [
  value?: T,
  callback?: (previousValue: T | undefined, value: T) => any,
  condition?: (previousValue: T | undefined, value: T) => boolean,
  throttle?: number,
];

export type EqualityFunctionType<P extends ComponentPropsType = ComponentPropsType> = (
  prevPropsOrState: P,
  nextPropsOrState: P
) => boolean;

export type DispatchType<T> =
  | Thunk<T, unknown>
  | ActionCreatorWithPayload<unknown, string>
  | PayloadActionCreator<unknown, string>;

export type MergePropsReturnType<
  MSTP extends ComponentPropsType,
  MDTP extends ComponentPropsType,
  OWNP extends ComponentPropsType,
> = Partial<MSTP> & Partial<MDTP> & Partial<OWNP>;

export type InferStateFromContext<C> = C extends Context<infer S> ? S : never;
