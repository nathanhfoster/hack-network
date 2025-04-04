/**
 * Converts a size in bytes to a human-readable string with three significant digits.
 * The size is scaled down to the appropriate unit (bytes, KB, MB, GB, TB) and rounded
 * to two decimal places.
 *
 * @param size - The size in bytes to be converted.
 * @returns A string representing the size in the most appropriate unit, rounded to two decimal places.
 *
 * @example
 * ```typescript
 * const result = bytesToThreeSigDigits(2048);
 * console.log(result); // "2.00KB"
 * ```
 */
const bytesToThreeSigDigits = (size: number) => {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
  let scaleIndex = 0;
  let scaledValue = size;

  while (scaledValue > 1000 && scaleIndex < units.length - 1) {
    scaledValue = scaledValue / 1024;
    scaleIndex += 1;
  }

  const roundedSizeValue = scaledValue.toFixed(2);

  return `${roundedSizeValue}${units[scaleIndex]}`;
};

export default bytesToThreeSigDigits;
