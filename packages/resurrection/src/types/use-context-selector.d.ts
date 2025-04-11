declare module 'use-context-selector' {
  import { Context, Dispatch, SetStateAction } from 'react';

  export function createContext<T>(defaultValue: T): Context<T>;
  export function useContextSelector<T, S>(
    context: Context<T>,
    selector: (value: T) => S,
  ): S;
}
