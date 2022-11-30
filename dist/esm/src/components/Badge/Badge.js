import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import a, { memo as s, useState as l, useEffect as t } from "react";
import "./Badge.scss.js";
const r = (s) => {
  const {
      state: r,
      fill: n,
      labelText: c,
      className: i,
      style: o,
      onClickHandler: d,
    } = s,
    b = e(s, [
      "state",
      "fill",
      "labelText",
      "className",
      "style",
      "onClickHandler",
    ]),
    [f, m] = l("");
  return (
    t(() => {
      let e = "";
      switch (r) {
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
      n && (e += "-fill"), m(e);
    }, [r, n]),
    a.createElement(
      "div",
      Object.assign(
        {
          style: null != o ? o : {},
          className: `nitrozen-badge ${f}`,
          onClick: d,
        },
        b
      ),
      c
    )
  );
};
r.defaultProps = {
  state: "success",
  fill: !1,
  labelText: "Warn",
  className: "",
  style: {},
  onClickHandler: () => {},
};
var n = s(r);
export { n as default };
//# sourceMappingURL=Badge.js.map
