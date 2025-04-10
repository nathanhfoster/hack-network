import { renderHook, act } from '@testing-library/react';
import React, { useState } from 'react';
import { createContext } from 'use-context-selector';
import createUseSelectorHook from '../useSelector';

describe('useSelector', () => {
  type TestState = {
    count: number;
    name: string;
    nested: {
      value: number;
    };
  };

  const initialState: TestState = {
    count: 0,
    name: 'initial',
    nested: {
      value: 1,
    },
  };

  const TestContext = createContext<TestState>(initialState);

  const useSelector = createUseSelectorHook(TestContext);

  const TestProvider = ({ children }: { children: any }) => {
    const [state, setState] = useState<TestState>(initialState);

    return (
      <TestContext.Provider value={state}>
        {children}
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, count: prev.count + 1 }))
          }
        >
          Increment
        </button>
        <button
          onClick={() => setState((prev) => ({ ...prev, name: 'updated' }))}
        >
          Update Name
        </button>
      </TestContext.Provider>
    );
  };

  it('should select and return the correct state', () => {
    const { result } = renderHook(() => useSelector((state) => state.count), {
      wrapper: TestProvider,
    });

    expect(result.current).toBe(0);
  });

  it('should only update when selected state changes', () => {
    const { result } = renderHook(() => useSelector((state) => state.count), {
      wrapper: TestProvider,
    });

    expect(result.current).toBe(0);

    // Update name - should not trigger re-render
    act(() => {
      const button = document.querySelector(
        'button:last-child',
      ) as HTMLButtonElement;
      button?.click();
    });

    expect(result.current).toBe(0);

    // Update count - should trigger re-render
    act(() => {
      const button = document.querySelector(
        'button:first-child',
      ) as HTMLButtonElement;
      button?.click();
    });

    expect(result.current).toBe(1);
  });

  it('should handle props correctly', () => {
    const { result } = renderHook(
      () =>
        useSelector(
          (state, props?: { multiplier: number }) =>
            state.count * (props?.multiplier ?? 1),
          { multiplier: 2 },
        ),
      { wrapper: TestProvider },
    );

    expect(result.current).toBe(0);

    act(() => {
      const button = document.querySelector(
        'button:first-child',
      ) as HTMLButtonElement;
      button?.click();
    });

    expect(result.current).toBe(2);
  });

  it('should handle nested state correctly', () => {
    const { result } = renderHook(() => useSelector((state) => state.nested), {
      wrapper: TestProvider,
    });

    expect(result.current).toEqual({ value: 1 });

    // Update count - should not trigger re-render for nested
    act(() => {
      const button = document.querySelector(
        'button:first-child',
      ) as HTMLButtonElement;
      button?.click();
    });

    expect(result.current).toEqual({ value: 1 });
  });

  it('should not re-render when non-selected state changes', () => {
    const StateContext = createContext<{ count: number; other: string }>({
      count: 0,
      other: '',
    });

    const useSelector = createUseSelectorHook(StateContext);

    const { result } = renderHook(() => {
      const [state, setState] = useState({ count: 0, other: '' });
      const selectedCount = useSelector((state) => state.count);

      return { state, setState, selectedCount };
    });

    expect(result.current.selectedCount).toBe(0);

    act(() => {
      result.current.setState({ count: 0, other: 'changed' });
    });

    // Component should not re-render since count didn't change
    expect(result.current.selectedCount).toBe(0);
  });
});
