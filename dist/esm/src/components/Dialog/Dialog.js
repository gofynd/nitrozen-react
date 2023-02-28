import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t from "react";
import { SvgIcClose as a } from "../../assets/svg-components/Nitrozen/index.js";
import l from "../../utils/uuids.js";
import i from "../Button/Button.js";
import "./Dialog.scss.js";
const n = (l) => {
  const {
      id: n,
      kind: s,
      title: o,
      size: d,
      theme: r,
      children: c,
      positiveButtonLabel: m,
      negativeButtonLabel: g,
      onPositiveResponse: p,
      onNegativeResponse: u,
      isVisible: b,
      isClosable: h,
      className: v,
      style: N,
      closeHandle: E,
    } = l,
    k = e(l, [
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
    f = () => {
      null == E || E();
    };
  return t.createElement(
    t.Fragment,
    null,
    b &&
      t.createElement(
        "div",
        { id: n },
        t.createElement(
          "div",
          { className: "n-dialog-backdrop" },
          t.createElement(
            "div",
            Object.assign(
              {
                className:
                  "s" === d
                    ? `n-wrapper-width-s n-dialog ${null != v ? v : ""}`
                    : `n-wrapper-width-m n-dialog ${null != v ? v : ""}`,
                style: null != N ? N : {},
                role: "dialog",
                "aria-labelledby": "id + '_title'",
                "aria-describedby": "id + '_desc'",
              },
              k
            ),
            t.createElement(
              "div",
              { className: "n-closebtn-container" },
              t.createElement(
                "header",
                {
                  className:
                    "acknowledgement" === s
                      ? "n-dialog-header-acknowlegdement n-dialog-header"
                      : "n-dialog-header",
                  id: "id + '_title'",
                },
                "string" == typeof o
                  ? t.createElement(
                      "h5",
                      {
                        className:
                          "acknowledgement" === s
                            ? "acknowlegdement-header header"
                            : "header",
                      },
                      o
                    )
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
              h && t.createElement(a, { className: "n-closebtn", onClick: f })
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
                  "dialog" === s
                    ? "s" === d
                      ? "n-dialog-footer-size"
                      : "n-dialog-footer"
                    : "acknowledgement" === s
                    ? "n-dialog-footer-size"
                    : void 0,
              },
              "dialog" === s &&
                t.createElement(
                  i,
                  {
                    className: "n-dialog-footer-btn-spacing",
                    theme: "secondary",
                    size: "medium",
                    onClick: () => {
                      u && u(), f();
                    },
                  },
                  g
                ),
              ("dialog" === s || "acknowledgement" === s) &&
                t.createElement(
                  i,
                  {
                    theme: "primary",
                    size: "medium",
                    onClick: () => {
                      p && p(), f();
                    },
                  },
                  m
                )
            )
          )
        )
      )
  );
};
n.defaultProps = {
  id: `n-dialog-${l()}`,
  title: "",
  theme: null,
  children: null,
  positiveButtonLabel: !1,
  negativeButtonLabel: !1,
  isVisible: !1,
};
export { n as default };
//# sourceMappingURL=Dialog.js.map
