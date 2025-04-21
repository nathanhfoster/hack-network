import { isFunction } from '../utils';
import useReducerWithThunk from '../hooks/useReducerWithThunk';
import setStateReducer from '../reducers/setStateReducer';
import defaultInitializer from '../utils/defaultInitializer';
import type { ProviderProps } from './types';
import { useMemo } from 'react';

const Provider = <
  S extends Record<string, any>,
  I extends Record<string, any> = S,
>({
  StateContext,
  reducer = setStateReducer,
  derivedStateFromProps,
  //@ts-expect-error - _currentValue is an internal property of Context
  initialState = derivedStateFromProps ?? StateContext?._currentValue,
  initializer = defaultInitializer,
  DispatchContext,
  children,
}: ProviderProps<S, I>) => {
  const [state, dispatch] = useReducerWithThunk<S, I>(
    reducer,
    initialState,
    initializer,
    derivedStateFromProps as Partial<S>,
  );

  const renderChildren = useMemo(() => {
    if (isFunction(children)) {
      return children({ state, dispatch });
    }

    return children;
  }, [children, state, dispatch]);

  if (!StateContext) {
    return renderChildren;
  }

  const StateContextProvider = (
    <StateContext.Provider value={state}>
      {renderChildren}
    </StateContext.Provider>
  );

  if (!DispatchContext) {
    return StateContextProvider;
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      {StateContextProvider}
    </DispatchContext.Provider>
  );
};

export default Provider;
