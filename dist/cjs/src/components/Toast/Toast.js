"use strict";
var e = require("react"),
  t = require("../../assets/svg-components/Content/index.js");
function a(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Toast.scss.js");
var s = a(e);
const r = (a) => {
  const {
    destroy: r,
    content: n,
    title: l,
    duration: o,
    id: i,
    shouldClose: d,
    toastHeaderAlign: c,
    toastWidth: u = "25rem",
    type: m,
    position: f,
  } = a;
  return (
    e.useEffect(() => {
      if (!o) return;
      const e = setTimeout(() => {
        r();
      }, o);
      return () => clearTimeout(e);
    }, [r, o]),
    s.default.createElement(
      "div",
      { style: { width: u }, id: i, className: `toast-wrapper ${m} ${f}` },
      s.default.createElement(
        "div",
        { className: `toast-header ${d ? "space-between" : c}` },
        s.default.createElement("div", null, l),
        d &&
          s.default.createElement(
            "div",
            { className: "undo-container" },
            s.default.createElement("span", { className: "vertical-line" }),
            s.default.createElement(
              "button",
              { className: "cross-btn", onClick: r },
              s.default.createElement(t.SvgUndo, {
                style: { fontSize: "20px", marginRight: "5px" },
              }),
              " UNDO"
            )
          )
      ),
      n && s.default.createElement("div", { className: "toast-body" }, n)
    )
  );
};
r.defaultProps = {
  title: "Title",
  toastHeaderAlign: "center",
  toastWidth: "25rem",
  duration: 2500,
};
var n = e.memo(r, (e, t) => e.id === t.id);
module.exports = n;
//# sourceMappingURL=Toast.js.map
