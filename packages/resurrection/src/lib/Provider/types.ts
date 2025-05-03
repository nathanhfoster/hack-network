import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { Context } from 'use-context-selector';
import type {
  ContextStoreInitializer,
  Thunk,
  ActionCreatorWithPayload,
  PayloadActionCreator,
  PayloadAction,
} from '../types';
import type { ReducerActionCreators } from '../utils/createSlice/types';

export type ProviderProps<
  S extends object,
  I extends object = S,
  A extends ReducerActionCreators<any, string> = any,
> = {
  StateContext?: Context<S>;
  reducer?: (
    state: S,
    action:
      | ReturnType<A[keyof A]>
      | Thunk<A, S>
      | SetStateAction<S>
      | Partial<S>,
  ) => S;
  initialState?: I extends S ? S : I;
  initializer?: ContextStoreInitializer<S, I>;
  derivedStateFromProps?: Partial<S>;
  DispatchContext?: Context<
    Dispatch<
      | PayloadAction<string, any>
      | Thunk<A, S>
      | ActionCreatorWithPayload<any, string>
      | PayloadActionCreator<any, string>
      | SetStateAction<S>
      | Partial<S>
    >
  >;
  children:
    | ReactNode
    | ((state: {
        state: S;
        dispatch: Dispatch<A>;
        isPending: boolean;
      }) => ReactNode);
};
