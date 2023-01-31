import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import Button from "../Button";
import "../../base/storybook.scss";

export default {
  title: "Components/Card",
  component: Card,

  argTypes: {
    title: { control: "text", description: "The main title copy." },
    image: { description: "Image HTML tags. e.g. <img>", control: false },
    imageFocus: {
      description:
        "Horizontal orientation puts image and content side by side.",
      control: {
        type: "select",
        options: ["center", "top", "bottom", "right", "left"],
      },
    },
    imageRatio: {
      description:
        "Horizontal orientation puts image and content side by side.",
      control: {
        type: "select",
        options: ["wide", "landscape", "portrait", "square"],
      },
    },
    orientation: {
      description:
        "Horizontal orientation puts image and content side by side.",
      control: { type: "select", options: ["vertical", "horizontal"] },
    },
    description: {
      description:
        "Accepts description as string. JSX.Element is also allowed in case you have anchor tags inside your richtext.",
    },
    primaryCTA: {
      description:
        "Please see Link>LinkType. The button={} parameter can be sent to overwrite default button behaviours. E.g. different kind, destructive, with icons etc",
      control: false,
    },
    secondaryCTA: {
      description:
        "Please see Link>LinkType. The button={} parameter can be sent to overwrite default button behaviours. E.g. different kind, destructive, with icons etc.",
      control: false,
    },
    caption: {
      description:
        "The header of the ContentBlock. We recommend you send a <Badge/> component. The size of Badge will be adjusted based on the ContentBlock's size. If you send any other component, you will have to manage visual appearance.",
      control: false,
    },
    header: {
      description: "Image HTML tags. e.g. <img>",
      control: false,
    },
    footer: {
      description: "Image HTML tags. e.g. <img>",
      control: false,
    },
    background: {
      description:
        "Sets a bg--$background classname on this container e.g. .bg--primary. You can send any value assuming there exists a css class called .bg--[YourValue]",
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className="story-container">
    {" "}
    <Card {...args} />
  </div>
);
export const Card_demo = Template.bind({});

Card_demo.args = {
  title: "Fynd - Build your e-commerce website today",
  description:
    "Fynd is your one stop destination for buying, selling & payments,\n  Logistics, Order fulfillment, News, Games, Quizzes & a lot\n  more.",
  image: <img src={require("./card-sample.jpeg")} />,
  primaryCTA: <Button size="small">Buy Now</Button>,
  secondaryCTA: (
    <Button size="small" theme="tertiary">
      View More
    </Button>
  ),
};
