import { Draft } from 'immer';

import {
  ActionCreatorWithoutPayload,
  PayloadAction,
  PayloadActionCreator,
  Thunk,
  ThunkFunction,
} from '../types.js';

import {
  ActionsUnionType,
  IsUnknownOrNonInferrable,
  NoInfer,
} from './tsHelpers.js';

export type ActionTypeName<
  SliceName extends string,
  ActionName extends keyof any,
> = ActionName extends string | number ? `${SliceName}/${ActionName}` : string;

type SliceReducer<S = any, P = any> = (
  state: Draft<S>,
  payload?: P,
) => NoInfer<S> | void | Draft<NoInfer<S>>;

export type CreateReducerActions<S extends InitialReducerState> = Record<
  string,
  SliceReducer<S>
>;

export interface CreateReducerProps<
  MS extends InitialReducerState,
  MA extends CreateReducerActions<any>,
  MT extends ThunkActions<any, any>,
  N extends string,
  S extends InitialReducerState,
  A extends CreateReducerActions<S & MS>,
> {
  name: N;
  initialState: S;
  actions?: A;
  extends?: {
    module: {
      actions: MA;
      getThunks?: (actions: ReducerActionCreators<A & MA, any>) => MT;
      initialState: MS;
    };
  };
}

export type InitialReducerState = Record<string, any>;

type ActionCreatorForReducer<
  ActionFunction,
  Type extends string,
> = ActionFunction extends (state: any, payload: infer Payload) => any
  ? IsUnknownOrNonInferrable<
      Payload,
      ActionCreatorWithoutPayload<Type>,
      PayloadActionCreator<Payload, Type>
    >
  : ActionCreatorWithoutPayload<Type>;

export type ReducerActionCreators<
  Actions extends SliceReducers<any>,
  SliceName extends string,
> = {
  [Type in keyof Actions]: ActionCreatorForReducer<
    Actions[Type],
    ActionTypeName<SliceName, Type>
  >;
};

export type SliceReducers<State> = {
  [K: string]: SliceReducer<State, PayloadAction>;
};

export interface ThunkActions<
  S extends InitialReducerState,
  A extends ReducerActionCreators<any, any>,
> {
  [key: string]: ThunkFunction<any, S, ActionsUnionType<A> | Thunk<any, S>>;
}

export interface ThunkActionsHelper<S extends InitialReducerState> {
  [key: string]: ThunkFunction<any, S, Thunk<any, S>>;
}
