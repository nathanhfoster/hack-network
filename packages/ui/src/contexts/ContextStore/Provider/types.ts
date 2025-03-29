import type {
  Context,
  Dispatch,
  ReactNode,
  Reducer,
  SetStateAction
} from 'react'

export type ContextStoreInitializer<TState> = (
  state: TState | undefined
) => TState

export type ProviderProps<TState = unknown, TAction = unknown> = {
  StateContext: Context<TState>
  reducer?: Reducer<TState, TAction>
  initialState?: TState
  initializer?: ContextStoreInitializer<TState>
  derivedStateFromProps?: TState
  DispatchContext?: Context<Dispatch<TAction | SetStateAction<TAction>>>
  children: ReactNode | ((value: TState) => ReactNode)
}
