import { Draft } from 'immer';

import {
  ActionCreatorWithoutPayload,
  PayloadAction,
  PayloadActionCreator,
  Thunk,
  ThunkFunction,
} from '../../types';

import {
  ActionsUnionType,
  IsUnknownOrNonInferrable,
  NoInfer,
} from '../tsHelpers';
import type { ComponentPropsType } from '../../connect/types';

export type ActionTypeName<
  SliceName extends string,
  ActionName extends keyof any,
> = ActionName extends string | number ? `${SliceName}/${ActionName}` : string;

type SliceReducer<S = any, P = any> = (
  state: Draft<S>,
  payload?: P,
) => NoInfer<S> | void | Draft<NoInfer<S>>;

export type CreateSliceActions<S extends ComponentPropsType> = {
  [K: string]: SliceReducer<S, any>;
};

export interface CreateSliceProps<
  MS extends ComponentPropsType,
  MA extends CreateSliceActions<MS>,
  MT extends ThunkActions<MS, ReducerActionCreators<MA, string>>,
  N extends string,
  S extends ComponentPropsType,
  A extends CreateSliceActions<S & MS>,
> {
  name: N;
  initialState: S;
  actions?: A;
  extends?: {
    module: {
      actions: MA;
      getThunks?: (actions: ReducerActionCreators<A & MA, N>) => MT;
      initialState: MS;
    };
  };
}

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
  S extends ComponentPropsType,
  A extends ReducerActionCreators<any, any>,
> {
  [key: string]: ThunkFunction<any, S, ActionsUnionType<A> | Thunk<any, S>>;
}

export interface ThunkActionsHelper<S extends ComponentPropsType> {
  [key: string]: ThunkFunction<any, S, Thunk<any, S>>;
}
