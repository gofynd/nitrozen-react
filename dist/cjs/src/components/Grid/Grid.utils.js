"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("./Grid.interfaces.js");
exports.calculateCustomGridCss = (t, s) => {
  let r = { gridTemplateColumns: "" };
  if (t.customWidth && t.customWidth.length > 0) {
    let o = t.columns[s] || t.columns[e.ScreenTypes.DESKTOP] || 1,
      u = "";
    for (let e = 0; e < o; e++) {
      const s = t.customWidth.filter((t) => t.columnNumber === e + 1);
      s.length > 0
        ? "number" == typeof s[0].customWidth
          ? (u += ` ${s[0].customWidth}%`)
          : "string" == typeof s[0].customWidth && (u += ` ${s[0].customWidth}`)
        : (u += " 1fr");
    }
    r.gridTemplateColumns = u;
  } else
    r.gridTemplateColumns = `repeat(${
      t.columns[s] || t.columns[e.ScreenTypes.DESKTOP] || 1
    },1fr)`;
  return r;
};
//# sourceMappingURL=Grid.utils.js.map
