import React from "react";
import { Source } from "@storybook/components";
import dedent from "dedent";
import "../../base/storybook.scss";

const PACKAGE_NAME = "@gofynd/nitrozen-react";
export const Installation = () => {
  return (
    <div className="theme-container">
      <h5>Getting started</h5>
      <p>
        To install `{PACKAGE_NAME}` in your project, you will need to run the
        following command using <a href="https://www.npmjs.com/">npm</a>:
      </p>

      <Source
        language="bash"
        dark={true}
        format={true}
        code={dedent`
                    npm install ${PACKAGE_NAME} --save-dev
                `}
      />

      <p>
        If you prefer <a href="https://yarnpkg.com/en/">yarn</a>, use the
        following command instead:
      </p>

      <Source
        language="bash"
        dark={true}
        format={true}
        code={dedent`
                    yarn add ${PACKAGE_NAME}
                `}
      />
      <p>
        - Nitrozen component library can be consumed by all React / React with
        Typescript projects.
      </p>
      <h5>Usage</h5>
      <p>
        The `{PACKAGE_NAME}` package provides components and icons for the
        Nitrozen design system.
      </p>
      <p>
        To use a component, you can import it directly from the {PACKAGE_NAME}{" "}
        package:
      </p>
      <Source
        language="js"
        dark={true}
        format={true}
        code={dedent`
                import { Button } from '${PACKAGE_NAME}';
                function App() {
                    return <Button>Submit</Button>;
                }
                export default App;
                `}
      />
      <p>
        To use icons, you can import it directly from the {PACKAGE_NAME}{" "}
        package:
      </p>
      <Source
        language="js"
        dark={true}
        format={true}
        code={dedent`
                import { SvgDelete } from '${PACKAGE_NAME}';
                function App() {
                    return <SvgDelete />
                }
                export default App;
                `}
      />
      <p>For detailed examples, check out the storybook components</p>
      <br />
      <br />
      <br />
    </div>
  );
};

export default {
  title: "Introduction/Installation",
  component: Installation,
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};
