import React from "react";
import "../../base/storybook.scss";
import changelog from "../../../CHANGELOG.md";
import MarkdownToJSX from "markdown-to-jsx";
import "./changelog.scss";

export const Changelog = () => {
  return (
    <div className="markdown-body">
      <MarkdownToJSX>{changelog}</MarkdownToJSX>
    </div>
  );
};

export default {
  title: "Introduction/Changelog",
  component: Changelog,
  parameters: {
    base: "light",
    options: { showPanel: false },
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};
