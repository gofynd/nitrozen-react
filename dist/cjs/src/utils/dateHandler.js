"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
(exports.daysInMonth = function (e, t) {
  return new Date(t, e, 0).getDate();
}),
  (exports.getFormattedDate = (e) => {
    let t = new Date(e),
      r = {};
    return (
      (r.mm =
        t.getMonth() + 1 < 10
          ? "0" + (t.getMonth() + 1).toString()
          : (t.getMonth() + 1).toString()),
      (r.dd =
        t.getDate() < 10
          ? "0" + t.getDate().toString()
          : t.getDate().toString()),
      (r.yyyy = t.getFullYear().toString()),
      `${r.mm}/${r.dd}/${r.yyyy}`
    );
  }),
  (exports.months = [
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
  ]),
  (exports.years = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002,
    2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
    2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038,
    2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050,
  ]);
//# sourceMappingURL=dateHandler.js.map
