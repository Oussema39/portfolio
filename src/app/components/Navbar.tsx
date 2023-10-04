import { Box, Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import ChakraLink from "./custom/ChakraLink";
import NavbarMenu from "./NavbarMenu";
import Logo from "./Logo";
import { Navbarlinks } from "../utils/config";

const Navbar = () => {
  return (
    <Container maxWidth="container.xl" bg="transparent">
      <Flex alignItems="center" justifyContent="space-between" py={3}>
        <ChakraLink href="/">
          <Logo />
        </ChakraLink>
        <Flex display={["none", "none", "inline-flex"]} gap={8}>
          {Navbarlinks.map(({ href, label }) => (
            <ChakraLink
              key={href.toString()}
              href={href}
              _hover={{
                color: "brand.main.default",
              }}
              fontSize="lg"
            >
              {label}
            </ChakraLink>
          ))}
        </Flex>
        <Box display={["block", "block", "none"]}>
          <NavbarMenu />
        </Box>
        <Button
          display={["none", "none", "block"]}
          size="lg"
          bg="brand.main.default"
          color="whiteAlpha.900"
          _hover={{
            bg: "brand.main.default",
          }}
        >
          Hire Me
        </Button>
      </Flex>
    </Container>
  );
};

export default Navbar;
