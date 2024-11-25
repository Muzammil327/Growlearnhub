import { format, differenceInDays, addDays, parseISO, isToday } from "date-fns";

/**
 * Format a date to a specific string format
 * @param {Date | string} date - The date object or ISO string
 * @param {string} [dateFormat='yyyy-MM-dd'] - The desired format
 * @returns {string} - Formatted date
 */
export const formatDate = (
  date: Date | string,
  dateFormat: string = "yyyy-MM-dd",
): string => {
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  return format(parsedDate, dateFormat);
};

/**
 * Calculate the difference in days between two dates
 * @param {Date | string} date1 - The first date
 * @param {Date | string} [date2=new Date()] - The second date (defaults to today)
 * @returns {number} - Difference in days
 */
export const calculateDaysDifference = (
  date1: Date | string,
  date2: Date | string = new Date(),
): number => {
  const parsedDate1 = typeof date1 === "string" ? parseISO(date1) : date1;
  const parsedDate2 = typeof date2 === "string" ? parseISO(date2) : date2;
  return differenceInDays(parsedDate1, parsedDate2);
};

/**
 * Add days to a given date
 * @param {Date | string} date - The date to which days will be added
 * @param {number} days - Number of days to add
 * @returns {Date} - The new date
 */
export const addDaysToDate = (date: Date | string, days: number): Date => {
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  return addDays(parsedDate, days);
};

/**
 * Check if a given date is today
 * @param {Date | string} date - The date to check
 * @returns {boolean} - True if the date is today
 */
export const isDateToday = (date: Date | string): boolean => {
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  return isToday(parsedDate);
};
