// import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";

export default {
  title: "Components/ButtonWithIcon",
  component: ButtonWithIcon,
} as ComponentMeta<typeof ButtonWithIcon>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof ButtonWithIcon> = (args) => (
  <ButtonWithIcon {...args} />
);

// Reuse that template for creating different stories
export const Enabled = Template.bind({});
Enabled.args = {
  title: "Enabled Button",
  icon: {src: "/images/printer.svg", alt: "Enabled Icon"},
  onClick: () => console.log("Enabled Button clicked"),
  id: "enabled-button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled Button",
  icon: {src: "/images/printerDisabled.svg", alt: "Disabled Icon"},
  onClick: () => console.log("Disabled Button clicked"),
  id: "disabled-button",
  disabled: true,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: {src: "/images/reload.svg", alt: "Enabled reload Icon"},
  onClick: () => console.log("OnlyIcon Button clicked"),
  id: "only-icon-button",
  disabled: false,
};

export const OnlyIconDisabled = Template.bind({});
OnlyIconDisabled.args = {
  icon: {src: "/images/reloadDisabled.svg", alt: "Disabled reload Icon"},
  onClick: () => console.log("Disabled OnlyIconButton clicked"),
  id: "disabled-only-icon-button",
  disabled: true,
};
