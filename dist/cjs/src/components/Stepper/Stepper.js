"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  a = require("../../../node_modules/classnames/index.js");
require("./Stepper.scss.js");
var s = require("../../assets/svg-components/Action/index.js"),
  l = require("../../assets/svg-components/Notification/index.js");
function r(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var n,
  c = r(t);
(exports.StepState = void 0),
  ((n = exports.StepState || (exports.StepState = {})).Current = "Current"),
  (n.Upcoming = "Upcoming"),
  (n.Disabled = "Disabled"),
  (n.Issue = "Issue"),
  (n.Completed = "Completed");
const i = (r) => {
  const {
      items: n = [],
      onClick: i,
      isHorizontal: o,
      heading: d,
      className: u = "",
      style: m,
    } = r,
    p = e.__rest(r, [
      "items",
      "onClick",
      "isHorizontal",
      "heading",
      "className",
      "style",
    ]),
    f = !o,
    v = t.useCallback(
      (e, t) => {
        (null == t ? void 0 : t.state) !== exports.StepState.Disabled &&
          (null == i || i({ index: e, item: t }));
      },
      [i]
    ),
    S = t.useCallback((e) => {
      switch (e) {
        case exports.StepState.Current:
          return "current";
        case exports.StepState.Upcoming:
          return "upcoming";
        case exports.StepState.Disabled:
          return "disabled";
        case exports.StepState.Issue:
          return "issue";
        case exports.StepState.Completed:
          return "completed";
        default:
          return "";
      }
    }, []),
    E = t.useCallback((e, t, a, r = "22", n = "#419266", i = {}) => {
      if (t === exports.StepState.Issue)
        return c.default.createElement(l.SvgPriorityHigh, { color: "#1E7B74" });
      if (t === exports.StepState.Completed)
        return c.default.createElement(s.SvgDone, { color: "#1ECCB0" });
      if (!a) return e + 1;
      const o = Object.assign({ style: { color: n, fontSize: `${r}px` } }, i),
        d = a;
      return c.default.createElement(d, Object.assign({}, o));
    }, []);
  return c.default.createElement(
    c.default.Fragment,
    null,
    c.default.createElement(
      "div",
      Object.assign(
        {
          className: a({
            "n-stepper": !0,
            vertical: f,
            horizontal: o,
            [u]: null == u ? void 0 : u.length,
          }),
          style: null != m ? m : {},
        },
        p
      ),
      c.default.createElement(
        "div",
        { className: "n-stepper-container" },
        c.default.createElement(
          "div",
          { className: a({ "heading-progress": d }) },
          d &&
            c.default.createElement("span", { className: "stepper-heading" }, d)
        ),
        n.map((e, t) => {
          var s, l;
          return c.default.createElement(
            "div",
            {
              className: "n-stepper-group",
              onClick: () => v(t, e),
              "data-testid": `stepper-${t}`,
              key: t,
            },
            o &&
              c.default.createElement(
                "div",
                { className: "n-circle-outer-container" },
                c.default.createElement(
                  "div",
                  {
                    className: `n-circle-outer ${S(
                      null == e ? void 0 : e.state
                    )}`,
                  },
                  E(
                    t,
                    e.state,
                    null !== (s = null == e ? void 0 : e.icon) && void 0 !== s
                      ? s
                      : null,
                    e.iconSize,
                    e.iconColor,
                    e.extraIconProps
                  )
                ),
                c.default.createElement(
                  "div",
                  { className: "stepper-header-description" },
                  c.default.createElement(
                    "div",
                    { className: "header-description" },
                    c.default.createElement(
                      "div",
                      { className: `n-text ${S(e.state)}` },
                      e.name
                    )
                  )
                )
              ),
            f &&
              c.default.createElement(
                "div",
                { className: "n-circle-outer-container" },
                c.default.createElement(
                  "div",
                  {
                    className: `n-circle-outer nitrozen-circle-border ${S(
                      e.state
                    )}`,
                  },
                  c.default.createElement(
                    "span",
                    { className: `n-circle-content ${S(e.state)}` },
                    E(
                      t,
                      e.state,
                      null !== (l = null == e ? void 0 : e.icon) && void 0 !== l
                        ? l
                        : null,
                      e.iconSize,
                      e.iconColor,
                      e.extraIconProps
                    )
                  )
                ),
                c.default.createElement(
                  "div",
                  { className: "stepper-header-description" },
                  c.default.createElement(
                    "div",
                    { className: "header-description" },
                    c.default.createElement(
                      "div",
                      { className: `n-text ${S(e.state)}` },
                      e.name
                    )
                  )
                ),
                c.default.createElement("div", {
                  className: a({
                    "n-bar": !0,
                    "completed-bar": t === (null == n ? void 0 : n.length) - 1,
                  }),
                }),
                e.content &&
                  c.default.createElement("div", {
                    className: "content",
                    dangerouslySetInnerHTML: { __html: e.content },
                  })
              )
          );
        })
      )
    )
  );
};
i.defaultProps = { items: [], isHorizontal: !1 };
var o = c.default.memo(i);
exports.default = o;
//# sourceMappingURL=Stepper.js.map
