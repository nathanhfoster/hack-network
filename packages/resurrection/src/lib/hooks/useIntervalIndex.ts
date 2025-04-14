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
    const timer = setInterval(
      () => {
        setIndex((prevIndex) => {
          if (prevIndex === params.maxIndex - 1) {
            return params.repeat !== false ? 0 : prevIndex;
          }

          return prevIndex + 1;
        });
      },
      isArray(params?.interval)
        ? getRandomNumber(...params.interval)
        : params.interval,
    );

    return () => clearInterval(timer);
  }, [params.maxIndex, params?.interval, params.repeat]);

  return { index, setIndex };
};

export default useIntervalIndex;
