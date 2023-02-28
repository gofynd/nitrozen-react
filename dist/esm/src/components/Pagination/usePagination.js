const r = (r, t) => {
    let n = t - r + 1;
    return Array.from({ length: n }, (t, n) => n + r);
  },
  t = (t, n = 0, e = 0, i, u = 0) => {
    const a = "...",
      f = Math.ceil(n / e);
    if (i + t >= f) return r(1, f);
    const o = Math.max(u - i, 1),
      c = Math.min(u + i, f),
      h = o > 2,
      l = c < f - 2,
      m = f;
    if (!h && l) {
      return [...r(1, 3 + 2 * i), a, f];
    }
    if (h && !l) {
      return [1, a, ...r(f - (3 + 2 * i) + 1, f)];
    }
    if (h && l) {
      return [1, a, ...r(o, c), a, m];
    }
    return [];
  };
export { t as usePagination };
//# sourceMappingURL=usePagination.js.map
