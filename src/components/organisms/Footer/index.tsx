import React from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import SocialIcons from "@/components/molecules/SocialIcons";
import colors from "@lib/theme/colors";
import Newsletter from "../Newsletter";
import Text from "@/components/atoms/Text";

const Footer: React.FC = () => {
  return (
    <Box borderTopWidth="1px" borderTopColor={colors.neutral.gray50}>
      <Newsletter />
      <HStack
        justifyContent="space-between"
        py={4}
        borderTopWidth="1px"
        borderTopColor={colors.neutral.gray50}
      >
        <HStack>
          <Text gray={true}>&copy; Winter, All rights reserved.</Text>
          <Button variant="ghost">Terms</Button>
          <Button variant="ghost">Privacy policy</Button>
        </HStack>

        <SocialIcons />
      </HStack>
    </Box>
  );
};

export default Footer;
