import React from "react";
import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
};

const IconButton: React.FC<Props> = ({ icon }) => (
  <Button variant="ghost" p={0} m={0} borderRadius="full">
    <Icon as={icon} w={6} h={6} strokeWidth="1.5" />
  </Button>
);

export default IconButton;
