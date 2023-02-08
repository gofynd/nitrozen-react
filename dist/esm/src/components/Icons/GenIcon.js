import { __rest as t } from "../../../node_modules/tslib/tslib.es6.js";
import e from "react";
function s(s) {
  const { attr: r, size: l, title: n } = s,
    a = t(s, ["attr", "size", "title"]),
    i = l || "1em";
  let c;
  return (
    s.className && (c = (c ? c + " " : "") + s.className),
    e.createElement(
      "svg",
      Object.assign(
        {},
        a,
        {
          className: "nitrozen-svg-icon " + c,
          style: Object.assign({ color: s.color }, s.style),
          height: i,
          width: i,
          xmlns: "http://www.w3.org/2000/svg",
        },
        r
      ),
      n && e.createElement("title", null, n),
      s.children
    )
  );
}
function r(t) {
  return null == t
    ? void 0
    : t.map((t, s) => {
        const l = Object.keys(t.attr),
          n = {};
        return (
          l.forEach((e) => {
            var s;
            if ("style" === e) {
              const e =
                  null === (s = t.attr) || void 0 === s
                    ? void 0
                    : s.style.split(","),
                r = {};
              e.forEach((t) => {
                const [e, s] = t.split(":");
                r[e] = s;
              }),
                (n.style = r);
            } else n[e] = t.attr[e];
          }),
          (t.attr = n),
          e.createElement(t.tag, Object.assign({ key: s }, t.attr), r(t.child))
        );
      });
}
function l(t) {
  return (l) =>
    e.createElement(
      s,
      Object.assign({ attr: Object.assign({}, t.attr) }, l),
      r(t.child)
    );
}
export { l as GenIcon };
//# sourceMappingURL=GenIcon.js.map
