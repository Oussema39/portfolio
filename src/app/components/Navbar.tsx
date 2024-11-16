"use client";
import { Box, Container, Flex, Link } from "@chakra-ui/react";
import ChakraLink from "./custom/ChakraLink";
import NavbarMenu from "./NavbarMenu";
import Logo from "./Logo";
import { NavbarInnerLinks } from "../utils/config";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
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
      backdropFilter="blur(5px)"
      backgroundColor="common.white"
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
