import e from "react";
import { createRoot as t } from "../../../node_modules/react-dom/client.js";
import s from "../../utils/uuids.js";
import n from "./Nudge.js";
import "./Nudge.scss.js";
class i {
  constructor(e) {
    if (((this.nudges = []), "undefined" != typeof window)) {
      const s = document.getElementsByTagName("body")[0],
        n = document.createElement("div");
      (n.className = "n-nudge-container-main n-nudge-" + e),
        s.insertAdjacentElement("beforeend", n),
        (this.nudgeContainerRef = n),
        (this.root = t(this.nudgeContainerRef));
    }
  }
  show(e) {
    const t = `n-nudge-${s()}`,
      n = Object.assign(Object.assign({}, e), {
        id: t,
        destroy: () => {
          e.destroy(), this.destroy(t);
        },
      });
    (this.nudges = [
      ...this.nudges,
      Object.assign(Object.assign({}, n), { id: t }),
    ]),
      this.render();
  }
  destroy(e) {
    (this.nudges = this.nudges.filter((t) => t.id !== e)), this.render();
  }
  render() {
    const t = this.nudges.map((t) =>
      e.createElement(n, Object.assign({ key: t.id }, t))
    );
    "undefined" != typeof window &&
      this.nudgeContainerRef &&
      this.root.render(t);
  }
}
export { i as NudgeManager };
//# sourceMappingURL=NudgeManager.js.map
