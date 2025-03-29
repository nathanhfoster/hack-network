import { Context, Dispatch, useContext } from 'react'

import { SetStateAction } from './useSetStateReducer'

/**
 * Creates a custom hook for accessing the dispatch function from a given context.
 *
 * This utility is useful for managing state updates in a React application
 * by providing a strongly-typed dispatch function derived from a context.
 *
 * @template T - The type of the state managed by the dispatch function. Defaults to `any`.
 * @param DispatchContext - The React context that provides the dispatch function.
 *                          This context should be created using `React.createContext`.
 * @returns A custom hook that retrieves the dispatch function from the provided context.
 *
 * @throws Will throw an error if the hook is used outside of the corresponding context provider.
 *
 * @example
 * ```tsx
 * // Create a context for managing state
 * const MyDispatchContext = createContext<Dispatch<SetStateAction<MyState>>>(() => {});
 *
 * // Create a custom hook for accessing the dispatch function
 * const useMyDispatch = createUseDispatchHook<MyState>(MyDispatchContext);
 *
 * // Use the custom hook in a component
 * const MyComponent: React.FC = () => {
 *   const dispatch = useMyDispatch();
 *
 *   const handleClick = () => {
 *     dispatch((prevState) => ({ ...prevState, count: prevState.count + 1 }));
 *   };
 *
 *   return <button onClick={handleClick}>Increment</button>;
 * };
 * ```
 */
const createUseDispatchHook = <T = any>(
  DispatchContext: Context<Dispatch<SetStateAction<T>>>
): (() => Dispatch<SetStateAction<T>>) => {
  const useDispatch = () => {
    const dispatch = useContext<Dispatch<SetStateAction<T>>>(DispatchContext)

    return dispatch
  }

  return useDispatch
}

export default createUseDispatchHook
