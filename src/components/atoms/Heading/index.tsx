import React from "react";
import { HeadingProps, Heading as CUHeading } from "@chakra-ui/react";
import colors from "@lib/theme/colors";

type Props = HeadingProps;

const Heading: React.FC<Props> = ({ children, ...props }) => {
  return (
    <CUHeading color={colors.neutral.black800} {...props}>
      {children}
    </CUHeading>
  );
};

export default Heading;
