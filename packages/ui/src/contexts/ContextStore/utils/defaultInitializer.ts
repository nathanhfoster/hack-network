import type { ContextStoreInitializer } from '../types.js'

const defaultInitializer: ContextStoreInitializer = <T extends object>(
  stateOrProps = {} as T
) => stateOrProps

export default defaultInitializer
