import dataURItoBlob from './dataURItoBlob';
import isClientSide from './isClientSide';

/**
 * Converts a data URI to a `File` object or a file-like object depending on the environment.
 *
 * @param dataURL - The data URI string to be converted.
 * @returns A `File` object if executed in a client-side environment, or a file-like object with a `name` property otherwise.
 */
const dataURItoFile = (dataURL: string) => {
  if (isClientSide()) {
    return new File([dataURItoBlob(dataURL)], 'current.csv', {
      type: 'text/csv',
    });
  } else {
    return {
      name: 'current.csv',
    } as File;
  }
};

export default dataURItoFile;
