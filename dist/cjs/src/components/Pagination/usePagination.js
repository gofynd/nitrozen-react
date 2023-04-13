"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
const t = (t, r) => {
  const e = r - t + 1;
  return Array.from({ length: e }, (r, e) => e + t);
};
exports.usePagination = (r, e = 0, n = 0, i, o = 0) => {
  const s = "...",
    u = Math.ceil(e / n);
  if (i + r >= u) return t(1, u);
  const a = Math.max(o - i, 1),
    c = Math.min(o + i, u),
    f = a > 2,
    h = c < u - 2,
    l = u;
  if (!f && h) {
    return [...t(1, 3 + 2 * i), s, u];
  }
  if (f && !h) {
    return [1, s, ...t(u - (3 + 2 * i) + 1, u)];
  }
  if (f && h) {
    return [1, s, ...t(a, c), s, l];
  }
  return [];
};
//# sourceMappingURL=usePagination.js.map
