// import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SkeletonLoading from "./SkeletonLoading";

export default {
  title: "Components/SkeletonLoading",
  component: SkeletonLoading,
} as ComponentMeta<typeof SkeletonLoading>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof SkeletonLoading> = (args) => (
  <SkeletonLoading {...args} />
);

// Reuse that template for creating different stories
export const LineLoading = Template.bind({});
LineLoading.args = {
  width: '300px',
  height: '20px',
  isCircle: false
};

export const CircleLoading = Template.bind({});
CircleLoading.args = {
  width: '200px',
  height: '200px',
  isCircle: true
};
