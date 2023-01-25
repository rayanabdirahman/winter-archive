import React from "react";
import { TextProps, Text as CUText } from "@chakra-ui/react";
import colors from "@lib/theme/colors";

type Props = TextProps & {
  gray?: boolean;
};

const Text: React.FC<Props> = ({ gray, children, ...props }) => {
  return (
    <CUText
      color={gray ? colors.neutral.gray500 : colors.neutral.black800}
      {...props}
    >
      {children}
    </CUText>
  );
};

export default Text;
