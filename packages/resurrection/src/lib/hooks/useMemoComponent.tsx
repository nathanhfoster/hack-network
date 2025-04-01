'use client';

import { isFunction } from '@hack-network/utils';
import {
  ComponentType,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import usePreviousValue from './usePreviousValue';
import { ComponentPropsType, EqualityFunctionType } from '../connect/types';

export default function useMemoComponent<P extends ComponentPropsType>(
  Component: ComponentType<P>,
  props: P,
  isEqual?: EqualityFunctionType<P>,
) {
  const MemoizedComponent = useMemo(() => memo(Component), [Component]);
  const previousProps = usePreviousValue(props);

  const shouldUpdate = useCallback(
    (prevProps: P | undefined, nextProps: P) => {
      if (!prevProps) return true;
      return isEqual ? !isEqual(prevProps, nextProps) : prevProps !== nextProps;
    },
    [isEqual],
  );

  const shouldComponentUpdate = useMemo(
    () => shouldUpdate(previousProps, props),
    [previousProps, props, shouldUpdate],
  );

  return useMemo(
    () => <MemoizedComponent {...props} />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [shouldComponentUpdate],
  );
}
