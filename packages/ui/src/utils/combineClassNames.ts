/**
 * Combines multiple class names into a single string, handling conditional classes
 * and removing duplicates. Useful for combining Tailwind CSS classes.
 *
 * @example
 * combineClassNames(
 *   'text-blue-500',
 *   isActive && 'bg-blue-100',
 *   className
 * )
 *
 * @param classes - Class names to combine. Can be strings, undefined, null, or false
 * @returns Combined class names as a single string
 */
const combineClassNames = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes
    .filter(Boolean) // Remove falsy values
    .join(' ') // Join with space
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim(); // Remove leading/trailing spaces
};

export default combineClassNames;
