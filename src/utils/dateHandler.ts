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
export { daysInMonth, months };
