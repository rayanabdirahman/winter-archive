import React from "react";
import { Button as CUButton } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import colors from "@lib/theme/colors";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Link: React.FC<Props> = ({ href, children }) => (
  <CUButton variant="ghost" fontWeight="bold" color={colors.neutral.black800}>
    <NextLink href={href}>{children}</NextLink>
  </CUButton>
);

export default Link;
