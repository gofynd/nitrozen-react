import React from "react";
import { Source } from "@storybook/components";
import dedent from "dedent";
import "../../base/storybook.scss";
export const Theming = () => {
  return (
    <div className="theme-container">
      <h3>Theme customization:</h3>
      <p>Nitrozen uses the following css variables for Theming: </p>
      <Source
        language="css"
        dark={true}
        format={true}
        code={dedent`
          $PrimaryColor: #2e31be;
          $PrimaryHoverColor: #2e31a1;
          $PrimaryDisabledColor: #b5ffe7;
          $SecondaryColor: #2dbaaa;
          $SecondaryHoverColor: #2dbaaa;
          $SecondaryDisabledColor: #e0e0e0;
          $SvgColor: #8F8F8F;
          $TypographyPrimaryColor: #41434c;
          $TypographySecondaryColor: #666666;
          $TypographyTertiaryColor: #999999;
          $PrimaryFont: 'Inter', sans-serif;
          $ZIndexNe: -1;
          $ZIndex1:  1;
          $ZIndex2:  99;
          $ZIndex3:  999;
        `}
      />
      <p>
        It&apos;s possible to override the default values by using css variables
        in your project like this:
      </p>
      <Source
        language="css"
        dark={true}
        format={true}
        code={dedent`
        :root {
          --PrimaryColor: red;
          --PrimaryHoverColor: orange;
          --PrimaryDisabledColor: grey;
          --SecondaryColor: blue;
          --SecondaryHoverColor: #000055;
          --SecondaryDisabledColor: #999999;
          --SvgColor: #8F8F8F;
          --TypographyPrimaryColor: #341234;
          --TypographySecondaryColor: #123456;
          --TypographyTertiaryColor: #999999;
          --PrimaryFont: Helvetica, sans-serif;
          --ZIndexNe: -1;
          --ZIndex1:  1;
          --ZIndex2:  99;
          --ZIndex3:  999;
        }
        `}
      />
      <p>
        Inorder to override css, simply add the above code snippet in your
        App&apos;s root css file(global.css / styles.css)
      </p>
      <p>
        Once overriden, the styles will be applicable across all components.
      </p>
      <br />
      <br />
    </div>
  );
};

export default {
  title: "Customization/Theming",
  component: Theming,
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};
