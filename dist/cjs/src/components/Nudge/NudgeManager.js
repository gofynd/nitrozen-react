"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react"),
  t = require("../../../node_modules/react-dom/client.js"),
  n = require("../../utils/uuids.js"),
  s = require("./Nudge.js");
function d(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
require("./Nudge.scss.js");
var i = d(e);
exports.NudgeManager = class {
  constructor(e) {
    if (((this.nudges = []), "undefined" != typeof window)) {
      const n = document.getElementsByTagName("body")[0],
        s = document.createElement("div");
      (s.className = "n-nudge-container-main n-nudge-" + e),
        n.insertAdjacentElement("beforeend", s),
        (this.nudgeContainerRef = s),
        (this.root = t.createRoot(this.nudgeContainerRef));
    }
  }
  show(e) {
    const t = `n-nudge-${n()}`,
      s = Object.assign(Object.assign({}, e), {
        id: t,
        destroy: () => {
          e.destroy(), this.destroy(t);
        },
      });
    (this.nudges = [
      ...this.nudges,
      Object.assign(Object.assign({}, s), { id: t }),
    ]),
      this.render();
  }
  destroy(e) {
    (this.nudges = this.nudges.filter((t) => t.id !== e)), this.render();
  }
  render() {
    const e = this.nudges.map((e) =>
      i.default.createElement(s, Object.assign({ key: e.id }, e))
    );
    "undefined" != typeof window &&
      this.nudgeContainerRef &&
      this.root.render(e);
  }
};
//# sourceMappingURL=NudgeManager.js.map
