// Function to get number of days available in a mont
function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = [
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
  2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041,
  2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050,
];

const getFormattedDate = (dateVal: any) => {
  let inputDate = new Date(dateVal);
  let formatDate: any = {};
  formatDate.mm =
    inputDate.getMonth() + 1 < 10
      ? "0" + (inputDate.getMonth() + 1).toString()
      : (inputDate.getMonth() + 1).toString();
  formatDate.dd =
    inputDate.getDate() < 10
      ? "0" + inputDate.getDate().toString()
      : inputDate.getDate().toString();
  formatDate.yyyy = inputDate.getFullYear().toString();
  return `${formatDate.mm}/${formatDate.dd}/${formatDate.yyyy}`;
};

export { daysInMonth, months, years, getFormattedDate };
