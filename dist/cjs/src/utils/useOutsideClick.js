"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react");
exports.useOutsideClick = (t) => {
  const r = e.useRef(null);
  return (
    e.useEffect(() => {
      const e = (e) => {
        r.current && !r.current.contains(e.target) && t();
      };
      return (
        document.addEventListener("click", e, !0),
        () => {
          document.removeEventListener("click", e, !0);
        }
      );
    }, [r]),
    r
  );
};
//# sourceMappingURL=useOutsideClick.js.map
