"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  a = require("../../utils/uuids.js"),
  n = require("../Button/Button.js");
function d(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var s = d(t);
const i = (a) => {
  const {
    id: d,
    destroy: i,
    heading: r,
    supportText: u,
    duration: l,
    cta1: c,
    cta2: m,
    cta1OnClick: o,
    cta2OnClick: g,
    leftImage: f,
    rightImage: p,
    className: N,
    position: E,
  } = a;
  return (
    e.__rest(a, [
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
    t.useEffect(() => {
      if (!l) return;
      const e = setTimeout(() => {
        i();
      }, l);
      return () => clearTimeout(e);
    }, [i, l]),
    s.default.createElement(
      "div",
      {
        id: d,
        "data-testid": `${d}-nudge`,
        className: `${N || ""} n-nudge-wrapper n-nudge-${E} n-nudge`,
      },
      s.default.createElement(
        "div",
        { className: "n-nudge-top" },
        s.default.createElement(
          "div",
          { className: "n-nudge-left-section" },
          s.default.createElement(
            "div",
            {
              className: "n-nudge-image-container",
              "data-testid": "left-image",
            },
            f
          ),
          s.default.createElement(
            "div",
            { className: "n-nudge-text-wrapper" },
            s.default.createElement(
              "span",
              { className: "n-nudge-header", "data-testid": "nudge-header" },
              r
            ),
            s.default.createElement(
              "span",
              { className: "n-nudge-support", "data-testid": "nudge-support" },
              u
            )
          )
        ),
        s.default.createElement(
          "div",
          { className: "n-nudge-right-section" },
          s.default.createElement(
            "div",
            {
              className: "n-nudge-image-container",
              "data-testid": "right-image",
            },
            p
          )
        )
      ),
      s.default.createElement(
        "div",
        { className: "n-nudge-bottom" },
        c &&
          s.default.createElement(
            n,
            {
              name: c,
              onClick: o,
              className: "n-nudge-cta1",
              "data-testid": "cta1-btn",
            },
            c
          ),
        m &&
          s.default.createElement(
            n,
            { name: m, onClick: g, className: "n-nudge-cta2" },
            m
          )
      )
    )
  );
};
i.defaultProps = {
  id: "nitrozen-menu" + a(),
  duration: 4e3,
  position: "top-right",
};
var r = t.memo(i);
module.exports = r;
//# sourceMappingURL=Nudge.js.map
