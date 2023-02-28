import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t, { useCallback as n } from "react";
import s from "../../../node_modules/classnames/index.js";
import "./Stepper.scss.js";
import {
  SvgIcExclamation as r,
  SvgIcConfirm as a,
} from "../../assets/svg-components/Nitrozen/index.js";
var l;
!(function (e) {
  (e.Current = "Current"),
    (e.Upcoming = "Upcoming"),
    (e.Disabled = "Disabled"),
    (e.Issue = "Issue"),
    (e.Completed = "Completed");
})(l || (l = {}));
const c = (c) => {
  const {
      items: i = [],
      onClick: o,
      isHorizontal: m,
      heading: d,
      className: u = "",
      style: p,
    } = c,
    v = e(c, [
      "items",
      "onClick",
      "isHorizontal",
      "heading",
      "className",
      "style",
    ]),
    E = !m,
    N = n(
      (e, t) => {
        (null == t ? void 0 : t.state) !== l.Disabled &&
          (null == o || o({ index: e, item: t }));
      },
      [o]
    ),
    g = n((e) => {
      switch (e) {
        case l.Current:
          return "current";
        case l.Upcoming:
          return "upcoming";
        case l.Disabled:
          return "disabled";
        case l.Issue:
          return "issue";
        case l.Completed:
          return "completed";
        default:
          return "";
      }
    }, []),
    C = n((e, n, s, c = "22", i = "#419266", o = {}) => {
      if (n === l.Issue) return t.createElement(r, { color: "#1E7B74" });
      if (n === l.Completed) return t.createElement(a, { color: "#1ECCB0" });
      if (!s) return e + 1;
      const m = Object.assign({ style: { color: i, fontSize: `${c}px` } }, o),
        d = s;
      return t.createElement(d, Object.assign({}, m));
    }, []);
  return t.createElement(
    t.Fragment,
    null,
    t.createElement(
      "div",
      Object.assign(
        {
          className: s({
            "n-stepper": !0,
            vertical: E,
            horizontal: m,
            [u]: null == u ? void 0 : u.length,
          }),
          style: null != p ? p : {},
        },
        v
      ),
      t.createElement(
        "div",
        { className: "n-stepper-container" },
        t.createElement(
          "div",
          { className: s({ "heading-progress": d }) },
          d && t.createElement("span", { className: "stepper-heading" }, d)
        ),
        i.map((e, n) => {
          var r, a;
          return t.createElement(
            "div",
            {
              className: "n-stepper-group",
              onClick: () => N(n, e),
              "data-testid": `stepper-${n}`,
              key: n,
            },
            m &&
              t.createElement(
                "div",
                { className: "n-circle-outer-container" },
                t.createElement(
                  "div",
                  {
                    className: `n-circle-outer ${g(
                      null == e ? void 0 : e.state
                    )}`,
                  },
                  C(
                    n,
                    e.state,
                    null !== (r = null == e ? void 0 : e.icon) && void 0 !== r
                      ? r
                      : null,
                    e.iconSize,
                    e.iconColor,
                    e.extraIconProps
                  )
                ),
                t.createElement(
                  "div",
                  { className: "stepper-header-description" },
                  t.createElement(
                    "div",
                    { className: "header-description" },
                    t.createElement(
                      "div",
                      { className: `n-text ${g(e.state)}` },
                      e.name
                    )
                  )
                )
              ),
            E &&
              t.createElement(
                "div",
                { className: "n-circle-outer-container" },
                t.createElement(
                  "div",
                  {
                    className: `n-circle-outer nitrozen-circle-border ${g(
                      e.state
                    )}`,
                  },
                  t.createElement(
                    "span",
                    { className: `n-circle-content ${g(e.state)}` },
                    C(
                      n,
                      e.state,
                      null !== (a = null == e ? void 0 : e.icon) && void 0 !== a
                        ? a
                        : null,
                      e.iconSize,
                      e.iconColor,
                      e.extraIconProps
                    )
                  )
                ),
                t.createElement(
                  "div",
                  { className: "stepper-header-description" },
                  t.createElement(
                    "div",
                    { className: "header-description" },
                    t.createElement(
                      "div",
                      { className: `n-text ${g(e.state)}` },
                      e.name
                    )
                  )
                ),
                t.createElement("div", {
                  className: s({
                    "n-bar": !0,
                    "completed-bar": n === (null == i ? void 0 : i.length) - 1,
                  }),
                }),
                e.content &&
                  t.createElement("div", {
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
var i = t.memo(c);
export { l as StepState, i as default };
//# sourceMappingURL=Stepper.js.map
