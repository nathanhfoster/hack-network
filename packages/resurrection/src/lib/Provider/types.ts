import type {
  Context,
  Dispatch,
  ReactNode,
  Reducer,
  SetStateAction
} from 'react'
import type { NextRouterAugmented } from '../types.js'

export type ContextStoreInitializer<TState> = (
  state: TState | undefined
) => TState

export type ProviderProps<TState = unknown, TAction = unknown> = {
  initialState: TState
  derivedStateFromProps?: TState | ((state: TState, router: NextRouterAugmented) => TState)
  children: ReactNode | ((value: TState) => ReactNode)
}
