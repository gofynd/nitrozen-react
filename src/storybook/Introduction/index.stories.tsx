import React from "react";
import "./welcome.scss";
export const Welcome = () => {
  return <div className="intro-body"></div>;
};

export default {
  title: "Introduction/Welcome",
  component: Welcome,
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};
