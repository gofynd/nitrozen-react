import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import n, {
  memo as t,
  useState as o,
  useRef as l,
  useEffect as i,
} from "react";
import { SvgIcMoreHorizontal as r } from "../../assets/svg-components/Nitrozen/index.js";
import "./Menu.scss.js";
import c from "../../utils/uuids.js";
const s = (t) => {
  const {
      id: r,
      className: s,
      mode: a,
      position: d,
      inverted: u,
      icon: m,
      maxHeight: v,
      open: g,
      onChangeMenuItem: p,
      onOpen: h,
      onClose: b,
      anchorEl: k,
      style: f,
      children: E,
      selectedIndex: x,
    } = t,
    y = e(t, [
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
    [N, C] = o(g),
    [I, $] = o(!1);
  let j = l(null);
  const O = l(null),
    M = `n-menu-block-ul-${c()}`;
  i(() => {
    C(g);
  }, [g]),
    i(() => (N ? (null == h ? void 0 : h()) : null == b ? void 0 : b()), [N]),
    i(() => {
      if (
        ((null == k ? void 0 : k.current) && $(!0),
        "undefined" != typeof document)
      )
        return (
          document.addEventListener("click", z),
          () => {
            document.removeEventListener("click", z);
          }
        );
    }, []);
  const z = (e) => {
    !(null == j ? void 0 : j.current) ||
    j.current.contains(e.target) ||
    (null == k ? void 0 : k.current)
      ? (null == k ? void 0 : k.current) &&
        !k.current.contains(e.target) &&
        C(!1)
      : C(!1);
  };
  return n.createElement(
    "div",
    Object.assign({ className: `n-menu-container ${s}`, ref: j, id: r }, y),
    I
      ? null
      : n.createElement(
          "span",
          {
            ref: O,
            "data-testid": "n-menu-block-toggle",
            className: `n-menu-block-toggle \n          ${
              "horizontal" === a ? "n-menu-block-toggle-horizontal" : ""
            }\n          ${u ? "n-menu-block-toggle-inverted" : ""}`,
            onClick: () => {
              C(!N);
            },
          },
          n.createElement(n.Fragment, null, m)
        ),
    n.createElement(
      "ul",
      {
        id: M,
        className:
          "n-menu-block " + (N ? "n-menu-block-open" : "n-menu-block-close"),
        "data-testid": "n-menu-block",
        onClick: (e) => {
          const n = ((e) => {
            var n, t;
            const o =
                null === (n = document.getElementById(M)) || void 0 === n
                  ? void 0
                  : n.childNodes,
              l = Array.from(o),
              i =
                null === (t = null == e ? void 0 : e.target) || void 0 === t
                  ? void 0
                  : t.parentElement,
              r = l.indexOf(i);
            return i.className.includes("n-menu-block-item-disabled") ||
              i.className.includes("n-menu-block-item-heading")
              ? -1
              : r;
          })(e);
          n > -1 && (null == p || p(e.target.innerHTML, n), C(!1));
        },
        style: (() => {
          var e;
          const n = Object.assign({}, f);
          switch (
            ((null === (e = null == O ? void 0 : O.current) || void 0 === e
              ? void 0
              : e.parentElement) && !k
              ? (O.current.parentElement.style.position = "relative")
              : (null == k ? void 0 : k.current) &&
                ((k.current.style.position = "relative"),
                (k.current.style.height = "fit-content")),
            d)
          ) {
            case "top":
              n.bottom = "100%";
              break;
            case "bottom":
              n.top = "100%";
          }
          switch (a) {
            case "horizontal":
              n.left = "100%";
              break;
            case "vertical":
              n.right = "100%";
              break;
            case "aligned":
              n.left = "0%";
          }
          return v && (n.height = `${v}px`), n;
        })(),
      },
      E
    )
  );
};
s.defaultProps = {
  id: `n-menu-container-${c()}`,
  className: `n-menu-container-${c()}`,
  mode: "vertical",
  position: "bottom",
  inverted: !1,
  icon: n.createElement(r, null),
  maxHeight: void 0,
  open: !1,
  selectedIndex: 2,
  onChangeMenuItem: () => {},
  onOpen: () => {},
  onClose: () => {},
  anchorEl: void 0,
  style: {},
  children: n.createElement(n.Fragment, null),
};
var a = t(s);
export { a as default };
//# sourceMappingURL=Menu.js.map
