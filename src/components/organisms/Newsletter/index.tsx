import React from "react";
import { Box, Center, HStack, Stack } from "@chakra-ui/react";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const Newsletter = () => (
  <Box py={10}>
    <Center textAlign="center">
      <Stack spacing={4} maxW="380px">
        <Stack>
          <Heading as="h2">Never miss a drop</Heading>
          <Text>Subscribe for the latest news, drops &amp; collectibles</Text>
        </Stack>
        <HStack>
          <Input variant="filled" placeholder="Email address" size="lg" />
          <Button size="lg" tertiary={true}>
            Subscribe
          </Button>
        </HStack>
        <Text fontSize="xs" gray={true}>
          No worries we don&apos;t spam! Unsubscribe at any time by clicking on
          the link in the email.
        </Text>
      </Stack>
    </Center>
  </Box>
);

export default Newsletter;
