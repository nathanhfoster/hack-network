'use client';

import { useReducer } from 'react';

import toggleBooleanReducer from './reducers/toggleBooleanReducer';
import { DispatchMaybeWithAction } from '../types';

/**
 * Boolean reducer that toggles it's state by default or is overwritten by a passed value
 * @param {object.<string, *>=} initializerArg - initial state of the reducer
 * @param {function(object.<string, *>) => boolean=} initializer - callback that initilizes the reducer's state
 * @returns {[boolean, DispatchWithoutAction]} - the new useReducer hook [toggle, setToggle]
 */

const useBooleanToggler = (initializerArg = false) =>
  useReducer(toggleBooleanReducer, Boolean(initializerArg)) as unknown as [
    boolean,
    DispatchMaybeWithAction,
  ];

export default useBooleanToggler;
