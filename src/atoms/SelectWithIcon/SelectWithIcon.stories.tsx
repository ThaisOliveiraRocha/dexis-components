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
    {
      value: 0,
      label: "Agro",
    },
    {
      value: 1,
      label: "Pessoa Fisica",
    },
    {
      value: 2,
      label: "Pessoa Juridica",
    },
    {
      value: 3,
      label: "Backoffice",
    },
    {
      value: 4,
      label: "Expresso",
    },
    {
      value: 5,
      label: "Todas as filas",
    },
  ],
  icon: { src: "/images/filter.svg", alt: "" },
  onChange: () => console.log("Enabled Button clicked"),
  id: "enabled-select",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "Disabled Teste",
  list: [
    {
      value: 0,
      label: "Agro",
    },
    {
      value: 1,
      label: "Pessoa Fisica",
    },
    {
      value: 2,
      label: "Pessoa Juridica",
    },
    {
      value: 3,
      label: "Backoffice",
    },
    {
      value: 4,
      label: "Expresso",
    },
    {
      value: 5,
      label: "Todas as filas",
    },
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
    {
      value: 0,
      label: "Documento PDF (.pdf)",
    },
    {
      value: 1,
      label: "Microsoft Excel (.xlsx)",
    },
    {
      value: 2,
      label: "Comma Separated Values (.csv)",
    },
  ],
  icon: { src: "/images/download.svg", alt: "" },
  onChange: () => console.log("Enabled Button clicked"),
  id: "enabled-select",
};
