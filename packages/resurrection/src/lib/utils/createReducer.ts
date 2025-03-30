import { produce, setAutoFreeze, Draft } from 'immer'

import { PayloadAction } from '../types.js'

import {
  CreateReducerActions,
  CreateReducerProps,
  InitialReducerState,
  ReducerActionCreators,
  ThunkActions
} from './createReducer.types.js'

setAutoFreeze(false)
// enableMapSet(); use this if you need to use Map and Set in immer

const createReducer = <
  MS extends InitialReducerState,
  MA extends CreateReducerActions<MS>,
  MT extends ThunkActions<MS, ReducerActionCreators<MA, string>>,
  N extends string,
  S extends InitialReducerState,
  A extends CreateReducerActions<S & MS>
>(
  props: CreateReducerProps<MS, MA, MT, N, S, A>
) => {
  const actions = Object.keys({
    ...props.actions,
    ...props.extends?.module.actions
  }).reduce(
    (acc, actionName) => {
      const action =
        props.actions![actionName] ?? props.extends?.module.actions![actionName]
      if (action) {
        ;(acc as any)[actionName] = (
          payload: Parameters<typeof action>[1]
        ) => ({
          type: `${props.name}/${actionName}`,
          payload
        })
      }
      return acc
    },
    {} as ReducerActionCreators<A & MA, N>
  )

  const finalInitialState = {
    ...props.initialState,
    ...props.extends?.module.initialState
  }

  const reducer = (state = finalInitialState, action: PayloadAction) => {
    const [actionReducerName, actionType] = action.type.split('/')

    const reducerActionFunction =
      props.actions![actionType] ?? props.extends?.module.actions![actionType]

    if (actionReducerName === props.name && reducerActionFunction) {
      return produce(state, (draft: Draft<S & MS>) => {
        reducerActionFunction(draft, action.payload)
      })
    }

    return state
  }

  const addThunks = <TA extends ThunkActions<S & MS, typeof actions>>(
    getThunks: (thunksAction: ReducerActionCreators<A & MA, N>) => TA
  ) => {
    return {
      initialState: finalInitialState as S & MS,
      actions: {
        ...actions,
        ...getThunks(actions),
        ...(props.extends?.module.getThunks?.(actions) as MT)
      },
      reducer,
      module: {
        initialState: props.initialState,
        actions: props.actions!,
        getThunks
      }
    }
  }

  return {
    initialState: finalInitialState as S & MS,
    actions: {
      ...actions,
      ...props.extends?.module.actions,
      ...(props.extends?.module.getThunks?.(actions) as MT)
    },
    reducer,
    addThunks,
    module: {
      initialState: props.initialState,
      actions: props.actions!
    }
  }
}

export default createReducer
