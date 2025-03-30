import { ComponentPropsType, MergePropsReturnType } from '../connect/types.js'

/**
 * This function returns the combined props from a context store(s) state, dispatch, and HOC
 * @param {ComponentProps} stateToProps - The combined state of context store(s) being passed as props
 * @param {ComponentProps} dispatchToProps  - The combined dispatch API from context store(s) being passed as props
 * @param {ComponentProps} ownProps - Props passed from an HOC and not a context store
 * @returns {ComponentProps} - The merged props
 */
const defaultMergeProps = <
  MSTP extends ComponentPropsType,
  MDTP extends ComponentPropsType,
  OWNP extends ComponentPropsType
>(
  stateToProps: MSTP,
  dispatchToProps: MDTP,
  ownProps: OWNP
): MergePropsReturnType<MSTP, MDTP, OWNP> => {
  const mergedProps = {
    ...ownProps,
    ...stateToProps,
    ...dispatchToProps
  }

  return mergedProps as unknown as MergePropsReturnType<MSTP, MDTP, OWNP>
}

export default defaultMergeProps
