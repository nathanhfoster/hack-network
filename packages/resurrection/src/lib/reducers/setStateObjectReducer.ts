import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';

import setStateReducer from './setStateReducer';

/**
 * Allows a functional component to have
 * a setState API that is similar to a class component's this.setState
 */
const setObjectStateReducer = <S extends Record<string, unknown>>(
  state: S,
  action: any,
) => {
  const nextStateToOverwrite = setStateReducer<S>(state, action);

  const nextState = getDerivedStateFromProps(
    state,
    nextStateToOverwrite as Partial<S>,
  );

  return nextState;
};

export default setObjectStateReducer;
