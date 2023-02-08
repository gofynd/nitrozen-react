import t from "react";
import { createRoot as s } from "../../../node_modules/react-dom/client.js";
import e from "../../utils/uuids.js";
import o from "./Toast.js";
import "./Toast.scss.js";
class i {
  constructor(t) {
    if (((this.toasts = []), "undefined" != typeof window)) {
      const e = document.getElementsByTagName("body")[0],
        o = document.createElement("div");
      (o.className = `n-toast-container-main n-toast-${t}`),
        e.insertAdjacentElement("beforeend", o),
        (this.containerRef = o),
        (this.root = s(this.containerRef));
    }
  }
  show(t) {
    const s = `nitrozen-toast-${e()}`,
      o = Object.assign(Object.assign({}, t), {
        id: s,
        destroy: () => {
          t.destroy(), this.destroy(s);
        },
      });
    (this.toasts = [
      ...this.toasts,
      Object.assign(Object.assign({}, o), { id: s }),
    ]),
      this.render();
  }
  destroy(t) {
    (this.toasts = this.toasts.filter((s) => s.id !== t)), this.render();
  }
  render() {
    const s = this.toasts.map((s) =>
      t.createElement(o, Object.assign({ key: s.id }, s))
    );
    "undefined" != typeof window && this.containerRef && this.root.render(s);
  }
}
export { i as ToastManager };
//# sourceMappingURL=ToastManager.js.map
