'use client';

import { getRandomNumber, isArray } from '@hack-network/utils';
import { useEffect, useState } from 'react';

export interface UseIntervalParams {
  maxIndex: number;
  ms: number | [number, number];
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
      isArray(params?.ms) ? getRandomNumber(...params.ms) : params.ms
    );

    return () => clearInterval(intervalId);
  }, [index, params.maxIndex, params?.ms, params.repeat]);

  return index;
};

export default useIntervalIndex;
