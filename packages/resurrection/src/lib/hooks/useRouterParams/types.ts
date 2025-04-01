import { Url } from 'next/dist/shared/lib/router/router'
import { NextRouter } from 'next/router'

interface NextRouterAugmented extends NextRouter {
  hasParam: (name: string) => boolean
  getParamValue: (name: string) => string | string[] | undefined
  addParam: (name: string, value: string) => void
  setParam: (
    name: string,
    value?: string | boolean | number | string[] | boolean[] | number[]
  ) => void
  setParams: (
    params: [
      string,
      string | number | boolean | string[] | boolean[] | number[]
    ][]
  ) => void
  clearParams: () => void
  removeParam: (name: string) => void
  removeParams: (names: string[]) => void
  toggleParam: (name: string, value: string) => void
  shallowPush: (url: string) => void
  shallowReplace: (url: Url) => void
}

export default NextRouterAugmented
