import { ComponentPropsType } from '../connect/types';

/**
 * This function returns the combined props from a context store(s) state, dispatch, and HOC
 * @param {ComponentProps} stateToProps - The combined state of context store(s) being passed as props
 * @param {ComponentProps} dispatchToProps  - The combined dispatch API from context store(s) being passed as props
 * @param {ComponentProps} ownProps - Props passed from an HOC and not a context store
 * @returns {ComponentProps} - The merged props
 */
function defaultMergeProps<
  MSTP extends ComponentPropsType,
  MDTP extends ComponentPropsType,
  OWNP extends ComponentPropsType,
>(stateToProps: MSTP, dispatchToProps: MDTP, ownProps: OWNP) {
  return {
    ...stateToProps,
    ...dispatchToProps,
    ...ownProps,
  };
}

export default defaultMergeProps;
