import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { memo as a, useEffect as n } from "react";
import s from "../../utils/uuids.js";
import i from "../Button/Button.js";
const d = (a) => {
  const {
    id: s,
    destroy: d,
    heading: r,
    supportText: c,
    duration: m,
    cta1: o,
    cta2: l,
    cta1OnClick: u,
    cta2OnClick: g,
    leftImage: p,
    rightImage: N,
    className: E,
    position: f,
  } = a;
  return (
    e(a, [
      "id",
      "destroy",
      "heading",
      "supportText",
      "duration",
      "cta1",
      "cta2",
      "cta1OnClick",
      "cta2OnClick",
      "leftImage",
      "rightImage",
      "className",
      "position",
    ]),
    n(() => {
      if (!m) return;
      const e = setTimeout(() => {
        d();
      }, m);
      return () => clearTimeout(e);
    }, [d, m]),
    t.createElement(
      "div",
      {
        id: s,
        "data-testid": `${s}-nudge`,
        className: `${E || ""} n-nudge-wrapper n-nudge-${f} n-nudge`,
      },
      t.createElement(
        "div",
        { className: "n-nudge-top" },
        t.createElement(
          "div",
          { className: "n-nudge-left-section" },
          t.createElement(
            "div",
            {
              className: "n-nudge-image-container",
              "data-testid": "left-image",
            },
            p
          ),
          t.createElement(
            "div",
            { className: "n-nudge-text-wrapper" },
            t.createElement(
              "span",
              { className: "n-nudge-header", "data-testid": "nudge-header" },
              r
            ),
            t.createElement(
              "span",
              { className: "n-nudge-support", "data-testid": "nudge-support" },
              c
            )
          )
        ),
        t.createElement(
          "div",
          { className: "n-nudge-right-section" },
          t.createElement(
            "div",
            {
              className: "n-nudge-image-container",
              "data-testid": "right-image",
            },
            N
          )
        )
      ),
      t.createElement(
        "div",
        { className: "n-nudge-bottom" },
        o &&
          t.createElement(
            i,
            {
              name: o,
              onClick: u,
              className: "n-nudge-cta1",
              "data-testid": "cta1-btn",
            },
            o
          ),
        l &&
          t.createElement(
            i,
            { name: l, onClick: g, className: "n-nudge-cta2" },
            l
          )
      )
    )
  );
};
d.defaultProps = {
  id: "nitrozen-menu" + s(),
  duration: 4e3,
  position: "top-right",
};
var r = a(d);
export { r as default };
//# sourceMappingURL=Nudge.js.map
