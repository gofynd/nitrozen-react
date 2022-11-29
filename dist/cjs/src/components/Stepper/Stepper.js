"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  a = require("../../../node_modules/classnames/index.js"),
  n = require("../../assets/svg-components/Action/index.js"),
  r = require("../../assets/svg-components/Others/index.js");
function l(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var s = l(t);
const c = (l) => {
  const {
      items: c = [],
      activeIndex: o = 1,
      onClick: d,
      maxActiveIndex: m = 0,
      isHorizontal: u,
      heading: p,
      showProgress: f = !1,
      className: v = "",
      style: g,
      progressStrokeColor: E,
    } = l,
    x = e.__rest(l, [
      "items",
      "activeIndex",
      "onClick",
      "maxActiveIndex",
      "isHorizontal",
      "heading",
      "showProgress",
      "className",
      "style",
      "progressStrokeColor",
    ]),
    [b, h] = t.useState(o),
    N = !u,
    z = {
      padding: "6px 9px",
      minWidth: "120px",
      background: "#419266",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: "700",
      whiteSpace: "nowrap",
      cursor: "pointer",
    };
  t.useEffect(() => {
    N && C();
  }, [o]);
  const C = t.useCallback(() => {
      c.map(
        (e) => (
          !e.isCompleted && (e.isCompleted = !1),
          !e.isInactive && (e.isInactive = !1),
          !e.buttonStyles && (e.buttonStyles = {}),
          e
        )
      );
    }, [c]),
    k = t.useCallback(
      (e, t) => {
        N
          ? null == d || d({ index: e, item: t })
          : e <= m && (h(e), null == d || d({ index: e, item: t }));
      },
      [N, d, m]
    ),
    y = t.useCallback((e) => {
      const t = e.split("\n");
      if (1 === t.length) return e;
      const a = t.map((e, t) => s.default.createElement("div", { key: t }, e));
      return a;
    }, []),
    S = t.useCallback((e, t = "22", a = "#419266", n = {}) => {
      if (!e) return s.default.createElement(s.default.Fragment, null);
      const r = Object.assign({ style: { color: a, fontSize: `${t}px` } }, n),
        l = e;
      return s.default.createElement(l, Object.assign({}, r));
    }, []);
  return s.default.createElement(
    s.default.Fragment,
    null,
    s.default.createElement(
      "div",
      Object.assign(
        {
          className: a({
            "nitrozen-stepper": !0,
            vertical: N,
            horizontal: u,
            [v]: null == v ? void 0 : v.length,
          }),
          style: null != g ? g : {},
        },
        x
      ),
      s.default.createElement(
        "div",
        { className: "nitrozen-stepper-container" },
        s.default.createElement(
          "div",
          { className: a({ "heading-progress": p || f }) },
          p &&
            s.default.createElement(
              "span",
              { className: "stepper-heading" },
              p
            ),
          f && N && s.default.createElement(i, { items: c, color: E })
        ),
        c.map((e, t) =>
          s.default.createElement(
            "div",
            {
              className: a({
                "nitrozen-stepper-group": !0,
                "active-group": !I(t),
                "nitrozen-pointer": !N && !I(t),
                "inactive-stepper": N && e.isInactive,
              }),
              onClick: () => k(t, e),
              "data-testid": `stepper-${t}`,
              key: t,
            },
            s.default.createElement(
              "div",
              { className: "nitrozen-flex-center bar-ball-container" },
              u &&
                (function (e) {
                  return e === b;
                })(t) &&
                s.default.createElement(
                  "div",
                  { className: "nitrozen-circle-outer-container" },
                  s.default.createElement(r.SvgCircleProgress, {
                    className: "progress-svg",
                  })
                ),
              u &&
                (function (e) {
                  return e !== b && e <= Math.max(m, b);
                })(t) &&
                s.default.createElement(
                  "div",
                  { className: "nitrozen-cirle-check-container" },
                  s.default.createElement(n.SvgCheckCircle, {
                    className: "completed-svg",
                  })
                ),
              u &&
                I(t) &&
                s.default.createElement(
                  "div",
                  { className: "nitrozen-circle-outer-container" },
                  s.default.createElement(r.SvgCircleDisabled, null)
                ),
              N &&
                e.isCompleted &&
                s.default.createElement(
                  "div",
                  { className: "nitrozen-cirle-check-container" },
                  s.default.createElement("div", {
                    className: "nitrozen-circle-outer",
                  }),
                  s.default.createElement("div", {
                    className: "nitrozen-checkmark",
                  })
                ),
              N &&
                !e.isCompleted &&
                !e.icon &&
                s.default.createElement(
                  "div",
                  {
                    className:
                      "nitrozen-circle-outer-container index-container",
                  },
                  s.default.createElement("div", {
                    className: "nitrozen-circle-outer",
                  }),
                  s.default.createElement(
                    "div",
                    { className: "index-number" },
                    t + 1
                  )
                ),
              N &&
                !e.isCompleted &&
                e.icon &&
                s.default.createElement(
                  "div",
                  {
                    className:
                      "nitrozen-circle-outer-container stepper-icon-container",
                  },
                  s.default.createElement("div", {
                    className: "nitrozen-circle-outer",
                  }),
                  s.default.createElement(
                    "div",
                    { className: "stepper-icon active-stepper" },
                    S(e.icon, e.iconSize, e.iconColor, e.extraIconProps)
                  )
                ),
              t < Math.max(m, b) &&
                s.default.createElement("div", {
                  className: a({
                    "nitrozen-bar nitrozen-active": !0,
                    "completed-bar": N && e.isCompleted,
                  }),
                }),
              t > Math.max(m, b) - 1 &&
                s.default.createElement("div", {
                  className: a({
                    "nitrozen-bar nitrozen-disabled": !0,
                    "completed-bar": N && e.isCompleted,
                  }),
                })
            ),
            s.default.createElement(
              "div",
              { className: "stepper-header-description" },
              s.default.createElement(
                "div",
                { className: "header-description" },
                s.default.createElement(
                  "div",
                  {
                    className: a({
                      "nitrozen-text": !0,
                      "heading-center": !e.description,
                    }),
                  },
                  e.name
                ),
                e.description &&
                  s.default.createElement(
                    "div",
                    { className: "stepper-description" },
                    y(e.description.toString())
                  )
              ),
              N &&
                e.buttonText &&
                !e.isInactive &&
                s.default.createElement(
                  "button",
                  {
                    className: "ripple",
                    "data-testid": `stepper-cta-${t}`,
                    onClick: () => k(t, e),
                    style: Object.assign(Object.assign({}, z), e.buttonStyles),
                  },
                  e.buttonText
                )
            )
          )
        )
      )
    )
  );
  function I(e) {
    return e <= c.length - 1 && e > Math.max(m, b);
  }
};
function i(e) {
  const { items: a = [], color: n } = e,
    r = t.useCallback(
      (e) => {
        const t = a.length;
        let n = 0;
        if (!a) return n;
        if (
          (null == a || a.map((e) => (e.isCompleted && n++, e)),
          "get-steps-completed" === e)
        )
          return `${n}/${t}`;
        const r = 126 - (126 * Math.floor((n / t) * 100)) / 100;
        return Math.floor(r);
      },
      [e.items]
    );
  return s.default.createElement(
    "div",
    { className: "progress-circle" },
    s.default.createElement(
      "div",
      { className: "svg-circle-container" },
      s.default.createElement(
        "svg",
        null,
        s.default.createElement("circle", {
          cx: "25",
          cy: "25",
          r: "20",
          style: { strokeWidth: "3px" },
        }),
        s.default.createElement("circle", {
          style: { strokeDashoffset: r(), stroke: n, strokeWidth: "3px" },
          cx: "25",
          cy: "25",
          r: "20",
        })
      ),
      s.default.createElement("span", null, r("get-steps-completed"))
    )
  );
}
c.defaultProps = {
  items: [],
  maxActiveIndex: -1,
  activeIndex: 0,
  isHorizontal: !1,
  progressStrokeColor: "#419266",
};
var o = s.default.memo(c);
module.exports = o;
//# sourceMappingURL=Stepper.js.map
