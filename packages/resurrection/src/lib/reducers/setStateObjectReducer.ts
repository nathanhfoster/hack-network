import { SetStateAction } from 'react';
import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';

import setStateReducer from './setStateReducer';

/**
 * Allows a functional component to have
 * a setState API that is similar to a class component's this.setState
 */
const setObjectStateReducer = <S>(prevState: S, action: SetStateAction<S>) => {
  const nextStateToOverwrite = setStateReducer<S>(prevState, action);

  const nextState = getDerivedStateFromProps(
    prevState,
    nextStateToOverwrite as Partial<S>,
  );

  return nextState;
};

export default setObjectStateReducer;
