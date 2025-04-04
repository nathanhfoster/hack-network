import isNil from './isNil';
import isObject from './isObject';

const isHtmlElement = (value: any): value is HTMLElement => {
  if (isNil(value)) return false;

  try {
    //Using W3 DOM2 (works for FF, Opera and Chrome)
    return value instanceof HTMLElement;
  } catch (e) {
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have (works on IE7)
    const element = value as Record<string, unknown>;
    return (
      element?.['nodeType'] === 1 &&
      isObject(element) &&
      isObject(element?.['style']) &&
      isObject(element?.['ownerDocument'])
    );
  }
};

export default isHtmlElement;
