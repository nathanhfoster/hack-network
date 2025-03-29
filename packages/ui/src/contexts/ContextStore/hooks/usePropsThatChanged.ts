import { shallowEquals } from '@hack-network/utils';
import { RefObject, useRef } from 'react';

import usePreviousValue from '../../../hooks/usePreviousValue';
import { ComponentPropsType } from '../connect/types';

import useLazyMemo from './useLazyMemo';

/**
 * Returns a copy of the next props whose values shallowly differ from the previous ones
 * @param {object} props - the props you want to mutate
 * @returns {object} - the props whose values are shallowly differnt from the previous
 */
const usePropsThatChanged = <P extends ComponentPropsType>(
  nextProps: P = {} as Pick<P, any>
) => {
  const previousProps: P = usePreviousValue<P>(nextProps);
  const propsThatChanged: RefObject<Partial<P>> = useRef({});
  const propKeys: string[] = useLazyMemo(() =>
    Object.keys(nextProps as object)
  );
  // The key length between previousProps and nextProps must be the same
  propKeys.forEach((key: string) => {
    const typedKey = key as keyof P;
    if (!shallowEquals(previousProps[typedKey], nextProps[typedKey])) {
      propsThatChanged.current[typedKey] = nextProps[typedKey];
    } else {
      delete propsThatChanged.current[typedKey];
    }
  });

  return propsThatChanged.current;
};

export default usePropsThatChanged;
