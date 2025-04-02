import { Context, useContext, useMemo } from 'react';

import type { ComponentPropsType } from '../connect/types';
import shallowEqual from '../utils/shallowEquals';
import usePreviousValue from './usePreviousValue';

const createUseSelectorHook = <State = unknown>(context: Context<State>) => {
  /**
   * This hook simulates Redux's useSelector hook
   * Only updates when the selected state changes, not when the whole state changes
   */
  const useSelector = <
    SelectedState = unknown,
    Props extends ComponentPropsType = {},
  >(
    mapStateToSelector: (state: State, props?: Props) => SelectedState,
    props?: Props,
  ) => {
    const state = useContext<State>(context);
    const selectedState = mapStateToSelector(state, props);
    const previousSelectedState = usePreviousValue(selectedState);

    return useMemo(() => {
      if (!shallowEqual(previousSelectedState, selectedState)) {
        return selectedState;
      }
      return previousSelectedState;
    }, [selectedState]);
  };

  return useSelector;
};

export default createUseSelectorHook;
