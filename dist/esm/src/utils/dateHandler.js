function t(t, e) {
  return new Date(e, t, 0).getDate();
}
const e = [
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
  ],
  r = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002,
    2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
    2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038,
    2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050,
  ],
  n = (t) => {
    let e = new Date(t),
      r = {};
    return (
      (r.mm =
        e.getMonth() + 1 < 10
          ? "0" + (e.getMonth() + 1).toString()
          : (e.getMonth() + 1).toString()),
      (r.dd =
        e.getDate() < 10
          ? "0" + e.getDate().toString()
          : e.getDate().toString()),
      (r.yyyy = e.getFullYear().toString()),
      `${r.mm}/${r.dd}/${r.yyyy}`
    );
  };
export { t as daysInMonth, n as getFormattedDate, e as months, r as years };
//# sourceMappingURL=dateHandler.js.map
