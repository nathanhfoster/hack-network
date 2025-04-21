import { isFunction } from '../utils';

export type SetStateUpdater<S> = (prevState: S) => S;

/**
 * A generic reducer that augments the useReducer hook
 * to return the state if the options is a callback
 * @param {ReducerState} prevState
 * @param {ReducerAction | GetStateCallback} options
 * @returns
 */
const setStateReducer = <S extends object>(
  prevState: S,
  action: S | SetStateUpdater<S>,
) => (isFunction(action) ? action(prevState) : action) as S;

export default setStateReducer;
