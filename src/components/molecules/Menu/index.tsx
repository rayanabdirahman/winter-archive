import React from "react";
import {
  Menu as CUMenu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
  MenuOptionGroup,
} from "@chakra-ui/react";
import colors from "@lib/theme/colors";

type ItemType = { key: string; name: string; bold?: boolean; color?: string };

type Props = {
  buttonAs: React.ReactNode;
  items: ItemType[];
  itemsAfterDivider?: ItemType[];
};

const Menu: React.FC<Props> = ({ buttonAs, items, itemsAfterDivider }) => {
  const menuItems = items?.map((item) => (
    <MenuItem
      key={`menuItemsBeforeDivider--${item.key}`}
      fontSize="14"
      fontWeight={item.bold ? "bold" : "normal"}
      color={item.color ? item.color : colors.neutral.black800}
    >
      {item.name}
    </MenuItem>
  ));

  const menuItemsAfterDivider = itemsAfterDivider?.map((item) => (
    <MenuItem
      key={`menuItemsAfterDivider--${item.key}`}
      fontSize="14"
      fontWeight={item.bold ? "bold" : "normal"}
      color={item.color ? item.color : colors.neutral.black800}
    >
      {item.name}
    </MenuItem>
  ));

  const Component = buttonAs;

  return (
    <CUMenu>
      <MenuButton as={Button} variant="link">
        {Component}
      </MenuButton>
      <MenuList minW="150px">
        <MenuOptionGroup>{menuItems}</MenuOptionGroup>
        {itemsAfterDivider?.length && <MenuDivider />}
        <MenuOptionGroup>{menuItemsAfterDivider}</MenuOptionGroup>
      </MenuList>
    </CUMenu>
  );
};

export default Menu;
