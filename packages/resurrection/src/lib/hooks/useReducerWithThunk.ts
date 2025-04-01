'use client';

import { isFunction } from '@hack-network/utils';
import {
  Dispatch,
  Reducer,
  ReducerState,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import useEffectAfterMount from './useEffectAfterMount';
import useRouterParams from './useRouterParams';
import { NextRouterAugmented, ThunkAction } from '../types';
import defaultInitializer from '../utils/defaultInitializer';
import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';
import getReducerDefaultState from '../utils/getReducerDefaultState';

import useLazyMemo from './useLazyMemo';
import usePropsThatChanged from './usePropsThatChanged';
import useSetStateReducer from './useSetStateReducer';

/**
 * Augments React's useReducer() hook
 * so that the action dispatcher supports thunks.
 */
const useReducerWithThunk = <R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R> = getReducerDefaultState(reducer as any),
  derivedStateFromProps?: (
    nextProps: any,
    prevState: ReducerState<R>
  ) => Partial<ReducerState<R>> | null,
  init?: (initial: ReducerState<R>) => ReducerState<R>
): [ReducerState<R>, Dispatch<any>] => {
  const [state, dispatch] = useRef<[ReducerState<R>, Dispatch<any>]>([
    init ? init(initialState) : initialState,
    () => {
      throw new Error('Dispatch function not initialized');
    },
  ]).current;

  const router = useRouterParams();

  const getState = useCallback(() => state, [state]);

  const thunkDispatch = useCallback(
    (action: any) => {
      if (isFunction(action)) {
        return (action as ThunkAction)(dispatch, getState, router);
      }

      return dispatch(action);
    },
    [dispatch, getState, router]
  );

  if (derivedStateFromProps) {
    useEffectAfterMount(() => {
      const derivedState = derivedStateFromProps(state, state);
      if (derivedState && Object.keys(derivedState).length > 0) {
        thunkDispatch({ type: 'SET_STATE', payload: derivedState });
      }
    }, [state]);
  }

  return [state, thunkDispatch];
};

export default useReducerWithThunk;
