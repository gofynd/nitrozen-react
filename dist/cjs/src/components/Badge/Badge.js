"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  a = require("react");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Badge.scss.js");
var t = s(a);
const l = (s) => {
  const {
      size: l,
      kind: n,
      icon: r,
      state: i,
      fill: c,
      labelText: d,
      className: o,
      style: u,
      onClickHandler: b,
    } = s,
    m = e.__rest(s, [
      "size",
      "kind",
      "icon",
      "state",
      "fill",
      "labelText",
      "className",
      "style",
      "onClickHandler",
    ]),
    [f, g] = a.useState(""),
    k = a.useMemo(
      () => ("service" === n ? "nitrogen-badge-background" : ""),
      [n]
    );
  return (
    a.useEffect(() => {
      let e = "";
      switch (i) {
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
      switch ((c && (e += "-fill"), l)) {
        case "small":
          e += " nitrozen-badge-small";
          break;
        case "medium":
        default:
          e += " nitrozen-badge-medium";
          break;
        case "large":
          e += " nitrozen-badge-large";
      }
      g(e);
    }, [i, c, l]),
    t.default.createElement(
      "div",
      { className: k },
      t.default.createElement(
        "div",
        Object.assign(
          {
            style: null != u ? u : {},
            className: `nitrozen-badge ${f}`,
            onClick: b,
          },
          m
        ),
        r
          ? t.default.createElement("span", { className: `${f}-badge-icon` }, r)
          : null,
        t.default.createElement(
          "div",
          { className: "nitrozen-badge-truncate" },
          d
        )
      )
    )
  );
};
l.defaultProps = {
  size: "medium",
  kind: "normal",
  state: "success",
  icon: "",
  fill: !1,
  labelText: "Warn",
  className: "",
  style: {},
  onClickHandler: () => {},
};
var n = a.memo(l);
module.exports = n;
//# sourceMappingURL=Badge.js.map
