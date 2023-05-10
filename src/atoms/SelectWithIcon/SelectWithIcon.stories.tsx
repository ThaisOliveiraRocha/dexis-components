// import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SelectWithIcon from "./SelectWithIcon";

export default {
  title: "Components/SelectWithIcon",
  component: SelectWithIcon,
} as ComponentMeta<typeof SelectWithIcon>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof SelectWithIcon> = (args) => (
  <SelectWithIcon {...args} />
);

// Reuse that template for creating different stories
export const Enabled = Template.bind({});
Enabled.args = {
  value: "Teste",
  list: [
    "Agro",
    "Pessoa Fisica",
    "Pessoa Juridica",
    "Backoffice",
    "Expresso",
    "Todas as filas",
  ],
  icon: { src: "/images/filter.svg", alt: "" },
  onChange: () => console.log("Enabled Button clicked"),
  id: "enabled-select",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "Disabled Teste",
  list: [
    "Agro",
    "Pessoa Fisica",
    "Pessoa Juridica",
    "Backoffice",
    "Expresso",
    "Todas as filas",
  ],
  icon: { src: "/images/filterDisabled.svg", alt: "" },
  onChange: () => console.log("Disabled Button clicked"),
  id: "disabled-select",
  disabled: true,
};

export const EnabledWithPlaceholder = Template.bind({});
EnabledWithPlaceholder.args = {
  placeholder: "Download", 
  list: [
    "Documento PDF (.pdf)",
    "Microsoft Excel (.xlsx)",
    "Comma Separated Values (.csv)",
  ],
  icon: { src: "/images/download.svg", alt: "" },
  onChange: () => console.log("Enabled Button clicked"),
  id: "enabled-select",
};
