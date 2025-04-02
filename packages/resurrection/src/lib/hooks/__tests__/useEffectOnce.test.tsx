import { renderHook, act } from '@testing-library/react';
import useEffectOnce from '../useEffectOnce';
import { vi } from 'vitest';

describe('useEffectOnce', () => {
  it('should call effect only once', () => {
    const effect = vi.fn();
    const { rerender } = renderHook(() => useEffectOnce(effect));

    // Effect should be called once on mount
    expect(effect).toHaveBeenCalledTimes(1);

    // Re-render multiple times
    act(() => {
      rerender();
      rerender();
      rerender();
    });

    // Effect should still only have been called once
    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('should call cleanup function on unmount', () => {
    const cleanup = vi.fn();
    const effect = vi.fn().mockReturnValue(cleanup);
    const { unmount } = renderHook(() => useEffectOnce(effect));

    // Effect should be called once on mount
    expect(effect).toHaveBeenCalledTimes(1);
    expect(cleanup).not.toHaveBeenCalled();

    // Unmount the component
    unmount();

    // Cleanup should be called on unmount
    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it('should handle effect that returns nothing', () => {
    const effect = vi.fn().mockReturnValue(undefined);
    const { unmount } = renderHook(() => useEffectOnce(effect));

    // Effect should be called once on mount
    expect(effect).toHaveBeenCalledTimes(1);

    // Unmount should not throw
    unmount();
  });

  it('should handle async effect', async () => {
    const effect = vi.fn().mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      return () => {};
    });

    const { unmount } = renderHook(() => useEffectOnce(effect));

    // Effect should be called once on mount
    expect(effect).toHaveBeenCalledTimes(1);

    // Wait for effect to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Unmount should not throw
    unmount();
  });
});
