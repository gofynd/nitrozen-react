import React from "react";
import "../../base/storybook.scss";
import "../../base/typography.scss";
import Table from "../../components/Table";

export const Typography = () => {
  return (
    <div className="theme-container main-div space-between">
      <Table
        onRowClick={() => {}}
        rowStyle="simple"
        showColumnDivider
        tableHeader={[
          {
            customSort: function noRefCheck() {},
            name: "class",
            value: "Class",
            width: "15%",
          },
          {
            name: "role",
            value: "Role",
            width: "30%",
          },
          {
            name: "value",
            value: "Value",
            width: "55%",
          },
        ]}
        tableRow={[
          {
            class: "heading-xl",
            role: "Heading titles on pages",
            value: <h1>Heading XL</h1>,
          },
          {
            class: "heading-l",
            role: "Heading titles on pages",
            value: <h2>Heading L</h2>,
          },
          {
            class: "heading-m",
            role: "Heading titles on pages",
            value: <h3>Heading M</h3>,
          },
          {
            class: "heading-s",
            role: "Heading titles on pages",
            value: <h4>Heading S</h4>,
          },
          {
            class: "heading-xs",
            role: "Heading titles on pages",
            value: <h5>Heading XS</h5>,
          },
          {
            class: "heading-xss",
            role: "Heading titles on pages",
            value: <h6>Heading XSS</h6>,
          },
          {
            class: "overline",
            role: "-",
            value: <div className="overline">overline</div>,
          },
          {
            class: "body-l",
            role: "Blog pages text; Lead Paragraph on Content Block XL and L",
            value: <div className="body-l">Body L</div>,
          },
          {
            class: "body-l-bold",
            role: "Blog pages text; Lead Paragraph on Content Block XL and L",
            value: <div className="body-l-bold">Body L Bold</div>,
          },
          {
            class: "body-l-link",
            role: "Blog pages text; Lead Paragraph on Content Block XL and L",
            value: <div className="body-l-link">Body L Link</div>,
          },
          {
            class: "body-m",
            role: "Blog pages text; Lead Paragraph on Content Block M",
            value: <div className="body-m">Body M</div>,
          },
          {
            class: "body-m-bold",
            role: "Blog pages text; Lead Paragraph on Content Block M",
            value: <div className="body-m-bold">Body M Bold</div>,
          },
          {
            class: "body-m-link",
            role: "Blog pages text; Lead Paragraph on Content Block M",
            value: <div className="body-m-link">Body M Link</div>,
          },
          {
            class: "body-s",
            role: "Blog pages text; Lead Paragraph on Content Block S",
            value: <div className="body-s">Body S</div>,
          },
          {
            class: "body-s-bold",
            role: "Blog pages text; Lead Paragraph on Content Block S",
            value: <div className="body-s-bold">Body S Bold</div>,
          },
          {
            class: "body-s-link",
            role: "Blog pages text; Lead Paragraph on Content Block S",
            value: <div className="body-s-link">Body S Link</div>,
          },
          {
            class: "body-xs",
            role: "Blog pages text; Lead Paragraph on Content Block XS",
            value: <div className="body-xs">Body XS</div>,
          },
          {
            class: "body-xs-bold",
            role: "Blog pages text; Lead Paragraph on Content Block XS",
            value: <div className="body-xs-bold">Body XS Bold</div>,
          },
          {
            class: "body-xs-link",
            role: "Blog pages text; Lead Paragraph on Content Block XS",
            value: <div className="body-xs-link">Body XS Link</div>,
          },
          {
            class: "body-xxs",
            role: "Blog pages text; Lead Paragraph on Content Block XXS",
            value: <div className="body-xxs">Body XXS</div>,
          },
          {
            class: "body-xxs-bold",
            role: "Blog pages text; Lead Paragraph on Content Block XXS",
            value: <div className="body-xxs-bold">Body XXS Bold</div>,
          },
          {
            class: "body-xxs-link",
            role: "Blog pages text; Lead Paragraph on Content Block XXS",
            value: <div className="body-xxs-link">Body XXS Link</div>,
          },
          {
            class: "list-title",
            role: "Used on small lists to keep proper visual balance when the item title wraps into two lines of text",
            value: <div className="list-title">List title</div>,
          },
          {
            class: "code",
            role: "Code snippets",
            value: <div className="code">Code type</div>,
          },
        ]}
      />
    </div>
  );
};

export default {
  title: "Tokens/Typography",
  component: Typography,
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};
