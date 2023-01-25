import React from "react";
import {
  Box,
  Container,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";
import {
  HiOutlineShoppingBag,
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

import Button from "@/components/atoms/Button";
import Link from "@/components/atoms/Link";
import IconButton from "@/components/molecules/IconButton";
import Menu from "@/components/molecules/Menu";
import Avatar from "@/components/atoms/Avatar";
import colors from "@lib/theme/colors";

type Props = {
  isSignedIn: boolean;
  withBorder?: boolean;
};

const SignedInMenu = () => (
  <>
    <HStack spacing={3}>
      <IconButton icon={HiOutlineMagnifyingGlass} />
      <IconButton icon={HiOutlineBell} />
      <IconButton icon={HiOutlineShoppingBag} />
    </HStack>
    <Menu
      buttonAs={
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="sm"
        />
      }
      items={[{ key: "profile", name: "Profile" }]}
      itemsAfterDivider={[
        {
          key: "signout",
          name: "Sign Out",
          bold: true,
          color: colors.brand.brand500,
        },
      ]}
    />
  </>
);

const SignedOutMenu = () => (
  <>
    <Button secondary borderRadius="xl">
      Sign in
    </Button>
    <Button borderRadius="xl">Create account</Button>
  </>
);

const Navbar: React.FC<Props> = ({ isSignedIn, withBorder = true }) => {
  const boxShadow = useColorModeValue("sm", "sm-dark");
  return (
    <Box as="section" pb={{ base: "2", md: "2" }}>
      <Box as="nav" bg="bg-surface" boxShadow={withBorder ? boxShadow : "none"}>
        <Container maxW="container.xl" py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <HStack spacing="10">
              <Image width="80px" src="/winter.svg" alt="logo" />

              <HStack>
                {["Explore", "Trending", "Activity"].map((item) => (
                  <Link key={item} href="">
                    {item}
                  </Link>
                ))}
              </HStack>
            </HStack>

            <HStack>{isSignedIn ? <SignedInMenu /> : <SignedOutMenu />}</HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
