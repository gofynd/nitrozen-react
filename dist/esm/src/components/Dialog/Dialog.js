import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t from "react";
import { SvgClose as a } from "../../assets/svg-components/Navigation/index.js";
import l from "../../utils/uuids.js";
import i from "../Button/Button.js";
import "./Dialog.scss.js";
const s = (l) => {
  const {
      id: s,
      kind: n,
      title: o,
      size: d,
      theme: r,
      children: c,
      positiveButtonLabel: m,
      negativeButtonLabel: g,
      onPositiveResponse: p,
      onNegativeResponse: u,
      isVisible: b,
      isClosable: v,
      className: h,
      style: N,
      closeHandle: E,
    } = l,
    f = e(l, [
      "id",
      "kind",
      "title",
      "size",
      "theme",
      "children",
      "positiveButtonLabel",
      "negativeButtonLabel",
      "onPositiveResponse",
      "onNegativeResponse",
      "isVisible",
      "isClosable",
      "className",
      "style",
      "closeHandle",
    ]),
    k = () => {
      null == E || E();
    };
  return t.createElement(
    t.Fragment,
    null,
    b &&
      t.createElement(
        "div",
        { id: s },
        t.createElement(
          "div",
          { className: "n-dialog-backdrop" },
          t.createElement(
            "div",
            Object.assign(
              {
                className: ` n-${n} ${
                  "s" === d
                    ? `n-wrapper-width-s n-dialog ${null != h ? h : ""}`
                    : `n-wrapper-width-m n-dialog ${null != h ? h : ""}`
                }`,
                style: null != N ? N : {},
                role: "dialog",
                "aria-labelledby": "id + '_title'",
                "aria-describedby": "id + '_desc'",
              },
              f
            ),
            t.createElement(
              "div",
              { className: "n-closebtn-container" },
              v && t.createElement(a, { className: "n-closebtn", onClick: k })
            ),
            t.createElement(
              "header",
              { className: "n-dialog-header", id: "id + '_title'" },
              "string" == typeof o
                ? t.createElement("h5", { className: "header" }, o)
                : t.createElement(
                    "div",
                    { className: "n-header-card" },
                    t.createElement(
                      "span",
                      { className: "n-header-card-1" },
                      " ",
                      o.helperBlock.text
                    ),
                    t.createElement(
                      "span",
                      { className: "n-header-card-2" },
                      " ",
                      o.titleBlock.text
                    )
                  )
            ),
            t.createElement(
              "section",
              { className: "n-dialog-body", id: "id + '_desc'" },
              c
            ),
            t.createElement(
              "footer",
              {
                className:
                  "dialog" === n
                    ? "s" === d
                      ? "n-dialog-footer-size"
                      : "n-dialog-footer"
                    : "acknowledgement" === n
                    ? "n-dialog-footer-size"
                    : void 0,
              },
              "dialog" === n &&
                t.createElement(
                  i,
                  {
                    className: "n-dialog-footer-btn-spacing",
                    theme: "secondary",
                    size: "medium",
                    onClick: () => {
                      u && u(), k();
                    },
                  },
                  g
                ),
              ("dialog" === n || "acknowledgement" === n) &&
                t.createElement(
                  i,
                  {
                    theme: "primary",
                    size: "medium",
                    onClick: () => {
                      p && p(), k();
                    },
                    className:
                      "dialog" == n && "s" !== d ? "n-dialog-positive" : "",
                  },
                  m
                )
            )
          )
        )
      )
  );
};
s.defaultProps = {
  id: `n-dialog-${l()}`,
  title: "",
  theme: null,
  children: null,
  positiveButtonLabel: !1,
  negativeButtonLabel: !1,
  isVisible: !1,
};
export { s as default };
//# sourceMappingURL=Dialog.js.map
