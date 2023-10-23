import { Flex, Link } from "@chakra-ui/react";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";

const Socials = ({ direction = "row" }: { direction?: "column" | "row" }) => {
  return (
    <Flex flexDir={direction} gap={8}>
      <Link
        href="https://www.linkedin.com/in/oussema-heni-710329200/"
        target="_blank"
      >
        <LinkedinIcon
          boxSize={5}
          cursor={"pointer"}
          color={"whiteAlpha.900"}
          _hover={{ color: "brand.main.default" }}
        />
      </Link>
      <Link>
        <TwitterIcon
          boxSize={5}
          cursor={"pointer"}
          color={"whiteAlpha.900"}
          _hover={{ color: "brand.main.default" }}
        />
      </Link>
      <Link>
        <FacebookIcon
          boxSize={5}
          cursor={"pointer"}
          color={"whiteAlpha.900"}
          _hover={{ color: "brand.main.default" }}
        />
      </Link>
      <Link>
        <InstagramIcon
          boxSize={5}
          cursor={"pointer"}
          color={"whiteAlpha.900"}
          _hover={{ color: "brand.main.default" }}
        />
      </Link>
    </Flex>
  );
};

export default Socials;
