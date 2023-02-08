const t = (t, e = 300) => {
  let o;
  return function (...u) {
    clearTimeout(o), (o = setTimeout(() => t.apply(this, u), e));
  };
};
export { t as default };
//# sourceMappingURL=debounce.js.map
