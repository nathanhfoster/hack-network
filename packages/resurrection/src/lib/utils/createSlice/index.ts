import { produce, setAutoFreeze, Draft } from 'immer';
import { SetStateAction, Reducer } from 'react';
import isFunction from '../isFunction';

import { PayloadAction } from '../../types';

import {
  CreateSliceActions,
  CreateSliceProps,
  ReducerActionCreators,
  ThunkActions,
} from './types';
import type { ComponentPropsType } from '../../connect/types';

setAutoFreeze(false);
// enableMapSet(); use this if you need to use Map and Set in immer

const createSlice = <
  MS extends ComponentPropsType,
  MA extends CreateSliceActions<MS>,
  MT extends ThunkActions<MS, ReducerActionCreators<MA, string>>,
  N extends string,
  S extends ComponentPropsType,
  A extends CreateSliceActions<S & MS>,
>(
  props: CreateSliceProps<MS, MA, MT, N, S, A>,
) => {
  const actions = Object.keys({
    ...props.actions,
    ...props.extends?.module.actions,
  }).reduce(
    (acc, actionName) => {
      const action =
        props.actions![actionName] ??
        props.extends?.module.actions![actionName];
      if (action) {
        (acc as any)[actionName] = (payload: Parameters<typeof action>[1]) => ({
          type: `${props.name}/${actionName}`,
          payload,
        });
      }
      return acc;
    },
    {} as ReducerActionCreators<A & MA, N>,
  );

  const finalInitialState = {
    ...props.initialState,
    ...props.extends?.module.initialState,
  } as S & MS;

  const reducer: Reducer<
    S & MS,
    | (ReturnType<A[keyof A]> & { type: string })
    | SetStateAction<S & MS>
    | Partial<S & MS>
    | PayloadAction
  > = (state = finalInitialState, action) => {
    // Handle SetStateAction
    if (isFunction(action)) {
      return (action as (prevState: S & MS) => S & MS)(state);
    }

    // Handle Partial state updates
    if (!('type' in action)) {
      return { ...state, ...action };
    }

    const [actionReducerName, actionType] = action.type.split('/');

    const reducerActionFunction =
      props.actions![actionType] ?? props.extends?.module.actions![actionType];

    if (actionReducerName === props.name && reducerActionFunction) {
      return produce(state, (draft: Draft<S & MS>) => {
        const result = reducerActionFunction(
          draft,
          'payload' in action ? action.payload : undefined,
        );
        if (result !== undefined) {
          Object.assign(draft, result);
        }
      });
    }

    return state;
  };

  const addThunks = <TA extends ThunkActions<S & MS, typeof actions>>(
    getThunks: (thunksAction: ReducerActionCreators<A & MA, N>) => TA,
  ) => {
    return {
      initialState: finalInitialState,
      actions: {
        ...actions,
        ...getThunks(actions),
        ...(props.extends?.module.getThunks?.(actions) as MT),
      },
      reducer,
      module: {
        initialState: props.initialState,
        actions: props.actions!,
        getThunks,
      },
    };
  };

  return {
    initialState: finalInitialState,
    actions: {
      ...actions,
      ...props.extends?.module.actions,
      ...(props.extends?.module.getThunks?.(actions) as MT),
    },
    reducer,
    addThunks,
    module: {
      initialState: props.initialState,
      actions: props.actions!,
    },
  };
};

export default createSlice;
