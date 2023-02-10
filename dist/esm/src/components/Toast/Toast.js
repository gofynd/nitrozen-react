import t, { memo as e, useEffect as a } from "react";
import "./Toast.scss.js";
const o = (e) => {
  const {
    destroy: o,
    content: s = "Support text",
    title: i,
    duration: n,
    id: r,
    shouldClose: l,
    leftIconPosition: c,
    rightIconPosition: d,
    toastWidth: m = "38.4rem",
    leftImage: p,
    rightImage: g,
    position: u,
  } = e;
  return (
    a(() => {
      if (!n) return;
      const t = setTimeout(() => {
        o();
      }, n);
      return () => clearTimeout(t);
    }, [o, n]),
    t.createElement(
      "div",
      {
        style: { width: m },
        id: r,
        className: `n-toast-wrapper n-toast-wrapper-${u}`,
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
          p
        ),
        t.createElement(
          "div",
          { className: "n-toast-title-container" },
          t.createElement(
            "div",
            {
              className: "n-toast-header " + (l ? "n-toast-space-between" : ""),
            },
            i
          ),
          s &&
            t.createElement(
              "div",
              {
                className: "n-toast-body " + (l ? "n-toast-space-between" : ""),
              },
              s
            )
        )
      ),
      l &&
        t.createElement(
          "div",
          {
            className: `n-toast-right-image n-toast-${d}`,
            "data-testid": "right-image",
            onClick: o,
          },
          g
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
var s = e(o, (t, e) => t.id === e.id);
export { s as default };
//# sourceMappingURL=Toast.js.map
