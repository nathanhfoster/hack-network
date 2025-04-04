import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';

import setStateReducer from './setStateReducer';

/**
 * Allows a functional component to have
 * a setState API that is similar to a class component's this.setState
 */
const setObjectStateReducer = <T extends object>(state: T, action: any) => {
  const nextStateToOverwrite = setStateReducer<T>(state, action);

  const nextState = getDerivedStateFromProps(
    state,
    nextStateToOverwrite as Pick<T, any>,
  );

  return nextState;
};

export default setObjectStateReducer;
