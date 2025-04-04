import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';

import setStateReducer from './setStateReducer';

/**
 * Allows a functional component to have
 * a setState API that is similar to a class component's this.setState
 */
const setObjectStateReducer = <S extends object>(state: S, action: any) => {
  const nextStateToOverwrite = setStateReducer<S>(state, action);

  const nextState = getDerivedStateFromProps(
    state,
    nextStateToOverwrite as Pick<S, any>,
  );

  return nextState;
};

export default setObjectStateReducer;
