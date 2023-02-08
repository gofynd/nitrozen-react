import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useState as n, useEffect as r, useCallback as s } from "react";
import a from "../../../node_modules/classnames/index.js";
import "./Stepper.scss.js";
import { SvgCheckCircle as i } from "../../assets/svg-components/Action/index.js";
import {
  SvgCircleProgress as c,
  SvgCircleDisabled as o,
} from "../../assets/svg-components/Others/index.js";
const l = (l) => {
  const {
      items: p = [],
      activeIndex: d = 1,
      onClick: u,
      maxActiveIndex: v = 0,
      isHorizontal: E,
      heading: g,
      showProgress: x = !1,
      className: N = "",
      style: h,
      progressStrokeColor: z,
    } = l,
    f = e(l, [
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
    [b, k] = n(d),
    C = !E,
    y = {
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
  r(() => {
    C && S();
  }, [d]);
  const S = s(() => {
      p.map(
        (e) => (
          !e.isCompleted && (e.isCompleted = !1),
          !e.isInactive && (e.isInactive = !1),
          !e.buttonStyles && (e.buttonStyles = {}),
          e
        )
      );
    }, [p]),
    I = s(
      (e, t) => {
        C
          ? null == u || u({ index: e, item: t })
          : e <= v && (k(e), null == u || u({ index: e, item: t }));
      },
      [C, u, v]
    ),
    j = s((e) => {
      const n = e.split("\n");
      if (1 === n.length) return e;
      return n.map((e, n) => t.createElement("div", { key: n }, e));
    }, []),
    M = s((e, n = "22", r = "#419266", s = {}) => {
      if (!e) return t.createElement(t.Fragment, null);
      const a = Object.assign({ style: { color: r, fontSize: `${n}px` } }, s),
        i = e;
      return t.createElement(i, Object.assign({}, a));
    }, []);
  return t.createElement(
    t.Fragment,
    null,
    t.createElement(
      "div",
      Object.assign(
        {
          className: a({
            "nitrozen-stepper": !0,
            vertical: C,
            horizontal: E,
            [N]: null == N ? void 0 : N.length,
          }),
          style: null != h ? h : {},
        },
        f
      ),
      t.createElement(
        "div",
        { className: "nitrozen-stepper-container" },
        t.createElement(
          "div",
          { className: a({ "heading-progress": g || x }) },
          g && t.createElement("span", { className: "stepper-heading" }, g),
          x && C && t.createElement(m, { items: p, color: z })
        ),
        p.map((e, n) =>
          t.createElement(
            "div",
            {
              className: a({
                "nitrozen-stepper-group": !0,
                "active-group": !O(n),
                "nitrozen-pointer": !C && !O(n),
                "inactive-stepper": C && e.isInactive,
              }),
              onClick: () => I(n, e),
              "data-testid": `stepper-${n}`,
              key: n,
            },
            t.createElement(
              "div",
              { className: "nitrozen-flex-center bar-ball-container" },
              E &&
                (function (e) {
                  return e === b;
                })(n) &&
                t.createElement(
                  "div",
                  { className: "nitrozen-circle-outer-container" },
                  t.createElement(c, { className: "progress-svg" })
                ),
              E &&
                (function (e) {
                  return e !== b && e <= Math.max(v, b);
                })(n) &&
                t.createElement(
                  "div",
                  { className: "nitrozen-cirle-check-container" },
                  t.createElement(i, { className: "completed-svg" })
                ),
              E &&
                O(n) &&
                t.createElement(
                  "div",
                  { className: "nitrozen-circle-outer-container" },
                  t.createElement(o, null)
                ),
              C &&
                e.isCompleted &&
                t.createElement(
                  "div",
                  { className: "nitrozen-cirle-check-container" },
                  t.createElement("div", {
                    className: "nitrozen-circle-outer",
                  }),
                  t.createElement("div", { className: "nitrozen-checkmark" })
                ),
              C &&
                !e.isCompleted &&
                !e.icon &&
                t.createElement(
                  "div",
                  {
                    className:
                      "nitrozen-circle-outer-container index-container",
                  },
                  t.createElement("div", {
                    className: "nitrozen-circle-outer",
                  }),
                  t.createElement("div", { className: "index-number" }, n + 1)
                ),
              C &&
                !e.isCompleted &&
                e.icon &&
                t.createElement(
                  "div",
                  {
                    className:
                      "nitrozen-circle-outer-container stepper-icon-container",
                  },
                  t.createElement("div", {
                    className: "nitrozen-circle-outer",
                  }),
                  t.createElement(
                    "div",
                    { className: "stepper-icon active-stepper" },
                    M(e.icon, e.iconSize, e.iconColor, e.extraIconProps)
                  )
                ),
              n < Math.max(v, b) &&
                t.createElement("div", {
                  className: a({
                    "nitrozen-bar nitrozen-active": !0,
                    "completed-bar": C && e.isCompleted,
                  }),
                }),
              n > Math.max(v, b) - 1 &&
                t.createElement("div", {
                  className: a({
                    "nitrozen-bar nitrozen-disabled": !0,
                    "completed-bar": C && e.isCompleted,
                  }),
                })
            ),
            t.createElement(
              "div",
              { className: "stepper-header-description" },
              t.createElement(
                "div",
                { className: "header-description" },
                t.createElement(
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
                  t.createElement(
                    "div",
                    { className: "stepper-description" },
                    j(e.description.toString())
                  )
              ),
              C &&
                e.buttonText &&
                !e.isInactive &&
                t.createElement(
                  "button",
                  {
                    className: "ripple",
                    "data-testid": `stepper-cta-${n}`,
                    onClick: () => I(n, e),
                    style: Object.assign(Object.assign({}, y), e.buttonStyles),
                  },
                  e.buttonText
                )
            )
          )
        )
      )
    )
  );
  function O(e) {
    return e <= p.length - 1 && e > Math.max(v, b);
  }
};
function m(e) {
  const { items: n = [], color: r } = e,
    a = s(
      (e) => {
        const t = n.length;
        let r = 0;
        if (!n) return r;
        if (
          (null == n || n.map((e) => (e.isCompleted && r++, e)),
          "get-steps-completed" === e)
        )
          return `${r}/${t}`;
        const s = 126 - (126 * Math.floor((r / t) * 100)) / 100;
        return Math.floor(s);
      },
      [e.items]
    );
  return t.createElement(
    "div",
    { className: "progress-circle" },
    t.createElement(
      "div",
      { className: "svg-circle-container" },
      t.createElement(
        "svg",
        null,
        t.createElement("circle", {
          cx: "25",
          cy: "25",
          r: "20",
          style: { strokeWidth: "3px" },
        }),
        t.createElement("circle", {
          style: { strokeDashoffset: a(), stroke: r, strokeWidth: "3px" },
          cx: "25",
          cy: "25",
          r: "20",
        })
      ),
      t.createElement("span", null, a("get-steps-completed"))
    )
  );
}
l.defaultProps = {
  items: [],
  maxActiveIndex: -1,
  activeIndex: 0,
  isHorizontal: !1,
  progressStrokeColor: "#419266",
};
var p = t.memo(l);
export { p as default };
//# sourceMappingURL=Stepper.js.map
