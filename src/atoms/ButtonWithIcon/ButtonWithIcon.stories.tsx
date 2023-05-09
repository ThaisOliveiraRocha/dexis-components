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
  text: "Enabled Button",
  icon: "/images/printer.svg",
  iconAlt: "Enabled Icon",
  onClick: () => console.log("Enabled Button clicked"),
  id: "enabled-button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Button",
  icon: "/images/printerDisabled.svg",
  iconAlt: "Disabled Icon",
  onClick: () => console.log("Disabled Button clicked"),
  id: "disabled-button",
  disabled: true,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: "/images/reload.svg",
  iconAlt: "Disabled Icon",
  onClick: () => console.log("OnlyIcon Button clicked"),
  id: "only-icon-button",
  disabled: false,
};

export const OnlyIconDisabled = Template.bind({});
OnlyIconDisabled.args = {
  icon: "/images/reloadDisabled.svg",
  iconAlt: "Disabled Icon",
  onClick: () => console.log("Disabled OnlyIconButton clicked"),
  id: "disabled-only-icon-button",
  disabled: true,
};
