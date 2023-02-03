"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = require("../../../node_modules/tslib/tslib.es6.js");
function e(t) {
  return t && "object" == typeof t && "default" in t ? t : { default: t };
}
var s = e(require("react"));
function r(e) {
  const { attr: r, size: l, title: a } = e,
    n = t.__rest(e, ["attr", "size", "title"]),
    c = l || "1em";
  let i;
  return (
    e.className && (i = (i ? i + " " : "") + e.className),
    s.default.createElement(
      "svg",
      Object.assign(
        {},
        n,
        {
          className: "nitrozen-svg-icon " + i,
          style: Object.assign({ color: e.color }, e.style),
          height: c,
          width: c,
          xmlns: "http://www.w3.org/2000/svg",
        },
        r
      ),
      a && s.default.createElement("title", null, a),
      e.children
    )
  );
}
function l(t) {
  return null == t
    ? void 0
    : t.map((t, e) => {
        const r = Object.keys(t.attr),
          a = {};
        return (
          r.forEach((e) => {
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
                (a.style = r);
            } else a[e] = t.attr[e];
          }),
          (t.attr = a),
          s.default.createElement(
            t.tag,
            Object.assign({ key: e }, t.attr),
            l(t.child)
          )
        );
      });
}
exports.GenIcon = function (t) {
  return (e) =>
    s.default.createElement(
      r,
      Object.assign({ attr: Object.assign({}, t.attr) }, e),
      l(t.child)
    );
};
//# sourceMappingURL=GenIcon.js.map
