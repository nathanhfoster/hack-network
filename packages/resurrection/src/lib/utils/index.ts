// Types
export type { RunTests, TestToRun } from './types';
export type * from './createSlice/types';

// Number Utilities
export { default as formatNumber } from './formatNumber';
export { default as formatMoney } from './formatMoney';
export { default as formatPercent } from './formatPercent';
export { default as safeParseFloat } from './safeParseFloat';
export { default as isNumber } from './isNumber';
export { default as isPositiveNumberValue } from './isPositiveNumberValue';
export { default as getRandomNumber } from './getRandomNumber';
export { default as bytesToThreeSigDigits } from './bytesToThreeSigDigits';
export { default as getScaleCoefficient } from './getScaleCoefficient';

// String Utilities
export { default as isString } from './isString';
export { default as capitalize } from './capitalize';
export { default as stringMatch } from './stringMatch';
export { default as removeCharacters } from './removeCharacters';
export { default as isValidUrl } from './isValidUrl';
export { default as fixUrlSchema } from './fixUrlSchema';

// Array Utilities
export { default as isArray } from './isArray';
export { default as removeDuplicates } from './removeDuplicates';
export { default as filter } from './filter';
export { default as filterMap } from './filterMap';
export { default as filterWithQuery } from './filterWithQuery';
export { default as createArrayObject } from './createArrayObject';

// Object Utilities
export { default as isObject } from './isObject';
export { default as isObjectLike } from './isObjectLike';
export { default as hasProp } from './hasProp';
export { default as hasKey } from './hasKey';
export { default as removeNullValues } from './removeNullValues';
export { default as removeNilValues } from './removeNilValues';
export { default as objectKeysHaveAValue } from './objectKeysHaveAValue';
export { default as getObjectDiff } from './getObjectDiff';
export { default as getObjectDiffKeys } from './getObjectDiffKeys';
export { default as cloneDeep } from './cloneDeep';
export { default as deepEquals } from './deepEquals';
export { default as shallowEquals } from './shallowEquals';

// Type Checking Utilities
export { default as isBoolean } from './isBoolean';
export { default as isDate } from './isDate';
export { default as isEmail } from './isEmail';
export { default as isFunction } from './isFunction';
export { default as isAsyncFunction } from './isAsyncFunction';
export { default as isPromise } from './isPromise';
export { default as isNil } from './isNil';
export { default as isNull } from './isNull';
export { default as isEmpty } from './isEmpty';
export { default as isNotNotTrue } from './isNotNotTrue';

// DOM Utilities
export { default as isHtmlElement } from './isHtmlElement';
export { default as isHtmlElementRef } from './isHtmlElementRef';
export { default as isDomElement } from './isDomElement';
export { default as isRef } from './isRef';
export { default as isClientSide } from './isClientSide';
export { default as isMobile } from './isMobile';
export { default as isPwaInstalled } from './isPwaInstalled';
export { default as screenMaxWidth } from './screenMaxWidth';

// File and Data Utilities
export { default as fileToBase64String } from './fileToBase64String';
export { default as dataURItoFile } from './dataURItoFile';
export { default as dataURItoBlob } from './dataURItoBlob';
export { default as downloadFromUri } from './downloadFromUri';
export { default as getCsvDataUrl } from './getCsvDataUrl';

// Action and Reducer Utilities
export { default as actionTypes } from './actionTypes';
export { default as bindActionCreator } from './bindActionCreator';
export { default as createSlice } from './createSlice';
export { default as getReducerDefaultState } from './getReducerDefaultState';

// Other Utilities
export { default as copyToClipboard } from './copyToClipboard';
export { default as debounce } from './debounce';
export { default as getRandomString } from './getRandomString';
export { default as getErrorMessage } from './getErrorMessage';
export { default as getIsIframe } from './getIsIframe';
export { default as isPhoneNumber } from './isPhoneNumber';
export { default as isActiveUrlPath } from './isActiveUrlPath';
export { default as match } from './match';
export { default as singleRequest } from './singleRequest';
export { default as sendGetRequest } from './sendGetRequest';
export { default as sendPostRequest } from './sendPostRequest';
export { default as sendPutRequest } from './sendPutRequest';

export { default as createHandlerSetter } from './createHandlerSetter';

export * from './tsHelpers';
