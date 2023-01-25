import React from "react";
import { ComponentMeta, ArgTypes } from "@storybook/react";

import Menu from "./";
import { default as AvatarComponent } from "@/components/atoms/Avatar";

export default {
  title: "Components/Molecules/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const Avatar = (args: ArgTypes) => (
  <Menu
    buttonAs={
      <AvatarComponent
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        size="sm"
      />
    }
    items={[
      { key: "profile", name: "Profile" },
      { key: "signout", name: "Sign Out" },
    ]}
    {...args}
  />
);

export const Divider = (args: ArgTypes) => (
  <Menu
    buttonAs={
      <AvatarComponent
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        size="sm"
      />
    }
    items={[{ key: "profile", name: "Profile" }]}
    itemsAfterDivider={[
      { key: "signout", name: "Sign Out", bold: true, color: "red" },
    ]}
    {...args}
  />
);
