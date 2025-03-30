'use client'

import { createContext, Dispatch } from 'react'

import { DEFAULT_DISPATCH_CONTEXT } from '../constants'
import createUseDispatchHook from '../hooks/useDispatch'
import createUseContextSelector from '../hooks/useSelector'
import { SetStateAction } from '../hooks/useSetStateReducer'

const createContextWithName = <S, D = typeof DEFAULT_DISPATCH_CONTEXT>(
  displayName: string,
  initialState: S,
  initialDispatch = DEFAULT_DISPATCH_CONTEXT
) => {
  const StateContext = createContext<S>(initialState)

  StateContext.displayName = `${displayName}StateContext`
  const useSelector = createUseContextSelector(StateContext)

  const DispatchContext = createContext<Dispatch<SetStateAction<D>>>(
    initialDispatch as unknown as Dispatch<SetStateAction<D>>
  )

  DispatchContext.displayName = `${displayName}DispatchContext`
  const useDispatch = createUseDispatchHook<D>(DispatchContext)

  return {
    StateContext,
    useSelector,
    DispatchContext,
    useDispatch
  }
}

export default createContextWithName
