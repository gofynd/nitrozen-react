"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  n = require("react"),
  t = require("../../assets/svg-components/Nitrozen/index.js");
require("./Menu.scss.js");
var l = require("../../utils/uuids.js");
function o(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var r = o(n);
const i = (t) => {
  const {
      id: o,
      className: i,
      mode: c,
      position: a,
      inverted: s,
      icon: u,
      maxHeight: d,
      open: m,
      onChangeMenuItem: v,
      onOpen: f,
      onClose: g,
      anchorEl: h,
      style: p,
      children: b,
      selectedIndex: k,
    } = t,
    E = e.__rest(t, [
      "id",
      "className",
      "mode",
      "position",
      "inverted",
      "icon",
      "maxHeight",
      "open",
      "onChangeMenuItem",
      "onOpen",
      "onClose",
      "anchorEl",
      "style",
      "children",
      "selectedIndex",
    ]),
    [y, x] = n.useState(m),
    [N, C] = n.useState(!1);
  let I = n.useRef(null);
  const j = n.useRef(null),
    $ = `n-menu-block-ul-${l()}`;
  n.useEffect(() => {
    x(m);
  }, [m]),
    n.useEffect(
      () => (y ? (null == f ? void 0 : f()) : null == g ? void 0 : g()),
      [y]
    ),
    n.useEffect(() => {
      if (
        ((null == h ? void 0 : h.current) && C(!0),
        "undefined" != typeof document)
      )
        return (
          document.addEventListener("click", M),
          () => {
            document.removeEventListener("click", M);
          }
        );
    }, []);
  const M = (e) => {
    !(null == I ? void 0 : I.current) ||
    I.current.contains(e.target) ||
    (null == h ? void 0 : h.current)
      ? (null == h ? void 0 : h.current) &&
        !h.current.contains(e.target) &&
        x(!1)
      : x(!1);
  };
  return r.default.createElement(
    "div",
    Object.assign({ className: `n-menu-container ${i}`, ref: I, id: o }, E),
    N
      ? null
      : r.default.createElement(
          "span",
          {
            ref: j,
            "data-testid": "n-menu-block-toggle",
            className: `n-menu-block-toggle \n          ${
              "horizontal" === c ? "n-menu-block-toggle-horizontal" : ""
            }\n          ${s ? "n-menu-block-toggle-inverted" : ""}`,
            onClick: () => {
              x(!y);
            },
          },
          r.default.createElement(r.default.Fragment, null, u)
        ),
    r.default.createElement(
      "ul",
      {
        id: $,
        className:
          "n-menu-block " + (y ? "n-menu-block-open" : "n-menu-block-close"),
        "data-testid": "n-menu-block",
        onClick: (e) => {
          const n = ((e) => {
            var n, t;
            const l =
                null === (n = document.getElementById($)) || void 0 === n
                  ? void 0
                  : n.childNodes,
              o = Array.from(l),
              r =
                null === (t = null == e ? void 0 : e.target) || void 0 === t
                  ? void 0
                  : t.parentElement,
              i = o.indexOf(r);
            return r.className.includes("n-menu-block-item-disabled") ||
              r.className.includes("n-menu-block-item-heading")
              ? -1
              : i;
          })(e);
          n > -1 && (null == v || v(e.target.innerHTML, n), x(!1));
        },
        style: (() => {
          var e;
          const n = Object.assign({}, p);
          switch (
            ((null === (e = null == j ? void 0 : j.current) || void 0 === e
              ? void 0
              : e.parentElement) && !h
              ? (j.current.parentElement.style.position = "relative")
              : (null == h ? void 0 : h.current) &&
                ((h.current.style.position = "relative"),
                (h.current.style.height = "fit-content")),
            a)
          ) {
            case "top":
              n.bottom = "100%";
              break;
            case "bottom":
              n.top = "100%";
          }
          switch (c) {
            case "horizontal":
              n.left = "100%";
              break;
            case "vertical":
              n.right = "100%";
              break;
            case "aligned":
              n.left = "0%";
          }
          return d && (n.height = `${d}px`), n;
        })(),
      },
      b
    )
  );
};
i.defaultProps = {
  id: `n-menu-container-${l()}`,
  className: `n-menu-container-${l()}`,
  mode: "vertical",
  position: "bottom",
  inverted: !1,
  icon: r.default.createElement(t.SvgIcMoreHorizontal, null),
  maxHeight: void 0,
  open: !1,
  selectedIndex: 2,
  onChangeMenuItem: () => {},
  onOpen: () => {},
  onClose: () => {},
  anchorEl: void 0,
  style: {},
  children: r.default.createElement(r.default.Fragment, null),
};
var c = n.memo(i);
module.exports = c;
//# sourceMappingURL=Menu.js.map
