import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import r, {
  memo as t,
  useState as n,
  useRef as l,
  useEffect as c,
} from "react";
import i from "../../utils/uuids.js";
import a from "../TabItem/TabItem.js";
import o from "../../../node_modules/classnames/index.js";
import "./Tab.scss.js";
import {
  SvgIcChevronLeft as s,
  SvgIcChevronRight as u,
} from "../../assets/svg-components/Nitrozen/index.js";
const d = (t) => {
    var d;
    const {
        id: f,
        tabItem: h,
        label: b,
        activeIndex: p,
        className: g,
        style: E,
        onTabChange: L,
        appearance: w,
        children: y,
        overflow: W,
        tabs: N,
      } = t,
      x = e(t, [
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
      [I, T] = n(p),
      j = l(!1),
      C = l(null),
      k = l(null),
      _ = l(null),
      A = l(null),
      M = l([]),
      R = l(null),
      X = () => {
        j.current = !0;
      },
      $ = () => {
        k.current && k.current.classList.remove("n-dragging"), (j.current = !1);
      },
      B = (e) => {
        if (j.current && k.current) {
          k.current.classList.add("n-dragging");
          let r = k.current.scrollLeft - e.movementX;
          (k.current.scrollLeft = r), D(r);
        }
      },
      F = (e) => {
        if ((e.preventDefault(), k.current)) {
          k.current.classList.add("n-dragging");
          let r = k.current.scrollLeft + e.deltaX;
          (k.current.scrollLeft = r), D(r);
        }
      };
    if (
      (c(() => {
        T(p);
      }, [p]),
      I > (null == h ? void 0 : h.length))
    )
      throw new Error(
        "Active Tab index cannot be greater than TabItem array length !"
      );
    const z = (e, r) => () => {
        T(e), null == L || L(r);
      },
      D = (e) => {
        var r, t;
        if (k.current && _.current && A.current) {
          e > 0 && k.current.scrollWidth > k.current.clientWidth
            ? (_.current.style.display = "flex")
            : (_.current.style.display = "none");
          const n =
            (null === (r = k.current) || void 0 === r
              ? void 0
              : r.scrollWidth) -
            (null === (t = k.current) || void 0 === t ? void 0 : t.clientWidth);
          Math.ceil(e) >= n || k.current.scrollWidth <= k.current.clientWidth
            ? (A.current.style.display = "none")
            : (A.current.style.display = "flex");
        }
      },
      G = (e) => () => {
        if (k.current) {
          let r = k.current.scrollLeft + ("left" === e ? -250 : 250);
          D(r), (k.current.scrollLeft = r);
        }
      };
    return (
      c(() => {
        M.current.length > 0 &&
          setTimeout(() => {
            var e;
            const r =
                null === (e = k.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth,
              t = M.current[I].getBoundingClientRect().width;
            if (k.current) {
              let e = 0;
              M.current.forEach((r, t) => {
                t < I && (e += r.getBoundingClientRect().width);
              }),
                k.current.scrollWidth > k.current.clientWidth &&
                  ((k.current.scrollLeft = e),
                  D(Math.min(e, r || Number.MAX_SAFE_INTEGER))),
                R.current &&
                  ((R.current.style.left = e + "px"),
                  (R.current.style.width = t + "px"));
            }
          }, 0);
      }, [I, M.current]),
      c(() => {
        if (k.current && k.current.scrollWidth > k.current.clientWidth) {
          let e = k.current.scrollLeft;
          D(e),
            k.current.addEventListener("pointerdown", X),
            k.current.addEventListener("pointerup", $),
            k.current.addEventListener("pointerout", $),
            k.current.addEventListener("pointermove", B),
            k.current.addEventListener("wheel", F);
        }
        return () => {
          k.current &&
            k.current.scrollWidth > k.current.clientWidth &&
            (k.current.removeEventListener("pointerdown", X),
            k.current.removeEventListener("pointerup", $),
            k.current.removeEventListener("pointermove", B),
            k.current.removeEventListener("pointerout", $),
            k.current.removeEventListener("wheel", F));
        };
      }, [k.current]),
      c(() => {
        k.current &&
          M.current &&
          C.current &&
          k.current.scrollWidth <= k.current.clientWidth &&
          C.current.classList.remove("n-tab-scroll");
      }, [h, k, M, C]),
      r.createElement(
        r.Fragment,
        null,
        r.createElement(
          "div",
          Object.assign(
            {
              id: f,
              style: null != E ? E : {},
              className: `n-tab-container n-tab-scroll ${
                "navbar" === w ? "n-tab-navbar" : ""
              } ${"fit" === W ? "n-overflow-fit" : "n-overflow-scroll"} ${
                null != g ? g : ""
              }`,
            },
            x,
            { ref: C }
          ),
          "arrow" === W &&
            r.createElement(
              "button",
              {
                className: "n-nav-btn n-icon-btn-left",
                onClick: G("left"),
                ref: _,
              },
              r.createElement(s, { className: "n-scroll-left-icon" })
            ),
          r.createElement(
            "ul",
            { className: "n-tab", ref: k },
            null ===
              (d = null == h ? void 0 : h.filter((e, r) => !N || r < N)) ||
              void 0 === d
              ? void 0
              : d.map((e, t) =>
                  r.createElement(
                    a,
                    {
                      onClick: z(t, e),
                      ref: (e) => (M.current[t] = e),
                      className: o({ "n-tab-active": I === t }),
                      key: m(e, b) + t + i(),
                      icon: v(e, "icon"),
                    },
                    m(e, b)
                  )
                ),
            r.createElement("div", { className: "n-d-scroll", ref: R })
          ),
          "arrow" === W &&
            r.createElement(
              "button",
              {
                className: "n-nav-btn n-icon-btn-right",
                onClick: G("right"),
                ref: A,
              },
              r.createElement(u, { className: "n-scroll-right-icon" })
            )
        ),
        y || null
      )
    );
  },
  m = (e, r) => {
    var t;
    return r && null !== (t = e[r]) && void 0 !== t ? t : e;
  },
  v = (e, r) => {
    if (e[r]) return e[r];
  };
d.defaultProps = {
  id: "n-tab-item" + i(),
  activeIndex: 0,
  tabItem: [],
  appearance: "normal",
  overflow: "fit",
};
var f = t(d);
export { f as default };
//# sourceMappingURL=Tab.js.map
