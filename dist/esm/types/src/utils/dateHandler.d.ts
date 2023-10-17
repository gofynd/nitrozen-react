declare function daysInMonth(month: number, year: number): number;
declare const months: string[];
declare const years: number[];
declare const getFormattedDate: (dateVal: any) => string;
declare const areDatesSame: (startDate: Date, endDate: Date) => boolean;
export { daysInMonth, months, years, getFormattedDate, areDatesSame };
