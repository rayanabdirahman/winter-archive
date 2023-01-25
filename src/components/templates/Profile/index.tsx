import React from "react";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "@/components/organisms/Navbar";
import Avatar from "@/components/atoms/Avatar";
import colors from "@lib/theme/colors";
import Button from "@/components/atoms/Button";

type Props = {
  children: React.ReactNode;
};

const ProfileTemplate: React.FC<Props> = ({ children }) => (
  <>
    <Navbar isSignedIn={true} withBorder={false} />
    <Box as="main">
      <Container maxW="container.xl">
        <Box as="section">
          <Image
            src="https://unistudio.co/ui8/renox/assets/images/other/cover.jpg"
            alt="profile header"
            height="250px"
            borderRadius="lg"
            objectFit="cover"
          />
        </Box>

        <Grid
          // h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Stack spacing={10}>
              <Stack marginTop="-12" spacing={4} alignItems="center">
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  size="xl"
                  borderWidth={4}
                />

                <Stack spacing={1} textAlign="center">
                  <Heading as="h1" size="md" color={colors.neutral.black800}>
                    Thesalvare
                  </Heading>
                  <Text fontSize="sm" color="gray">
                    @thesalvare
                  </Text>
                </Stack>

                <Button tertiary={true} w="3xs">
                  Follow
                </Button>
              </Stack>

              <Text textAlign="center" color={colors.neutral.black800}>
                I make art with the simple goal of giving you something pleasing
                to look at for a few seconds.
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
        </Grid>

        {/* {children} */}
      </Container>
    </Box>
  </>
);

export default ProfileTemplate;
