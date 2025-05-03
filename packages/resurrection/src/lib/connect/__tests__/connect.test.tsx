import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import connect from '../index';
import createContextWithName from '../../utils/createContextWithName';
import Provider from '../../Provider';
import type {
  ComponentPropsType,
  MergePropsReturnType,
  ConnectHookProps,
  ConnectOptionUseEffectAfterChangeReturn,
} from '../types';
import { createSlice } from '../../utils';

// Test context and reducer
type CounterState = { count: number };

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  actions: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const counterActions = counterSlice.actions;

const { StateContext, DispatchContext } = createContextWithName<
  CounterState,
  any
>('Counter', { count: 0 });

type CounterActions = typeof counterActions;

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
    const ConnectedComponent = connect<
      Pick<CounterState, 'count'>,
      {},
      {
        ownProp: string;
      }
    >({
      mapStateToPropsOptions: [
        {
          context: StateContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
    })(TestComponent);

    render(
      <Provider
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        reducer={counterSlice.reducer}
        initialState={{ count: 0 }}
      >
        <ConnectedComponent ownProp="test" />
      </Provider>,
    );

    expect(screen.getByTestId('count')).toHaveTextContent('0');
    expect(screen.getByTestId('own-prop')).toHaveTextContent('test');
  });

  it('should map dispatch to props', () => {
    const ConnectedComponent = connect<
      Pick<CounterState, 'count'>,
      {
        increment: CounterActions['increment'];
        decrement: CounterActions['decrement'];
      }
    >({
      mapStateToPropsOptions: [
        {
          context: StateContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      mapDispatchToPropsOptions: [
        {
          context: DispatchContext,
          mapDispatchToProps: {
            increment: counterActions.increment,
            decrement: counterActions.decrement,
          },
        },
      ],
    })(TestComponent);

    render(
      <Provider
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        reducer={counterSlice.reducer}
        initialState={{ count: 0 }}
      >
        <ConnectedComponent />
      </Provider>,
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
          context: StateContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      pure: true,
    })(PureTestComponent);

    const { rerender } = render(
      <Provider
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        reducer={counterSlice.reducer}
        initialState={{ count: 0 }}
      >
        <ConnectedComponent />
      </Provider>,
    );

    const initialRenders = renderSpy.mock.calls.length;

    // Rerender with same props
    rerender(
      <Provider
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        reducer={counterSlice.reducer}
        initialState={{ count: 0 }}
      >
        <ConnectedComponent />
      </Provider>,
    );

    // Should not re-render due to pure optimization
    expect(renderSpy.mock.calls.length).toBe(initialRenders);
  });

  it('should support ref forwarding', () => {
    const ref = React.createRef<HTMLDivElement>();
    const ConnectedComponent = connect<
      Pick<CounterState, 'count'>,
      {},
      { ref?: React.Ref<HTMLDivElement> }
    >({
      mapStateToPropsOptions: [
        {
          context: StateContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      forwardRef: true,
    })(TestComponent);

    render(
      <Provider
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        reducer={counterSlice.reducer}
        initialState={{ count: 0 }}
      >
        <ConnectedComponent ref={ref} />
      </Provider>,
    );

    expect(ref.current).toBeTruthy();
  });

  it('should support custom mergeProps', () => {
    const ConnectedComponent = connect({
      mapStateToPropsOptions: [
        {
          context: StateContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      mapDispatchToPropsOptions: [
        {
          context: DispatchContext,
          mapDispatchToProps: {
            increment: counterActions.increment,
          },
        },
      ],
      mergeProps: <
        MSTP extends ComponentPropsType,
        MDTP extends ComponentPropsType,
        OWNP extends ComponentPropsType,
      >(
        stateToProps: MSTP,
        dispatchToProps: MDTP,
        ownProps: OWNP,
      ): MergePropsReturnType<MSTP, MDTP, OWNP> => {
        const typedStateToProps = stateToProps as unknown as { count: number };
        return {
          ...stateToProps,
          ...dispatchToProps,
          ...ownProps,
          count: typedStateToProps.count * 2,
        };
      },
    })(TestComponent);

    render(
      <Provider
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        reducer={counterSlice.reducer}
        initialState={{ count: 0 }}
      >
        <ConnectedComponent />
      </Provider>,
    );

    expect(screen.getByTestId('count')).toHaveTextContent('0'); // 0 * 2
  });

  it('should support useHookDataFetchingOnce', async () => {
    const dataFetchSpy = vi.fn();
    const ConnectedComponent = connect({
      mapStateToPropsOptions: [
        {
          context: StateContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      useHookDataFetchingOnce: async () => {
        dataFetchSpy();
      },
    })(TestComponent);

    render(
      <Provider
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        reducer={counterSlice.reducer}
        initialState={{ count: 0 }}
      >
        <ConnectedComponent />
      </Provider>,
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
          context: StateContext,
          mapStateToProps: (state) => ({ count: state.count }),
        },
      ],
      mapDispatchToPropsOptions: [
        {
          context: DispatchContext,
          mapDispatchToProps: {
            increment: counterActions.increment,
          },
        },
      ],
      useHookEffectAfterChange: <T extends unknown>(
        props: ConnectHookProps<any, any, any>,
      ): ConnectOptionUseEffectAfterChangeReturn<T> => [
        props.stateToProps.count as unknown as T,
        () => {
          effectSpy();
        },
        () => true,
        0,
      ],
    })(TestComponent);

    const { rerender } = render(
      <Provider
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        reducer={counterSlice.reducer}
        initialState={{ count: 0 }}
      >
        <ConnectedComponent />
      </Provider>,
    );

    // Trigger a state change by clicking increment
    fireEvent.click(screen.getByText('Increment'));

    // Rerender to ensure effect runs
    rerender(
      <Provider
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        reducer={counterSlice.reducer}
        initialState={{ count: 0 }}
      >
        <ConnectedComponent />
      </Provider>,
    );

    // Wait for the effect to run
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(effectSpy).toHaveBeenCalled();
  });
});
