import { Dispatch, ReactNode } from 'react';
import { Context } from 'use-context-selector';
import {
  ContextStoreInitializer,
  Thunk,
  ActionCreatorWithPayload,
  PayloadActionCreator,
} from '../types';
import { ReducerActionCreators } from '../utils/createSlice/types';

export type ProviderProps<
  S extends object,
  I extends object = S,
  A extends ReducerActionCreators<any, string> = any,
> = {
  StateContext?: Context<S>;
  reducer?: (state: S, action: ReturnType<A[keyof A]>) => S;
  initialState?: I extends S ? S : I;
  initializer?: ContextStoreInitializer<S, I>;
  derivedStateFromProps?: Partial<S>;
  DispatchContext?: Context<
    Dispatch<
      | Thunk<A, S>
      | ActionCreatorWithPayload<any, string>
      | PayloadActionCreator<any, string>
    >
  >;
  children: ReactNode | ((state: S) => ReactNode);
};
