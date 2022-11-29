import { useRef as t, useEffect as e } from "react";
const n = (n) => {
  const r = t(null);
  return (
    e(() => {
      const t = (t) => {
        r.current && !r.current.contains(t.target) && n();
      };
      return (
        document.addEventListener("click", t, !0),
        () => {
          document.removeEventListener("click", t, !0);
        }
      );
    }, [r]),
    r
  );
};
export { n as useOutsideClick };
//# sourceMappingURL=useOutsideClick.js.map
