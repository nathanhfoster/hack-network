'use client';

// use-isomorphic-layout-effect.js
import { isClientSide } from '../utils';
import { useEffect, useLayoutEffect } from 'react';

/**
 * useLayoutEffect hook that works on both the client and server side
 */
const useIsomorphicLayoutEffect = isClientSide() ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
