/**
 * Converts a `File` object to a Base64-encoded string.
 *
 * @param file - The `File` object to be converted.
 * @returns A promise that resolves to the Base64-encoded string representation of the file.
 *
 * @example
 * ```typescript
 * const fileInput = document.querySelector('input[type="file"]');
 * if (fileInput?.files?.[0]) {
 *   fileToBase64String(fileInput.files[0])
 *     .then(base64String => {
 *       console.log(base64String);
 *     })
 *     .catch(error => {
 *       console.error('Error converting file to Base64:', error);
 *     });
 * }
 * ```
 */
const fileToBase64String = (file: File): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    if (!file) return;
    const blob = new Blob([file]);
    const reader = new FileReader();

    reader.readAsDataURL(blob);
    reader.onload = () => {
      const base64 = reader.result as string;

      resolve(base64);
    };
    reader.onerror = reject;
  });

export default fileToBase64String;
