'use client';

import { useEffect, useRef, useState } from 'react';
import isPromise from '../utils/isPromise';

import { isFunction } from '../utils';

type EffectResult = void | (() => void);
type EffectFunction = () => EffectResult | Promise<EffectResult>;

const useEffectOnce = (effect: EffectFunction) => {
  const destroyFunc = useRef<EffectResult>(undefined);
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);
  const [_val, setVal] = useState<number>(0);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      const result = effect();
      if (isPromise(result)) {
        // Handle async effect
        result.then((cleanup: EffectResult) => {
          if (isFunction(cleanup)) {
            destroyFunc.current = cleanup;
          }
        });
      } else {
        // Handle sync effect
        destroyFunc.current = result;
      }
      effectCalled.current = true;
    }

    // this forces one render after the effect is run
    setVal((val) => val + 1);

    return () => {
      // if the comp didn't render since the useEffect was called,
      // we know it's the dummy React cycle
      if (!renderAfterCalled.current) {
        return;
      }
      if (typeof destroyFunc.current === 'function') {
        destroyFunc.current();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEffectOnce;
