"use client";
import { Box, Container, Flex, Link, useColorMode } from "@chakra-ui/react";
import ChakraLink from "./custom/ChakraLink";
import NavbarMenu from "./NavbarMenu";
import Logo from "./Logo";
import { NavbarInnerLinks } from "../utils/config";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      width="100%"
      zIndex="sticky"
      background="none"
      backdropFilter="blur(20px)"
      backgroundColor="rgba(255,255,255,0.2)"
      transition="transform 0.3s"
      transform={`translateY(${hidden ? "-100%" : 0})`}
    >
      <Container maxWidth="container.xl" bg="transparent" id="navbar">
        <Flex alignItems="center" justifyContent="space-between" py={3}>
          <ChakraLink href="/">
            <Logo />
          </ChakraLink>
          <Flex display={["none", "none", "inline-flex"]} gap={8}>
            {NavbarInnerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={`#${href}`}
                _hover={{
                  color: "brand.main.default",
                }}
                fontSize="lg"
              >
                {label}
              </Link>
            ))}
            {/* TODO: implement experimental dark mode */}
            {/* <Box cursor="pointer" onClick={toggleColorMode}>
              <LightDarkIcon boxSize="6" />
            </Box> */}
          </Flex>
          <Box display={["block", "block", "none"]}>
            <NavbarMenu />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
