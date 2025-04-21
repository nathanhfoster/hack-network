import type { SetStateAction } from 'react';
import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';

import setStateReducer from './setStateReducer';

/**
 * Allows a functional component to have
 * a setState API that is similar to a class component's this.setState
 */
const setObjectStateReducer = <S extends Record<string, any>>(
  prevState: S,
  action: Partial<S> | SetStateAction<S>,
): S => {
  const nextStateToOverwrite = setStateReducer<S>(
    prevState,
    action as SetStateAction<S>,
  );

  const nextState = getDerivedStateFromProps(prevState, nextStateToOverwrite);

  return nextState;
};

export default setObjectStateReducer;
