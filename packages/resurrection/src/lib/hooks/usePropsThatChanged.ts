import { shallowEquals } from '../utils';
import { useRef } from 'react';
import usePreviousValue from './usePreviousValue';
import { ComponentPropsType } from '../connect/types';

/**
 * Returns a copy of the next props whose values shallowly differ from the previous ones
 * @param {object} props - the props you want to mutate
 * @returns {object} - the props whose values are shallowly differnt from the previous
 */
export default function usePropsThatChanged<P extends ComponentPropsType>(
  nextProps: P,
): Partial<P> {
  const previousProps = usePreviousValue<P>(nextProps);
  const propsThatChanged = useRef<Partial<P>>({});

  if (previousProps) {
    Object.keys(nextProps).forEach((key) => {
      const typedKey = key as keyof P;
      if (!shallowEquals(previousProps[typedKey], nextProps[typedKey])) {
        propsThatChanged.current[typedKey] = nextProps[typedKey];
      } else {
        delete propsThatChanged.current[typedKey];
      }
    });
  }

  return propsThatChanged.current;
}
