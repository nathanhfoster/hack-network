/**
 * Copies the provided text to the clipboard using the Clipboard API.
 *
 * @param text - The text string to be copied to the clipboard.
 * @returns A promise that resolves when the text is successfully copied or rejects with an error if the operation fails.
 *
 * @example
 * ```typescript
 * copyToClipboard('Hello, world!')
 *   .then(() => {
 *     console.log('Text successfully copied!');
 *   })
 *   .catch((error) => {
 *     console.error('Failed to copy text:', error);
 *   });
 * ```
 */
const copyToClipboard = (text: string): Promise<void> => {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      console.info('Text copied to clipboard');
    })
    .catch((error) => {
      console.error('Failed to copy text to clipboard:', error);
    });
};

export default copyToClipboard;
