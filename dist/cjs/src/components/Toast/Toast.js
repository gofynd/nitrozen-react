"use strict";
var e = require("react"),
  t = require("../../assets/svg-components/Content/index.js");
function a(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var n = a(e);
const s = (a) => {
  const {
    destroy: s,
    content: r,
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
        s();
      }, o);
      return () => clearTimeout(e);
    }, [s, o]),
    n.default.createElement(
      "div",
      { style: { width: u }, id: i, className: `toast-wrapper ${m} ${f}` },
      n.default.createElement(
        "div",
        { className: `toast-header ${d ? "space-between" : c}` },
        n.default.createElement("div", null, l),
        d &&
          n.default.createElement(
            "div",
            { className: "undo-container" },
            n.default.createElement("span", { className: "vertical-line" }),
            n.default.createElement(
              "button",
              { className: "cross-btn", onClick: s },
              n.default.createElement(t.SvgUndo, {
                style: { fontSize: "20px", marginRight: "5px" },
              }),
              " UNDO"
            )
          )
      ),
      r && n.default.createElement("div", { className: "toast-body" }, r)
    )
  );
};
s.defaultProps = {
  title: "Title",
  toastHeaderAlign: "center",
  toastWidth: "25rem",
  duration: 2500,
};
var r = e.memo(s, (e, t) => e.id === t.id);
module.exports = r;
//# sourceMappingURL=Toast.js.map
