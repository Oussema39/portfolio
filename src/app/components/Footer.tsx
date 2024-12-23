import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Socials from "./Socials";
import Logo from "./Logo";
import { proEmail } from "../utils/personal";

const Footer = () => {
  return (
    <Box color={"whiteAlpha.900"} bg={"brand.accent.500"}>
      <Container maxWidth="container.xl" minHeight={"4"} p={10}>
        <Flex
          w={"full"}
          direction={["column", "column", "row"]}
          justifyContent={"space-between"}
          alignItems={["center", "", ""]}
          gap={8}
          mb={10}
        >
          <Socials />
          <Flex direction={"column"} alignItems={"center"}>
            <Logo dimensions={["50px"]} />
            <Text fontSize={"md"} textAlign={"center"}>
              Copyright ©️ {new Date().getFullYear().toString()} Oussema Heni
            </Text>
          </Flex>
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            textAlign={["center", "left", "left"]}
          >
            {proEmail}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
