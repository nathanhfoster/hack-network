import { useMemo } from 'react';
import { isFunction } from '../utils';
import useReducerWithThunk from '../hooks/useReducerWithThunk';
import setStateReducer from '../reducers/setStateReducer';
import defaultInitializer from '../utils/defaultInitializer';
import type { ProviderProps } from './types';

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
  const [state, dispatch, isPending] = useReducerWithThunk<S, I>(
    reducer,
    initialState,
    initializer,
    derivedStateFromProps as Partial<S>,
  );

  const renderChildren = useMemo(() => {
    if (isFunction(children)) {
      return children({ state, dispatch, isPending });
    }

    return children;
  }, [children, state, dispatch, isPending]);

  if (!StateContext) {
    return renderChildren;
  }

  const StateContextProvider = StateContext.Provider;

  const stateProvider = (
    <StateContextProvider value={state}>{renderChildren}</StateContextProvider>
  );

  if (!DispatchContext) {
    return stateProvider;
  }

  const DispatchContextProvider = DispatchContext.Provider;

  return (
    <DispatchContextProvider value={dispatch}>
      {stateProvider}
    </DispatchContextProvider>
  );
};

export default Provider;
