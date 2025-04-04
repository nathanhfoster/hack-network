import type { ContextStoreInitializer } from '../types';

const defaultInitializer: ContextStoreInitializer = <T extends object>(
  stateOrProps = {} as T,
) => stateOrProps;

export default defaultInitializer;
