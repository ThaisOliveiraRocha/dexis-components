import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FilledButton from "./FilledButton";

export default {
  title: "Components/FilledButton",
  component: FilledButton,
  argTypes: {
    textColor: { control: "color" },
  },
} as ComponentMeta<typeof FilledButton>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof FilledButton> = (args) => (
  <FilledButton {...args} />
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large", type: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, type: "secondary", label: "Secondary 😇" };
