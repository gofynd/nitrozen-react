const r = (r, t) => {
    const n = t - r + 1;
    return Array.from({ length: n }, (t, n) => n + r);
  },
  t = (t, n = 0, e = 0, i, o = 0) => {
    const u = "...",
      a = Math.ceil(n / e);
    if (i + t >= a) return r(1, a);
    const c = Math.max(o - i, 1),
      f = Math.min(o + i, a),
      h = c > 2,
      s = f < a - 2,
      m = a;
    if (!h && s) {
      return [...r(1, 3 + 2 * i), u, a];
    }
    if (h && !s) {
      return [1, u, ...r(a - (3 + 2 * i) + 1, a)];
    }
    if (h && s) {
      return [1, u, ...r(c, f), u, m];
    }
    return [];
  };
export { t as usePagination };
//# sourceMappingURL=usePagination.js.map
