import React, { createContext, useReducer } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import connect from '../index';

// Test context and reducer
type CounterState = { count: number };
type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const CounterContext = createContext<CounterState>({ count: 0 });
const CounterDispatchContext = createContext<React.Dispatch<CounterAction>>(
  () => {},
);

const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

// Test component
interface TestComponentProps {
  count?: number;
  increment?: () => void;
  decrement?: () => void;
  ownProp?: string;
}

const TestComponent = React.forwardRef<HTMLDivElement, TestComponentProps>(
  ({ count, increment, decrement, ownProp }, ref) => {
    return (
      <div ref={ref}>
        <div data-testid="count">{count}</div>
        <div data-testid="own-prop">{ownProp}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  },
);

TestComponent.displayName = 'TestComponent';

describe('connect HOC', () => {
  it('should connect component to context and map state to props', () => {
    const ConnectedComponent = connect({
      mapStateToPropsOptions: [
        {
          context: CounterContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
    })(TestComponent);

    render(
      <CounterProvider>
        <ConnectedComponent ownProp="test" />
      </CounterProvider>,
    );

    expect(screen.getByTestId('count')).toHaveTextContent('0');
    expect(screen.getByTestId('own-prop')).toHaveTextContent('test');
  });

  it('should map dispatch to props', () => {
    const ConnectedComponent = connect({
      mapStateToPropsOptions: [
        {
          context: CounterContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      mapDispatchToPropsOptions: [
        {
          context: CounterDispatchContext,
          mapDispatchToProps: {
            increment: () => ({ type: 'INCREMENT' }),
            decrement: () => ({ type: 'DECREMENT' }),
          },
        },
      ],
    })(TestComponent);

    render(
      <CounterProvider>
        <ConnectedComponent ownProp="test" />
      </CounterProvider>,
    );

    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');

    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('should support pure component optimization', () => {
    const renderSpy = vi.fn();
    const PureTestComponent: React.FC<TestComponentProps> = (props) => {
      renderSpy();
      return <TestComponent {...props} />;
    };

    const ConnectedComponent = connect({
      mapStateToPropsOptions: [
        {
          context: CounterContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      pure: true,
    })(PureTestComponent);

    const { rerender } = render(
      <CounterProvider>
        <ConnectedComponent ownProp="test" />
      </CounterProvider>,
    );

    const initialRenders = renderSpy.mock.calls.length;

    // Rerender with same props
    rerender(
      <CounterProvider>
        <ConnectedComponent ownProp="test" />
      </CounterProvider>,
    );

    // Should not re-render due to pure optimization
    expect(renderSpy.mock.calls.length).toBe(initialRenders);
  });

  it('should support ref forwarding', () => {
    const ref = React.createRef<HTMLDivElement>();
    const ConnectedComponent = connect({
      mapStateToPropsOptions: [
        {
          context: CounterContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      forwardRef: true,
    })(TestComponent);

    render(
      <CounterProvider>
        <ConnectedComponent ref={ref} ownProp="test" />
      </CounterProvider>,
    );

    expect(ref.current).toBeTruthy();
  });

  it('should support custom mergeProps', () => {
    const ConnectedComponent = connect({
      mapStateToPropsOptions: [
        {
          context: CounterContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      mapDispatchToPropsOptions: [
        {
          context: CounterDispatchContext,
          mapDispatchToProps: {
            increment: () => ({ type: 'INCREMENT' }),
          },
        },
      ],
      mergeProps: (stateProps, dispatchProps, ownProps) => ({
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        count: (stateProps as { count: number }).count * 2, // Custom transformation
      }),
    })(TestComponent);

    render(
      <CounterProvider>
        <ConnectedComponent ownProp="test" />
      </CounterProvider>,
    );

    expect(screen.getByTestId('count')).toHaveTextContent('0'); // 0 * 2
  });

  it('should support useHookDataFetchingOnce', async () => {
    const dataFetchSpy = vi.fn();
    const ConnectedComponent = connect({
      mapStateToPropsOptions: [
        {
          context: CounterContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      useHookDataFetchingOnce: async () => {
        dataFetchSpy();
      },
    })(TestComponent);

    render(
      <CounterProvider>
        <ConnectedComponent ownProp="test" />
      </CounterProvider>,
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(dataFetchSpy).toHaveBeenCalledTimes(1);
  });

  it('should support useHookEffectAfterChange', async () => {
    const effectSpy = vi.fn();
    const ConnectedComponent = connect({
      mapStateToPropsOptions: [
        {
          context: CounterContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      mapDispatchToPropsOptions: [
        {
          context: CounterDispatchContext,
          mapDispatchToProps: {
            increment: () => ({ type: 'INCREMENT' }),
          },
        },
      ],
      useHookEffectAfterChange: () => [
        undefined,
        () => {
          effectSpy();
        },
        () => true,
      ],
    })(TestComponent);

    const { rerender } = render(
      <CounterProvider>
        <ConnectedComponent ownProp="test" />
      </CounterProvider>,
    );

    // Trigger a state change by clicking increment
    fireEvent.click(screen.getByText('Increment'));

    // Rerender to ensure effect runs
    rerender(
      <CounterProvider>
        <ConnectedComponent ownProp="test" />
      </CounterProvider>,
    );

    // Wait for the effect to run
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(effectSpy).toHaveBeenCalled();
  });
});
