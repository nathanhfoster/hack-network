import { addDays } from 'date-fns';

/**
 * Adds a specified number of days to a given date.
 *
 * @param dateValue - The initial date value. Can be a string, number, or Date object.
 * @param increment - The number of days to add to the date.
 * @returns A new Date object with the specified number of days added.
 */
const addDaysFn = (
  dateValue: string | number | Date,
  increment: number,
): Date => {
  return addDays(new Date(dateValue), increment);
};

export default addDaysFn;
