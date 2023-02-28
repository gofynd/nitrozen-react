"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
const t = (t, e) => {
  let r = e - t + 1;
  return Array.from({ length: r }, (e, r) => r + t);
};
exports.usePagination = (e, r = 0, n = 0, i, u = 0) => {
  const o = "...",
    s = Math.ceil(r / n);
  if (i + e >= s) return t(1, s);
  const a = Math.max(u - i, 1),
    c = Math.min(u + i, s),
    f = a > 2,
    l = c < s - 2,
    h = s;
  if (!f && l) {
    return [...t(1, 3 + 2 * i), o, s];
  }
  if (f && !l) {
    return [1, o, ...t(s - (3 + 2 * i) + 1, s)];
  }
  if (f && l) {
    return [1, o, ...t(a, c), o, h];
  }
  return [];
};
//# sourceMappingURL=usePagination.js.map
