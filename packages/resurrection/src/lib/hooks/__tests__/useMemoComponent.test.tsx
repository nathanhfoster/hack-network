import { renderHook, act } from '@testing-library/react';
import { useRef, forwardRef, RefAttributes } from 'react';
import useMemoComponent from '../useMemoComponent';
import shallowEquals from '../../utils/shallowEquals';

const TestComponent = forwardRef<HTMLDivElement, { value: number }>(
  ({ value }, ref) => <div ref={ref}>{value}</div>,
);

describe('useMemoComponent', () => {
  it('should render component with initial props', () => {
    const { result } = renderHook(() => {
      const ref = useRef<
        ({ value: number } & RefAttributes<HTMLDivElement>) | null
      >(null);
      return {
        element: useMemoComponent({
          Component: TestComponent,
          props: { value: 1 },
          ref,
          isEqual: undefined,
        }),
        ref,
      };
    });

    // Check that the element is rendered with the correct props
    expect(result.current.element?.props.value).toBe(1);
    expect(result.current.element?.type).toBe(TestComponent);
  });

  it('should not re-render when props are equal', () => {
    const { result, rerender } = renderHook(
      ({ props }) => {
        const ref = useRef<
          ({ value: number } & RefAttributes<HTMLDivElement>) | null
        >(null);
        return {
          element: useMemoComponent({
            Component: TestComponent,
            props,
            ref,
            isEqual: shallowEquals,
          }),
          ref,
        };
      },
      {
        initialProps: { props: { value: 1 } },
      },
    );

    const firstRender = result.current.element;

    act(() => {
      rerender({ props: { value: 1 } });
    });

    expect(result.current.element).toBe(firstRender);
  });

  it('should re-render when props are not equal', () => {
    const { result, rerender } = renderHook(
      ({ props }) => {
        const ref = useRef<
          ({ value: number } & RefAttributes<HTMLDivElement>) | null
        >(null);
        return {
          element: useMemoComponent({
            Component: TestComponent,
            props,
            ref,
            isEqual: shallowEquals,
          }),
          ref,
        };
      },
      {
        initialProps: { props: { value: 1 } },
      },
    );

    const firstRender = result.current.element;

    act(() => {
      rerender({ props: { value: 2 } });
    });

    expect(result.current.element).not.toBe(firstRender);
    expect(result.current.element?.props.value).toBe(2);
    expect(result.current.element?.type).toBe(TestComponent);
  });

  it('should handle undefined isEqual function', () => {
    const { result, rerender } = renderHook(
      ({ props }) => {
        const ref = useRef<
          ({ value: number } & RefAttributes<HTMLDivElement>) | null
        >(null);
        return {
          element: useMemoComponent({
            Component: TestComponent,
            props,
            ref,
            isEqual: undefined,
          }),
          ref,
        };
      },
      {
        initialProps: { props: { value: 1 } },
      },
    );

    const firstRender = result.current.element;

    act(() => {
      rerender({ props: { value: 1 } });
    });

    expect(result.current.element).not.toBe(firstRender);
  });
});
