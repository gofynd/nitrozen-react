import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t from "react";
import l from "../Button/Button.js";
import o from "../../utils/uuids.js";
import "./Dialog.scss.js";
import { useOutsideClick as i } from "../../utils/useOutsideClick.js";
const n = (o) => {
  const {
      id: n,
      title: a,
      DialogIcon: s,
      theme: r,
      children: d,
      positiveButtonLabel: m,
      neutralButtonLabel: c,
      negativeButtonLabel: u,
      onPositiveResponse: b,
      onNeutralResponse: g,
      onNegativeResponse: p,
      isVisible: N,
      className: v,
      style: f,
      closeHandle: h,
    } = o,
    E = e(o, [
      "id",
      "title",
      "DialogIcon",
      "theme",
      "children",
      "positiveButtonLabel",
      "neutralButtonLabel",
      "negativeButtonLabel",
      "onPositiveResponse",
      "onNeutralResponse",
      "onNegativeResponse",
      "isVisible",
      "className",
      "style",
      "closeHandle",
    ]),
    B = m || !1,
    z = null != c ? c : "",
    y = u || !1,
    L = () => {
      null == h || h();
    },
    j = i(L);
  return t.createElement(
    t.Fragment,
    null,
    N &&
      t.createElement(
        "div",
        { id: n },
        t.createElement(
          "div",
          { className: "nitrozen-dialog-backdrop" },
          t.createElement(
            "div",
            Object.assign(
              {
                ref: j,
                className: `nitrozen-dialog ${null != v ? v : ""}`,
                style: null != f ? f : {},
                role: "dialog",
                "aria-labelledby": "id + '_title'",
                "aria-describedby": "id + '_desc'",
              },
              E
            ),
            null != s ? s : null,
            t.createElement(
              "header",
              { className: "nitrozen-dialog-header", id: "id + '_title'" },
              t.createElement("div", { className: "header" }, a)
            ),
            t.createElement(
              "section",
              { className: "nitrozen-dialog-body", id: "id + '_desc'" },
              d
            ),
            t.createElement(
              "footer",
              { className: "nitrozen-dialog-footer" },
              t.createElement(
                "div",
                { className: "nitrozen-dialog-footer-container" },
                B &&
                  t.createElement(
                    l,
                    {
                      theme: `${r || "primary"}`,
                      rounded: !1,
                      stroke: !0,
                      className: "nitrozen-dialog-footer-button-margin",
                      onClick: () => {
                        b && b(), L();
                      },
                    },
                    B
                  ),
                z &&
                  t.createElement(
                    l,
                    {
                      theme: `${r || "primary"}`,
                      rounded: !1,
                      className: "nitrozen-dialog-footer-button-margin",
                      onClick: () => {
                        g && g(), L();
                      },
                    },
                    z
                  ),
                y &&
                  t.createElement(
                    l,
                    {
                      rounded: !1,
                      theme: `${r || "primary"}`,
                      className: "nitrozen-dialog-footer-button-margin",
                      onClick: () => {
                        p && p(), L();
                      },
                    },
                    y
                  )
              )
            )
          )
        )
      )
  );
};
n.defaultProps = {
  id: `nitrozen-dialog-${o()}`,
  title: "",
  theme: null,
  children: null,
  positiveButtonLabel: !1,
  neutralButtonLabel: "",
  negativeButtonLabel: !1,
  isVisible: !1,
};
export { n as default };
//# sourceMappingURL=Dialog.js.map
