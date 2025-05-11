import { Context, useContextSelector } from 'use-context-selector';
import type { ComponentPropsType, InferStateFromContext } from '../connect/types';

const createUseSelectorHook = <C extends Context<any>>(context: C) => {
  /**
   * This hook simulates Redux's useSelector hook
   * Only updates when the selected state changes, not when the whole state changes
   */
  const useSelector = <
    SelectedState = unknown,
    Props extends ComponentPropsType = Record<string, unknown>,
  >(
    mapStateToSelector: (state: InferStateFromContext<C>, props?: Props) => SelectedState,
    props?: Props
  ) => {
    const selectedState = useContextSelector<InferStateFromContext<C>, SelectedState>(
      context,
      (state) => {
        const result = mapStateToSelector(state, props);
        return result;
      }
    );

    return selectedState;
  };

  return useSelector;
};

export default createUseSelectorHook;
