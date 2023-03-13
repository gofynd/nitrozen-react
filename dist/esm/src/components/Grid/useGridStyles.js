import { useState as i, useCallback as o, useEffect as n } from "react";
import { ScreenTypes as e } from "./Grid.interfaces.js";
import { calculateCustomGridCss as d } from "./Grid.utils.js";
const r = (r) => {
  const [t, w] = i(e.DESKTOP),
    [s, l] = i({}),
    m = o(() => {
      const i =
        null === window || void 0 === window ? void 0 : window.innerWidth;
      w(i > 768 ? e.DESKTOP : i > 426 ? e.TABLET : e.MOBILE);
    }, []);
  return (
    n(
      () => (
        m(),
        null === window ||
          void 0 === window ||
          window.addEventListener("resize", m),
        () => {
          null === window ||
            void 0 === window ||
            window.removeEventListener("resize", m);
        }
      ),
      [m]
    ),
    n(() => {
      l(d(r, t));
    }, [r, t]),
    { deviceType: t, customStyles: s }
  );
};
export { r as useGridStyles };
//# sourceMappingURL=useGridStyles.js.map
