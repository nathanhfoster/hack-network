import { isBoolean } from '../../utils';

import type { ReducerMaybeWithAction } from '../../types';

/**
 * Toggles the boolean state if there is not an action passed in
 * else it sets the state to the action's passed value
 * @param {boolean} state - Current state of the reducer
 * @param {*=} action - Optional dispatched action
 * @returns {boolean} - The nextState of the reducer
 */
const toggleBooleanReducer: ReducerMaybeWithAction<boolean, any> = (
  state,
  action,
) => {
  // If the type of the action is a boolean set the state to the action
  if (isBoolean(action)) {
    return action;
  }

  // Otherwise toggle the state
  return !state;
};

export default toggleBooleanReducer;
