import React from "react";
import { ComponentMeta, ArgTypes } from "@storybook/react";

import Button from "./";

export default {
  title: "Components/Atoms/Button",
  component: Button,
  argTypes: {
    size: { control: "radio", options: ["xs", "sm", "md", "lg"] },
    disabled: { type: "boolean" },
  },
} as ComponentMeta<typeof Button>;

export const Primary = (args: ArgTypes) => (
  <Button primary {...args}>
    Button
  </Button>
);

export const Secondary = (args: ArgTypes) => (
  <Button secondary {...args}>
    Button
  </Button>
);

export const Tertiary = (args: ArgTypes) => (
  <Button tertiary {...args}>
    Button
  </Button>
);
