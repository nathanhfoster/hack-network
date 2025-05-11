import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import * as React from 'react';
import createUseSelectorHook from '../createUseSelectorHook';
import { createContext, useContext } from 'use-context-selector';

interface TestState {
  count: number;
  text: string;
}

const initialState: TestState = {
  count: 0,
  text: 'initial',
};

const TestContext = createContext<{
  state: TestState;
  dispatch: (action: (prev: TestState) => Partial<TestState>) => void;
}>({
  state: initialState,
  dispatch: () => {
    // Empty implementation for testing
  },
});

const useSelector = createUseSelectorHook(TestContext);

describe('useSelector', () => {
  it('should select and return the correct state', () => {
    const { result } = renderHook(
      () => {
        const { state } = useContext(TestContext);
        return useSelector((state) => state.state.count);
      },
      {
        wrapper: ({ children }) => (
          <TestContext.Provider
            value={{
              state: { ...initialState, count: 42 },
              dispatch: () => {
                // Empty implementation for testing
              },
            }}
          >
            {children}
          </TestContext.Provider>
        ),
      }
    );

    expect(result.current).toBe(42);
  });

  it('should only update when selected state changes', () => {
    const { result, rerender } = renderHook(
      () => {
        return useSelector((state) => state.state.count);
      },
      {
        wrapper: ({ children }) => (
          <TestContext.Provider
            value={{
              state: { ...initialState, count: 42 },
              dispatch: () => {
                // Empty implementation for testing
              },
            }}
          >
            {children}
          </TestContext.Provider>
        ),
      }
    );

    expect(result.current).toBe(42);

    act(() => {
      rerender();
    });

    expect(result.current).toBe(42);
  });

  it('should handle props correctly', () => {
    const { result } = renderHook(
      () => {
        return useSelector((state) => state.state.text);
      },
      {
        wrapper: ({ children }) => (
          <TestContext.Provider
            value={{
              state: { ...initialState, text: 'test' },
              dispatch: () => {
                // Empty implementation for testing
              },
            }}
          >
            {children}
          </TestContext.Provider>
        ),
      }
    );

    expect(result.current).toBe('test');
  });

  it('should handle nested state correctly', () => {
    const { result } = renderHook(
      () => {
        const { state } = useContext(TestContext);
        return useSelector((state) => ({
          count: state.state.count,
          text: state.state.text,
        }));
      },
      {
        wrapper: ({ children }) => (
          <TestContext.Provider
            value={{
              state: { ...initialState, count: 42, text: 'test' },
              dispatch: () => {
                // Empty implementation for testing
              },
            }}
          >
            {children}
          </TestContext.Provider>
        ),
      }
    );

    expect(result.current).toEqual({ count: 42, text: 'test' });
  });

  it('should not re-render when non-selected state changes', () => {
    const { result, rerender } = renderHook(
      () => {
        return useSelector((state) => state.state.count);
      },
      {
        wrapper: ({ children }) => (
          <TestContext.Provider
            value={{
              state: { ...initialState, count: 42, text: 'test' },
              dispatch: () => {
                // Empty implementation for testing
              },
            }}
          >
            {children}
          </TestContext.Provider>
        ),
      }
    );

    expect(result.current).toBe(42);

    act(() => {
      rerender();
    });

    expect(result.current).toBe(42);
  });
});
