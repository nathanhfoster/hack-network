import { isFunction } from '../utils';

export type SetStateUpdater<S> = (state: S) => S;

/**
 * A generic reducer that augments the useReducer hook
 * to return the state if the options is a callback
 * @param {ReducerState} state
 * @param {ReducerAction | GetStateCallback} options
 * @returns
 */
const setStateReducer = <S extends object>(
  state: S,
  action: S | SetStateUpdater<S>,
) => (isFunction(action) ? action(state) : action) as S;

export default setStateReducer;
