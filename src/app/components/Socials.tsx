import { Flex } from "@chakra-ui/react";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";

const Socials = ({ direction = "row" }: { direction?: "column" | "row" }) => {
  return (
    <Flex flexDir={direction} gap={8}>
      <LinkedinIcon
        boxSize={5}
        cursor={"pointer"}
        color={"whiteAlpha.900"}
        _hover={{ color: "brand.main.default" }}
      />
      <TwitterIcon
        boxSize={5}
        cursor={"pointer"}
        color={"whiteAlpha.900"}
        _hover={{ color: "brand.main.default" }}
      />
      <FacebookIcon
        boxSize={5}
        cursor={"pointer"}
        color={"whiteAlpha.900"}
        _hover={{ color: "brand.main.default" }}
      />
      <InstagramIcon
        boxSize={5}
        cursor={"pointer"}
        color={"whiteAlpha.900"}
        _hover={{ color: "brand.main.default" }}
      />
    </Flex>
  );
};

export default Socials;
