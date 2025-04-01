/**
 * This function allows the state to be controlled by an HOC by overwritting it with props
 */

import { isArray, isObject } from '../utils';

const getDerivedStateFromProps = <S extends object>(
  state: S,
  props: Pick<S, any>
): S => {
  if (
    !isObject(state) ||
    !isObject(props) ||
    isArray(state) ||
    isArray(props)
  ) {
    return state;
  }

  return {
    ...(state && {
      ...state,
    }),
    ...(props && {
      ...props,
    }),
  };
};

export default getDerivedStateFromProps;
