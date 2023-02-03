import e, { memo as t, useEffect as a } from "react";
import { SvgUndo as s } from "../../assets/svg-components/Content/index.js";
import "./Toast.scss.js";
const n = (t) => {
  const {
    destroy: n,
    content: r,
    title: o,
    duration: i,
    id: l,
    shouldClose: c,
    toastHeaderAlign: m,
    toastWidth: d = "25rem",
    type: p,
    position: u,
  } = t;
  return (
    a(() => {
      if (!i) return;
      const e = setTimeout(() => {
        n();
      }, i);
      return () => clearTimeout(e);
    }, [n, i]),
    e.createElement(
      "div",
      { style: { width: d }, id: l, className: `toast-wrapper ${p} ${u}` },
      e.createElement(
        "div",
        { className: `toast-header ${c ? "space-between" : m}` },
        e.createElement("div", null, o),
        c &&
          e.createElement(
            "div",
            { className: "undo-container" },
            e.createElement("span", { className: "vertical-line" }),
            e.createElement(
              "button",
              { className: "cross-btn", onClick: n },
              e.createElement(s, {
                style: { fontSize: "20px", marginRight: "5px" },
              }),
              " UNDO"
            )
          )
      ),
      r && e.createElement("div", { className: "toast-body" }, r)
    )
  );
};
n.defaultProps = {
  title: "Title",
  toastHeaderAlign: "center",
  toastWidth: "25rem",
  duration: 2500,
};
var r = t(n, (e, t) => e.id === t.id);
export { r as default };
//# sourceMappingURL=Toast.js.map
