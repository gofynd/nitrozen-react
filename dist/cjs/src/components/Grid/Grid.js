"use strict";
var e = require("react"),
  r = require("./Grid.interfaces.js"),
  t = require("./useGridStyles.js");
function i(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Grid.scss.js");
var s = i(e);
var n = e.memo((e) => {
  var i;
  const { onGridContainerClick: n, children: c, style: a } = e,
    { deviceType: o, customStyles: d } = t.useGridStyles(e),
    l =
      (null === (i = e.overflow) || void 0 === i
        ? void 0
        : i[r.ScreenTypes.MOBILE]) && o === r.ScreenTypes.MOBILE;
  return s.default.createElement(
    "div",
    {
      className: "n-grid-container " + (l ? "overflow" : ""),
      style: Object.assign(Object.assign({}, a), d),
      onClick: n,
      "data-testid": "grid-container",
    },
    c
  );
});
module.exports = n;
//# sourceMappingURL=Grid.js.map
