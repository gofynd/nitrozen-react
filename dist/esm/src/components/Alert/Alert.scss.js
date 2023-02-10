import n from "../../../node_modules/style-inject/dist/style-inject.es.js";
var r =
  '@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n.n-alert {\n  box-sizing: border-box;\n  display: flex;\n  padding: 1rem;\n  gap: 0.8rem;\n  cursor: default;\n  border-radius: 1.6rem;\n  border: 0.1rem solid --LabelColor, rgba(0, 0, 0, 0.65);\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n  font-size: 12px;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n}\n.n-alert:focus {\n  outline: none;\n}\n.n-alert.n-alert-full-width .n-alert-label-text,\n.n-alert.n-alert-full-width .n-alert-text {\n  font-size: 16px;\n}\n.n-alert.n-alert-link-button-container .n-alert-label-text,\n.n-alert.n-alert-link-button-container .n-alert-text {\n  font-size: 14px;\n}\n.n-alert.n-alert-info {\n  background: var(--ColorPrimary20, #e8e8fc);\n  border: 0.1rem solid var(--ColorPrimary50, #3535f3);\n}\n.n-alert.n-alert-success {\n  background: #e3f2e9;\n  border: 0.1rem solid #0a5f23;\n}\n.n-alert.n-alert-warn {\n  background: var(--ColorFeedbackWarning20, #fef0e7);\n  border: 0.1rem solid var(--ColorFeedbackWarning50, #f06d0f);\n}\n.n-alert.n-alert-error {\n  background: var(--ColorFeedbackError20, #fee6ea);\n  border: 0.1rem solid var(--ColorFeedbackError50, #f50031);\n}\n.n-alert.n-alert-loader-container {\n  background: var(--ColorPrimary20, #e8e8fc) !important;\n  border: 0.1rem solid var(--ColorPrimary50, #3535f3);\n}\n.n-alert .n-alert-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  column-gap: 8rem;\n  width: 100%;\n  align-items: center;\n}\n.n-alert .n-alert-flex.n-alert-extended {\n  flex-direction: column;\n  align-items: unset;\n  justify-content: center;\n  row-gap: 1.2rem;\n}\n.n-alert .n-alert-flex.n-alert-extended .n-alert-button-container {\n  display: flex;\n  justify-content: flex-end;\n}\n.n-alert .n-alert-text-icon-wrapper {\n  display: flex;\n  align-items: center;\n  column-gap: 0.4rem;\n}\n.n-alert .n-alert-text-icon-wrapper .n-alert-icon {\n  font-size: 28.8px;\n}\n.n-alert .n-alert-text-icon-wrapper .n-alert-icon.n-alert-icon-info {\n  color: var(--ColorPrimary50, #3535f3);\n}\n.n-alert .n-alert-text-icon-wrapper .n-alert-icon.n-alert-icon-success {\n  background-color: #219653;\n  color: #ffffff;\n  border-radius: 100%;\n  font-size: medium;\n  padding: 0.5rem;\n}\n.n-alert .n-alert-text-icon-wrapper .n-alert-icon.n-alert-icon-warn {\n  color: var(--ColorFeedbackWarning50, #f06d0f);\n}\n.n-alert .n-alert-text-icon-wrapper .n-alert-icon.n-alert-icon-error {\n  color: var(--ColorFeedbackError50, #f50031);\n}\n.n-alert .n-alert-button {\n  padding: 0.4rem 1.2rem;\n}\n.n-alert .n-alert-button.n-alert-button-success {\n  background-color: #0a5f23;\n}\n.n-alert .n-alert-button.n-alert-button-warn {\n  background-color: var(--ColorFeedbackWarning50, #f06d0f);\n}\n.n-alert .n-alert-button.n-alert-button-error {\n  background-color: var(--ColorFeedbackError50, #f50031);\n}\n.n-alert .n-alert-link {\n  cursor: pointer;\n  font-weight: 700;\n  text-decoration: none;\n}\n.n-alert .n-alert-link.n-alert-button-link-info {\n  color: var(--ColorPrimary50, #3535f3);\n}\n.n-alert .n-alert-link.n-alert-button-link-success {\n  color: #219653;\n}\n.n-alert .n-alert-link.n-alert-button-link-warn {\n  color: #f5a300;\n}\n.n-alert .n-alert-link.n-alert-button-link-error {\n  color: #cd0909;\n}\n.n-alert .n-alert-loader {\n  animation: spin 2s linear infinite;\n  height: 2.4rem;\n}\n.n-alert .loader {\n  border: 0.4rem solid #f3f3f3;\n  border-top: 0.4rem solid #3535f3;\n  border-right: 0.4rem solid #f7ab20;\n  border-bottom: 0.4rem solid #1eccb0;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  animation: spin 2s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}';
n(r);
export { r as default };
//# sourceMappingURL=Alert.scss.js.map