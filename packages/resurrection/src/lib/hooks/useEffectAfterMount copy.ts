'use client'

import { useEffect, useRef } from 'react'

const useEffectAfterMount = (
  effect: React.EffectCallback,
  deps?: React.DependencyList
) => {
  const isMounted = useRef(false)

  useEffect(() => {
    let cleanup: void | (() => void) = undefined

    if (isMounted.current) {
      cleanup = effect()
    }

    isMounted.current = true

    return cleanup
  }, deps)
}

export default useEffectAfterMount
