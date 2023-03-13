import { ScreenTypes as t } from "./Grid.interfaces.js";
const e = (e, o) => {
  let m = { gridTemplateColumns: "" };
  if (e.customWidth && e.customWidth.length > 0) {
    let s = e.columns[o] || e.columns[t.DESKTOP] || 1,
      l = "";
    for (let t = 0; t < s; t++) {
      const o = e.customWidth.filter((e) => e.columnNumber === t + 1);
      o.length > 0
        ? "number" == typeof o[0].customWidth
          ? (l += ` ${o[0].customWidth}%`)
          : "string" == typeof o[0].customWidth && (l += ` ${o[0].customWidth}`)
        : (l += " 1fr");
    }
    m.gridTemplateColumns = l;
  } else
    m.gridTemplateColumns = `repeat(${
      e.columns[o] || e.columns[t.DESKTOP] || 1
    },1fr)`;
  return m;
};
export { e as calculateCustomGridCss };
//# sourceMappingURL=Grid.utils.js.map
