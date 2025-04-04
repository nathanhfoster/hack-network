import { RefObject } from 'react';

import isHtmlElement from './isHtmlElement';
import isNull from './isNull';
import isRef from './isRef';

export const isHtmlElementRef = (value: any): value is RefObject<HTMLElement> =>
  isRef<HTMLElement>(value) &&
  (isNull(value.current) || isHtmlElement(value.current));

export default isHtmlElementRef;
