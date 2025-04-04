import { Context, useContextSelector } from 'use-context-selector';
import type { ComponentPropsType } from '../connect/types';

const createUseSelectorHook = <State = unknown>(context: Context<State>) => {
  /**
   * This hook simulates Redux's useSelector hook
   * Only updates when the selected state changes, not when the whole state changes
   */
  const useSelector = <
    SelectedState = unknown,
    Props extends ComponentPropsType = object,
  >(
    mapStateToSelector: (state: State, props?: Props) => SelectedState,
    props?: Props,
  ) => {
    const selectedState = useContextSelector(context, (state) => {
      const result = mapStateToSelector(state, props);
      return result;
    });

    return selectedState;
  };

  return useSelector;
};

export default createUseSelectorHook;
