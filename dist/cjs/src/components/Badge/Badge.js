"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var t = s(a);
const l = (s) => {
  const {
      state: l,
      fill: r,
      labelText: n,
      className: c,
      style: i,
      onClickHandler: o,
    } = s,
    d = e.__rest(s, [
      "state",
      "fill",
      "labelText",
      "className",
      "style",
      "onClickHandler",
    ]),
    [b, u] = a.useState("");
  return (
    a.useEffect(() => {
      let e = "";
      switch (l) {
        case "default":
        default:
          e = "nitrozen-badge-default";
          break;
        case "info":
          e = "nitrozen-badge-info";
          break;
        case "success":
          e = "nitrozen-badge-success";
          break;
        case "warn":
          e = "nitrozen-badge-warn";
          break;
        case "error":
          e = "nitrozen-badge-error";
          break;
        case "disable":
          e = "nitrozen-badge-disable";
      }
      r && (e += "-fill"), u(e);
    }, [l, r]),
    t.default.createElement(
      "div",
      Object.assign(
        {
          style: null != i ? i : {},
          className: `nitrozen-badge ${b}`,
          onClick: o,
        },
        d
      ),
      n
    )
  );
};
l.defaultProps = {
  state: "success",
  fill: !1,
  labelText: "Warn",
  className: "",
  style: {},
  onClickHandler: () => {},
};
var r = a.memo(l);
module.exports = r;
//# sourceMappingURL=Badge.js.map
