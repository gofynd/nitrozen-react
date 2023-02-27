"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  a = require("../../../node_modules/classnames/index.js");
require("./Stepper.scss.js");
var l = require("../../assets/svg-components/Nitrozen/index.js");
function s(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r,
  n = s(t);
(exports.StepState = void 0),
  ((r = exports.StepState || (exports.StepState = {})).Current = "Current"),
  (r.Upcoming = "Upcoming"),
  (r.Disabled = "Disabled"),
  (r.Issue = "Issue"),
  (r.Completed = "Completed");
const c = (s) => {
  const {
      items: r = [],
      onClick: c,
      isHorizontal: i,
      heading: o,
      className: d = "",
      style: u,
    } = s,
    m = e.__rest(s, [
      "items",
      "onClick",
      "isHorizontal",
      "heading",
      "className",
      "style",
    ]),
    p = !i,
    f = t.useCallback(
      (e, t) => {
        (null == t ? void 0 : t.state) !== exports.StepState.Disabled &&
          (null == c || c({ index: e, item: t }));
      },
      [c]
    ),
    v = t.useCallback((e) => {
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
    S = t.useCallback((e, t, a, s = "22", r = "#419266", c = {}) => {
      if (t === exports.StepState.Issue)
        return n.default.createElement(l.SvgIcExclamation, {
          color: "#1E7B74",
        });
      if (t === exports.StepState.Completed)
        return n.default.createElement(l.SvgIcConfirm, { color: "#1ECCB0" });
      if (!a) return e + 1;
      const i = Object.assign({ style: { color: r, fontSize: `${s}px` } }, c),
        o = a;
      return n.default.createElement(o, Object.assign({}, i));
    }, []);
  return n.default.createElement(
    n.default.Fragment,
    null,
    n.default.createElement(
      "div",
      Object.assign(
        {
          className: a({
            "n-stepper": !0,
            vertical: p,
            horizontal: i,
            [d]: null == d ? void 0 : d.length,
          }),
          style: null != u ? u : {},
        },
        m
      ),
      n.default.createElement(
        "div",
        { className: "n-stepper-container" },
        n.default.createElement(
          "div",
          { className: a({ "heading-progress": o }) },
          o &&
            n.default.createElement("span", { className: "stepper-heading" }, o)
        ),
        r.map((e, t) => {
          var l, s;
          return n.default.createElement(
            "div",
            {
              className: "n-stepper-group",
              onClick: () => f(t, e),
              "data-testid": `stepper-${t}`,
              key: t,
            },
            i &&
              n.default.createElement(
                "div",
                { className: "n-circle-outer-container" },
                n.default.createElement(
                  "div",
                  {
                    className: `n-circle-outer ${v(
                      null == e ? void 0 : e.state
                    )}`,
                  },
                  S(
                    t,
                    e.state,
                    null !== (l = null == e ? void 0 : e.icon) && void 0 !== l
                      ? l
                      : null,
                    e.iconSize,
                    e.iconColor,
                    e.extraIconProps
                  )
                ),
                n.default.createElement(
                  "div",
                  { className: "stepper-header-description" },
                  n.default.createElement(
                    "div",
                    { className: "header-description" },
                    n.default.createElement(
                      "div",
                      { className: `n-text ${v(e.state)}` },
                      e.name
                    )
                  )
                )
              ),
            p &&
              n.default.createElement(
                "div",
                { className: "n-circle-outer-container" },
                n.default.createElement(
                  "div",
                  {
                    className: `n-circle-outer nitrozen-circle-border ${v(
                      e.state
                    )}`,
                  },
                  n.default.createElement(
                    "span",
                    { className: `n-circle-content ${v(e.state)}` },
                    S(
                      t,
                      e.state,
                      null !== (s = null == e ? void 0 : e.icon) && void 0 !== s
                        ? s
                        : null,
                      e.iconSize,
                      e.iconColor,
                      e.extraIconProps
                    )
                  )
                ),
                n.default.createElement(
                  "div",
                  { className: "stepper-header-description" },
                  n.default.createElement(
                    "div",
                    { className: "header-description" },
                    n.default.createElement(
                      "div",
                      { className: `n-text ${v(e.state)}` },
                      e.name
                    )
                  )
                ),
                n.default.createElement("div", {
                  className: a({
                    "n-bar": !0,
                    "completed-bar": t === (null == r ? void 0 : r.length) - 1,
                  }),
                }),
                e.content &&
                  n.default.createElement("div", {
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
c.defaultProps = { items: [], isHorizontal: !1 };
var i = n.default.memo(c);
exports.default = i;
//# sourceMappingURL=Stepper.js.map
