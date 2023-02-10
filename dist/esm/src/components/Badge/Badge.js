import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import a, {
  memo as s,
  useState as l,
  useMemo as n,
  useEffect as t,
} from "react";
import "./Badge.scss.js";
const r = (s) => {
  const {
      size: r,
      kind: i,
      icon: c,
      state: d,
      fill: o,
      labelText: b,
      className: m,
      style: g,
      onClickHandler: u,
    } = s,
    k = e(s, [
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
    [f, z] = l(""),
    N = n(() => ("service" === i ? "nitrogen-badge-background" : ""), [i]);
  return (
    t(() => {
      let e = "";
      switch (d) {
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
      switch ((o && (e += "-fill"), r)) {
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
      z(e);
    }, [d, o, r]),
    a.createElement(
      "div",
      { className: N },
      a.createElement(
        "div",
        Object.assign(
          {
            style: null != g ? g : {},
            className: `nitrozen-badge ${f}`,
            onClick: u,
          },
          k
        ),
        c ? a.createElement("span", { className: `${f}-badge-icon` }, c) : null,
        a.createElement("div", { className: "nitrozen-badge-truncate" }, b)
      )
    )
  );
};
r.defaultProps = {
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
var i = s(r);
export { i as default };
//# sourceMappingURL=Badge.js.map
