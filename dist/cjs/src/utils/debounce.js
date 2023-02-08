"use strict";
module.exports = (t, e = 300) => {
  let u;
  return function (...i) {
    clearTimeout(u), (u = setTimeout(() => t.apply(this, i), e));
  };
};
//# sourceMappingURL=debounce.js.map
