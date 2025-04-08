'use client';

import { useMemo } from 'react';
import isMobile from '../utils/isMobile';

const useNavigator = () => {
  const value = useMemo(() => {
    return isMobile();
  }, []);

  return value;
};

export default useNavigator;
