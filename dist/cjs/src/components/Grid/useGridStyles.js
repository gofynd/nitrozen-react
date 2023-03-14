"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react"),
  i = require("./Grid.interfaces.js"),
  s = require("./Grid.utils.js");
exports.useGridStyles = (r) => {
  const [t, n] = e.useState(i.ScreenTypes.DESKTOP),
    [d, o] = e.useState({}),
    u = e.useCallback(() => {
      const e =
        null === window || void 0 === window ? void 0 : window.innerWidth;
      n(
        e > 768
          ? i.ScreenTypes.DESKTOP
          : e > 426
          ? i.ScreenTypes.TABLET
          : i.ScreenTypes.MOBILE
      );
    }, []);
  return (
    e.useEffect(
      () => (
        u(),
        null === window ||
          void 0 === window ||
          window.addEventListener("resize", u),
        () => {
          null === window ||
            void 0 === window ||
            window.removeEventListener("resize", u);
        }
      ),
      [u]
    ),
    e.useEffect(() => {
      o(s.calculateCustomGridCss(r, t));
    }, [r, t]),
    { deviceType: t, customStyles: d }
  );
};
//# sourceMappingURL=useGridStyles.js.map
