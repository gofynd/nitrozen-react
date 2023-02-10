"use strict";
var t = require("react");
function e(t) {
  return t && "object" == typeof t && "default" in t ? t : { default: t };
}
require("./Toast.scss.js");
var a = e(t);
const o = (e) => {
  const {
    destroy: o,
    content: s = "Support text",
    title: i,
    duration: n,
    id: r,
    shouldClose: l,
    leftIconPosition: d,
    rightIconPosition: c,
    toastWidth: m = "38.4rem",
    leftImage: u,
    rightImage: f,
    position: p,
  } = e;
  return (
    t.useEffect(() => {
      if (!n) return;
      const t = setTimeout(() => {
        o();
      }, n);
      return () => clearTimeout(t);
    }, [o, n]),
    a.default.createElement(
      "div",
      {
        style: { width: m },
        id: r,
        className: `n-toast-wrapper n-toast-wrapper-${p}`,
      },
      a.default.createElement(
        "div",
        { className: "n-toast-left-container" },
        a.default.createElement(
          "div",
          {
            className: `n-toast-left-image n-toast-${d}`,
            "data-testid": "left-image",
          },
          u
        ),
        a.default.createElement(
          "div",
          { className: "n-toast-title-container" },
          a.default.createElement(
            "div",
            {
              className: "n-toast-header " + (l ? "n-toast-space-between" : ""),
            },
            i
          ),
          s &&
            a.default.createElement(
              "div",
              {
                className: "n-toast-body " + (l ? "n-toast-space-between" : ""),
              },
              s
            )
        )
      ),
      l &&
        a.default.createElement(
          "div",
          {
            className: `n-toast-right-image n-toast-${c}`,
            "data-testid": "right-image",
            onClick: o,
          },
          f
        )
    )
  );
};
o.defaultProps = {
  title: "Title",
  toastWidth: "38.4rem",
  position: "top-center",
  leftIconPosition: "top-align",
  rightIconPosition: "top-align",
  shouldClose: !1,
  duration: 2500,
};
var s = t.memo(o, (t, e) => t.id === e.id);
module.exports = s;
//# sourceMappingURL=Toast.js.map
