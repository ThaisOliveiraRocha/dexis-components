// import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ChipsWithIcon from "./ChipsWithIcon";

export default {
  title: "Components/ChipsWithIcon",
  component: ChipsWithIcon,
  argTypes: {
    textColor: { control: "color" },
  },
} as ComponentMeta<typeof ChipsWithIcon>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof ChipsWithIcon> = (args) => (
  <ChipsWithIcon {...args} />
);

// Reuse that template for creating different stories
export const UnselectedEnabled = Template.bind({});
UnselectedEnabled.args = {
  selected: false,
  title: "Chips With Icon",
  id: "chips-with-icon",
};

export const SelectedEnabled = Template.bind({});
SelectedEnabled.args = { ...UnselectedEnabled.args, selected: true };

export const UnselectedDisabled = Template.bind({});
UnselectedDisabled.args = { ...UnselectedEnabled.args, disabled: true };

export const SelectedDisabled = Template.bind({});
SelectedDisabled.args = { ...UnselectedDisabled.args, selected: true };
