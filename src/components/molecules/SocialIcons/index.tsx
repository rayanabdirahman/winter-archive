import React from "react";
import { HStack } from "@chakra-ui/react";
import { IoLogoTwitter } from "react-icons/io5";
import IconButton from "../IconButton";

const SocialIcons = () => (
  <HStack>
    <IconButton icon={IoLogoTwitter} />
  </HStack>
);

export default SocialIcons;
