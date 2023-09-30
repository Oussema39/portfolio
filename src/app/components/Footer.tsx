import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Socials from "./Socials";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Box color={"whiteAlpha.900"} bg={"brand.accent.500"}>
      <Container maxWidth="container.xl" minHeight={"4"} p={10}>
        <Flex
          w={"full"}
          direction={["column", "column", "row"]}
          justifyContent={"space-between"}
          gap={8}
          mb={10}
        >
          <Socials />
          <Flex direction={"column"} alignItems={"center"}>
            <Logo dimensions={["100px"]} />
            <Text fontSize={"md"} textAlign={"center"}>
              Copyright ©️ {new Date().getFullYear().toString()} Oussema Heni
            </Text>
          </Flex>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            oussema.devpro@gmail.com
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
