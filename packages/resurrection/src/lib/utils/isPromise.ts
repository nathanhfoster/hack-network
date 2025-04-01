import isFunction from './isFunction'
import isNotNotTrue from './isNotNotTrue'

const isPromise = (value: any): value is Promise<any> =>
  isNotNotTrue(value) && isFunction(value.then)

export default isPromise
