import React from "react";
import { ComponentMeta, ArgTypes } from "@storybook/react";

import IconButton from "./";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default {
  title: "Components/Molecules/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const Default = (args: ArgTypes) => (
  <IconButton icon={HiMagnifyingGlass} {...args} />
);
