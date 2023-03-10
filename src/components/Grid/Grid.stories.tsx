import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <div className="sb-pagination">
      <Grid {...args}>
        <div className="testing-child-container">
          To Check Overflow Feature of Grid use MobileScreen Size
        </div>
        <div className="testing-child-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam
          odio aut suscipit quo fugit iusto dolores fuga, eligendi nobis!
        </div>
        <div className="testing-child-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam
          odio aut suscipit quo fugit iusto dolores fuga, eligendi nobis!
        </div>
        <div className="testing-child-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam
          odio aut suscipit quo fugit iusto dolores fuga, eligendi nobis!
        </div>
        <div className="testing-child-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam
          odio aut suscipit quo fugit iusto dolores fuga, eligendi nobis!
        </div>
        <div className="testing-child-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam
          odio aut suscipit quo fugit iusto dolores fuga, eligendi nobis!
        </div>
      </Grid>
    </div>
  );
};

export const CustomGrid = Template.bind({});
CustomGrid.args = {
  columns: {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  },
  customWidth: [
    {
      columnNumber: 2,
      customWidth: "150px",
    },
    {
      columnNumber: 4,
      customWidth: 40,
    },
  ],
};

export const OverflowGrid = Template.bind({});
OverflowGrid.args = {
  columns: {
    mobile: 2,
    tablet: 3,
    desktop: 6,
  },
  overflow: {
    mobile: true,
  },
};

export const BasicGrid = Template.bind({});
BasicGrid.args = {
  columns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
};
