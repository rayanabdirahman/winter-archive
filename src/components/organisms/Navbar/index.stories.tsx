import React from "react";
import { ComponentMeta, ArgTypes } from "@storybook/react";

import Navbar from "./";

export default {
  title: "Components/Organisms/Navbar",
  component: Navbar,
  argTypes: {
    size: { control: "radio", options: ["xs", "sm", "md", "lg"] },
    isSignedIn: { type: "boolean" },
  },
} as ComponentMeta<typeof Navbar>;

export const SignedIn = (args: ArgTypes) => (
  <Navbar isSignedIn={true} {...args} />
);

export const SignedOut = (args: ArgTypes) => (
  <Navbar isSignedIn={true} {...args} />
);
