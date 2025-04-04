/**
 * Converts a data URI to a Blob object.
 *
 * @param dataURI - The data URI string to be converted. It should be in the format
 *                  `data:[<mime type>][;base64],<data>`.
 * @returns A Blob object representing the binary data of the input data URI.
 *
 * @example
 * ```typescript
 * const dataURI = "data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==";
 * const blob = dataURItoBlob(dataURI);
 * console.log(blob); // Blob { size: 13, type: "text/plain" }
 * ```
 */
const dataURItoBlob = (dataURI: string) => {
  const byteString = Buffer.from(dataURI.split(',')[1], 'base64').toString(
    'binary',
  );
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
};

export default dataURItoBlob;
