import { renderHook, act } from '@testing-library/react';
import React, { useState } from 'react';
import createContextWithName from '../createContextWithName';

describe('createContextWithName', () => {
  type TestState = {
    count: number;
    name: string;
  };

  const initialState: TestState = {
    count: 0,
    name: 'initial',
  };

  const { StateContext, useSelector, DispatchContext, useDispatch } =
    createContextWithName<TestState>('Test', initialState);

  const TestProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<TestState>(initialState);

    const dispatch = (action: (prev: TestState) => Partial<TestState>) => {
      setState((prev) => ({ ...prev, ...action(prev) }));
    };

    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch as any}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  };

  it('should create context with correct display names', () => {
    expect(StateContext.displayName).toBe('TestStateContext');
    expect(DispatchContext.displayName).toBe('TestDispatchContext');
  });

  it('should provide initial state through useSelector', () => {
    const { result } = renderHook(() => useSelector((state) => state), {
      wrapper: TestProvider,
    });

    expect(result.current).toEqual(initialState);
  });

  it('should allow state updates through useDispatch', () => {
    const { result: stateResult } = renderHook(
      () => useSelector((state) => state),
      {
        wrapper: TestProvider,
      },
    );

    const { result: dispatchResult } = renderHook(() => useDispatch(), {
      wrapper: TestProvider,
    });

    act(() => {
      dispatchResult.current((prev) => ({ count: 1, name: 'updated' }));
    });

    expect(stateResult.current).toEqual({ count: 1, name: 'updated' });
  });
});
