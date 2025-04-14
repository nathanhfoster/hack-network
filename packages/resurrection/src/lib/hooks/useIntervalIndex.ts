'use client';

import { getRandomNumber, isArray } from '../utils';
import { useEffect, useState } from 'react';

export interface UseIntervalParams {
  maxIndex: number;
  interval: number | [number, number];
  repeat?: boolean;
}

const useIntervalIndex = (params: UseIntervalParams) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        if (index === params.maxIndex && params.repeat !== false) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      },
      isArray(params?.interval) ? getRandomNumber(...params.interval) : params.interval,
    );

    return () => clearInterval(intervalId);
  }, [index, params.maxIndex, params?.interval, params.repeat]);

  return index;
};

export default useIntervalIndex;
