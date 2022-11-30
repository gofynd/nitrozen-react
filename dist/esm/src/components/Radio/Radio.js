import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import a from "react";
import l from "../../utils/uuids.js";
import "./Radio.scss.js";
const t = (l) => {
  const {
      disabled: t,
      name: s,
      value: i,
      radioValue: n,
      id: o,
      labelText: d,
      onChange: r,
      className: m,
      style: u,
    } = l,
    c = e(l, [
      "disabled",
      "name",
      "value",
      "radioValue",
      "id",
      "labelText",
      "onChange",
      "className",
      "style",
    ]);
  return a.createElement(
    "div",
    {
      style: null != u ? u : {},
      className: `nitrozen-radio-group ${null != m ? m : ""}`,
    },
    a.createElement(
      "input",
      Object.assign(
        {
          id: o,
          type: "radio",
          onChange: (e) => {
            null == r || r(e.target.value);
          },
          checked: i === n,
          value: i,
          name: s,
          disabled: t,
        },
        c
      )
    ),
    a.createElement("label", { htmlFor: o }, d)
  );
};
t.defaultProps = {
  disabled: !1,
  name: "",
  value: "",
  radioValue: "",
  id: `nitrozen-radio-${l()}`,
  labelText: "",
  className: "",
  style: {},
  onChange: () => {},
};
export { t as default };
//# sourceMappingURL=Radio.js.map
