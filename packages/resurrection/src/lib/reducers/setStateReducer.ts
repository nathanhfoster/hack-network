import { isFunction } from '../utils';

/**
 * A generic reducer that augments the useReducer hook
 * to return the state if the options is a callback
 * @param {ReducerState} state
 * @param {ReducerAction | GetStateCallback} options
 * @returns
 */
const setStateReducer = <S extends object>(state: S | undefined, action: any) =>
  (isFunction(action) ? action(state) : action) as S;

export default setStateReducer;
