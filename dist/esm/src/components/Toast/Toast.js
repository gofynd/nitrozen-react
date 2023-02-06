import t, { memo as e, useEffect as a } from "react";
import "./Toast.scss.js";
const s = (e) => {
  const {
    destroy: s,
    content: i = "Support text",
    title: o,
    duration: r,
    id: n,
    shouldClose: l,
    leftIconPosition: c,
    rightIconPosition: m,
    toastWidth: d = "38.4rem",
    leftImage: g,
    rightImage: p,
    position: h,
  } = e;
  return (
    a(() => {
      if (!r) return;
      const t = setTimeout(() => {
        s();
      }, r);
      return () => clearTimeout(t);
    }, [s, r]),
    t.createElement(
      "div",
      {
        style: { width: d },
        id: n,
        className: `n-toast-wrapper n-toast-wrapper-${h}`,
      },
      t.createElement(
        "div",
        { className: "n-toast-left-container" },
        t.createElement(
          "div",
          {
            className: `n-toast-left-image n-toast-${c}`,
            "data-testid": "left-image",
          },
          g
        ),
        t.createElement(
          "div",
          { className: "n-toast-title-container" },
          t.createElement(
            "div",
            {
              className: "n-toast-header " + (l ? "n-toast-space-between" : ""),
            },
            o
          ),
          i &&
            t.createElement(
              "div",
              {
                className: "n-toast-body " + (l ? "n-toast-space-between" : ""),
              },
              i
            )
        )
      ),
      l &&
        t.createElement(
          "div",
          {
            className: `n-toast-right-image n-toast-${m}`,
            "data-testid": "right-image",
            onClick: s,
          },
          p
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
  leftImage: t.createElement("img", {
    src: require("../../assets/left-placeholder.svg"),
  }),
  rightImage: t.createElement("img", {
    src: require("../../assets/right-placeholder.svg"),
  }),
  duration: 2500,
};
var i = e(s, (t, e) => t.id === e.id);
export { i as default };
//# sourceMappingURL=Toast.js.map
