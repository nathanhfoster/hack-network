import { Reducer } from 'react';

import ActionTypes from './actionTypes';
import { PayloadActionType } from '../types';

/**
 * Initializes a reducers state
 * @param {Reducer}
 * @returns {ReducerState}
 */

const getReducerDefaultState = (reducer: Reducer<any, PayloadActionType>) =>
  reducer(undefined, { type: ActionTypes.INIT });

export default getReducerDefaultState;
