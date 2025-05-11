import { renderHook, act } from '@testing-library/react';
import usePreviousValue from '../usePreviousValue';

describe('usePreviousValue', () => {
  it('should return undefined on first render', () => {
    const { result } = renderHook(() => usePreviousValue(1));
    expect(result.current).toBeUndefined();
  });

  it('should return previous value after update', () => {
    const { result, rerender } = renderHook(({ value }) => usePreviousValue(value), {
      initialProps: { value: 1 },
    });

    // First render should be undefined
    expect(result.current).toBeUndefined();

    // Update the value
    act(() => {
      rerender({ value: 2 });
    });

    // Should now have the previous value (1)
    expect(result.current).toBe(1);

    // Update again
    act(() => {
      rerender({ value: 3 });
    });

    // Should now have the previous value (2)
    expect(result.current).toBe(2);
  });

  it('should work with different types', () => {
    const { result, rerender } = renderHook(({ value }) => usePreviousValue(value), {
      initialProps: { value: 'test' },
    });

    expect(result.current).toBeUndefined();

    act(() => {
      rerender({ value: 'new test' });
    });

    expect(result.current).toBe('test');
  });

  it('should work with objects', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };

    const { result, rerender } = renderHook(({ value }) => usePreviousValue(value), {
      initialProps: { value: obj1 },
    });

    expect(result.current).toBeUndefined();

    act(() => {
      rerender({ value: obj2 });
    });

    expect(result.current).toBe(obj1);
  });
});
