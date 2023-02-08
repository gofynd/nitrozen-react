"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react"),
  t = require("../../../node_modules/react-dom/client.js"),
  s = require("../../utils/uuids.js"),
  o = require("./Toast.js");
function i(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Toast.scss.js");
var n = i(e);
exports.ToastManager = class {
  constructor(e) {
    if (((this.toasts = []), "undefined" != typeof window)) {
      const s = document.getElementsByTagName("body")[0],
        o = document.createElement("div");
      (o.className = `n-toast-container-main n-toast-${e}`),
        s.insertAdjacentElement("beforeend", o),
        (this.containerRef = o),
        (this.root = t.createRoot(this.containerRef));
    }
  }
  show(e) {
    const t = `nitrozen-toast-${s()}`,
      o = Object.assign(Object.assign({}, e), {
        id: t,
        destroy: () => {
          e.destroy(), this.destroy(t);
        },
      });
    (this.toasts = [
      ...this.toasts,
      Object.assign(Object.assign({}, o), { id: t }),
    ]),
      this.render();
  }
  destroy(e) {
    (this.toasts = this.toasts.filter((t) => t.id !== e)), this.render();
  }
  render() {
    const e = this.toasts.map((e) =>
      n.default.createElement(o, Object.assign({ key: e.id }, e))
    );
    "undefined" != typeof window && this.containerRef && this.root.render(e);
  }
};
//# sourceMappingURL=ToastManager.js.map
