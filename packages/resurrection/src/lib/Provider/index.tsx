import { Reducer } from 'react';
import { isFunction } from '../utils';
import useReducerWithThunk from '../hooks/useReducerWithThunk';
import setStateReducer from '../reducers/setStateReducer';
import defaultInitializer from '../utils/defaultInitializer';
import type { ProviderProps } from './types';

const Provider = <S extends object, A = any>({
  StateContext,
  reducer = setStateReducer as Reducer<S, A>,
  derivedStateFromProps,
  //@ts-expect-error - _currentValue is an internal property of Context
  initialState = derivedStateFromProps ?? StateContext?._currentValue,
  initializer = defaultInitializer,
  DispatchContext,
  children,
}: ProviderProps<S, A>): React.ReactElement => {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    initializer,
    derivedStateFromProps,
  );

  const StateContextProvider = (
    <StateContext.Provider value={state}>
      {isFunction(children) ? children(state) : children}
    </StateContext.Provider>
  );

  if (!DispatchContext) {
    return StateContextProvider;
  }

  return (
    <DispatchContext.Provider value={dispatch as A}>
      {StateContextProvider}
    </DispatchContext.Provider>
  );
};

export default Provider;
