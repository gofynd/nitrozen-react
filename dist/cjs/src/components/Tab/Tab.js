"use strict";
var e = require("../../../node_modules/tslib/tslib.es6.js"),
  t = require("react"),
  r = require("../../utils/uuids.js"),
  n = require("../TabItem/TabItem.js"),
  l = require("../../../node_modules/classnames/index.js");
require("./Tab.scss.js");
var c = require("../../assets/svg-components/Nitrozen/index.js");
function u(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var a = u(t);
const i = (u) => {
    var i;
    const {
        id: d,
        tabItem: f,
        label: v,
        activeIndex: m,
        className: h,
        style: b,
        onTabChange: g,
        appearance: p,
        children: E,
        overflow: L,
        tabs: w,
      } = u,
      y = e.__rest(u, [
        "id",
        "tabItem",
        "label",
        "activeIndex",
        "className",
        "style",
        "onTabChange",
        "appearance",
        "children",
        "overflow",
        "tabs",
      ]),
      [W, N] = t.useState(m),
      I = t.useRef(!1),
      x = t.useRef(null),
      R = t.useRef(null),
      C = t.useRef(null),
      T = t.useRef(null),
      j = t.useRef([]),
      q = t.useRef(null),
      _ = () => {
        I.current = !0;
      },
      k = () => {
        R.current && R.current.classList.remove("n-dragging"), (I.current = !1);
      },
      S = (e) => {
        if (I.current && R.current) {
          R.current.classList.add("n-dragging");
          let t = R.current.scrollLeft - e.movementX;
          (R.current.scrollLeft = t), X(t);
        }
      },
      A = (e) => {
        if ((e.preventDefault(), R.current)) {
          R.current.classList.add("n-dragging");
          let t = R.current.scrollLeft + e.deltaX;
          (R.current.scrollLeft = t), X(t);
        }
      };
    if (
      (t.useEffect(() => {
        N(m);
      }, [m]),
      W > (null == f ? void 0 : f.length))
    )
      throw new Error(
        "Active Tab index cannot be greater than TabItem array length !"
      );
    const M = (e, t) => () => {
        N(e), null == g || g(t);
      },
      X = (e) => {
        var t, r;
        if (R.current && C.current && T.current) {
          e > 0 && R.current.scrollWidth > R.current.clientWidth
            ? (C.current.style.display = "flex")
            : (C.current.style.display = "none");
          const n =
            (null === (t = R.current) || void 0 === t
              ? void 0
              : t.scrollWidth) -
            (null === (r = R.current) || void 0 === r ? void 0 : r.clientWidth);
          Math.ceil(e) >= n || R.current.scrollWidth <= R.current.clientWidth
            ? (T.current.style.display = "none")
            : (T.current.style.display = "flex");
        }
      },
      $ = (e) => () => {
        if (R.current) {
          let t = R.current.scrollLeft + ("left" === e ? -250 : 250);
          X(t), (R.current.scrollLeft = t);
        }
      };
    return (
      t.useEffect(() => {
        j.current.length > 0 &&
          setTimeout(() => {
            var e;
            const t =
                null === (e = R.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth,
              r = j.current[W].getBoundingClientRect().width;
            if (R.current) {
              let e = 0;
              j.current.forEach((t, r) => {
                r < W && (e += t.getBoundingClientRect().width);
              }),
                R.current.scrollWidth > R.current.clientWidth &&
                  ((R.current.scrollLeft = e),
                  X(Math.min(e, t || Number.MAX_SAFE_INTEGER))),
                q.current &&
                  ((q.current.style.left = e + "px"),
                  (q.current.style.width = r + "px"));
            }
          }, 0);
      }, [W, j.current]),
      t.useEffect(() => {
        if (R.current && R.current.scrollWidth > R.current.clientWidth) {
          let e = R.current.scrollLeft;
          X(e),
            R.current.addEventListener("pointerdown", _),
            R.current.addEventListener("pointerup", k),
            R.current.addEventListener("pointerout", k),
            R.current.addEventListener("pointermove", S),
            R.current.addEventListener("wheel", A);
        }
        return () => {
          R.current &&
            R.current.scrollWidth > R.current.clientWidth &&
            (R.current.removeEventListener("pointerdown", _),
            R.current.removeEventListener("pointerup", k),
            R.current.removeEventListener("pointermove", S),
            R.current.removeEventListener("pointerout", k),
            R.current.removeEventListener("wheel", A));
        };
      }, [R.current]),
      t.useEffect(() => {
        R.current &&
          j.current &&
          x.current &&
          R.current.scrollWidth <= R.current.clientWidth &&
          x.current.classList.remove("n-tab-scroll");
      }, [f, R, j, x]),
      a.default.createElement(
        a.default.Fragment,
        null,
        a.default.createElement(
          "div",
          Object.assign(
            {
              id: d,
              style: null != b ? b : {},
              className: `n-tab-container n-tab-scroll ${
                "navbar" === p ? "n-tab-navbar" : ""
              } ${"fit" === L ? "n-overflow-fit" : "n-overflow-scroll"} ${
                null != h ? h : ""
              }`,
            },
            y,
            { ref: x }
          ),
          "arrow" === L &&
            a.default.createElement(
              "button",
              {
                className: "n-nav-btn n-icon-btn-left",
                onClick: $("left"),
                ref: C,
              },
              a.default.createElement(c.SvgIcChevronLeft, {
                className: "n-scroll-left-icon",
              })
            ),
          a.default.createElement(
            "ul",
            { className: "n-tab", ref: R },
            null ===
              (i = null == f ? void 0 : f.filter((e, t) => !w || t < w)) ||
              void 0 === i
              ? void 0
              : i.map((e, t) =>
                  a.default.createElement(
                    n,
                    {
                      onClick: M(t, e),
                      ref: (e) => (j.current[t] = e),
                      className: l({ "n-tab-active": W === t }),
                      key: s(e, v) + t + r(),
                      icon: o(e, "icon"),
                    },
                    s(e, v)
                  )
                ),
            a.default.createElement("div", { className: "n-d-scroll", ref: q })
          ),
          "arrow" === L &&
            a.default.createElement(
              "button",
              {
                className: "n-nav-btn n-icon-btn-right",
                onClick: $("right"),
                ref: T,
              },
              a.default.createElement(c.SvgIcChevronRight, {
                className: "n-scroll-right-icon",
              })
            )
        ),
        E || null
      )
    );
  },
  s = (e, t) => {
    var r;
    return t && null !== (r = e[t]) && void 0 !== r ? r : e;
  },
  o = (e, t) => {
    if (e[t]) return e[t];
  };
i.defaultProps = {
  id: "n-tab-item" + r(),
  activeIndex: 0,
  tabItem: [],
  appearance: "normal",
  overflow: "fit",
};
var d = t.memo(i);
module.exports = d;
//# sourceMappingURL=Tab.js.map
