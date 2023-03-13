import e, { memo as r } from "react";
import { ScreenTypes as t } from "./Grid.interfaces.js";
import { useGridStyles as i } from "./useGridStyles.js";
import "./Grid.scss.js";
var s = r((r) => {
  var s;
  const { onGridContainerClick: o, children: n, style: a } = r,
    { deviceType: c, customStyles: d } = i(r),
    l =
      (null === (s = r.overflow) || void 0 === s ? void 0 : s[t.MOBILE]) &&
      c === t.MOBILE;
  return e.createElement(
    "div",
    {
      className: "n-grid-container " + (l ? "overflow" : ""),
      style: Object.assign(Object.assign({}, a), d),
      onClick: o,
      "data-testid": "grid-container",
    },
    n
  );
});
export { s as default };
//# sourceMappingURL=Grid.js.map
