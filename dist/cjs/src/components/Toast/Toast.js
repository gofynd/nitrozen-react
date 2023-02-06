"use strict";
var t = require("react");
function e(t) {
  return t && "object" == typeof t && "default" in t ? t : { default: t };
}
require("./Toast.scss.js");
var a = e(t);
const s = (e) => {
  const {
    destroy: s,
    content: i = "Support text",
    title: o,
    duration: r,
    id: n,
    shouldClose: l,
    leftIconPosition: c,
    rightIconPosition: d,
    toastWidth: m = "38.4rem",
    leftImage: u,
    rightImage: f,
    position: g,
  } = e;
  return (
    t.useEffect(() => {
      if (!r) return;
      const t = setTimeout(() => {
        s();
      }, r);
      return () => clearTimeout(t);
    }, [s, r]),
    a.default.createElement(
      "div",
      {
        style: { width: m },
        id: n,
        className: `n-toast-wrapper n-toast-wrapper-${g}`,
      },
      a.default.createElement(
        "div",
        { className: "n-toast-left-container" },
        a.default.createElement(
          "div",
          {
            className: `n-toast-left-image n-toast-${c}`,
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
            o
          ),
          i &&
            a.default.createElement(
              "div",
              {
                className: "n-toast-body " + (l ? "n-toast-space-between" : ""),
              },
              i
            )
        )
      ),
      l &&
        a.default.createElement(
          "div",
          {
            className: `n-toast-right-image n-toast-${d}`,
            "data-testid": "right-image",
            onClick: s,
          },
          f
        )
    )
  );
};
s.defaultProps = {
  title: "Title",
  toastWidth: "38.4rem",
  position: "top-center",
  leftIconPosition: "top-align",
  rightIconPosition: "top-align",
  shouldClose: !1,
  leftImage: a.default.createElement("img", {
    src: require("../../assets/left-placeholder.svg"),
  }),
  rightImage: a.default.createElement("img", {
    src: require("../../assets/right-placeholder.svg"),
  }),
  duration: 2500,
};
var i = t.memo(s, (t, e) => t.id === e.id);
module.exports = i;
//# sourceMappingURL=Toast.js.map
