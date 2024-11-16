import { Flex, Link, Tooltip } from "@chakra-ui/react";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { FreelancerIcon } from "../icons/FreelancerIcon";

const Socials = ({ direction = "row" }: { direction?: "column" | "row" }) => {
  return (
    <Flex flexDir={direction} gap={8}>
      <Tooltip label="Linkedin" color="brand.main.default">
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
      </Tooltip>

      <Tooltip label="Github" color="brand.main.default">
        <Link href="https://github.com/Oussema39" target="_blank">
          <GithubIcon
            boxSize={5}
            cursor={"pointer"}
            color={"whiteAlpha.900"}
            _hover={{ color: "brand.main.default" }}
          />
        </Link>
      </Tooltip>
      <Tooltip label="Twitter" color="brand.main.default">
        <Link href="https://twitter.com/OussemaHeny" target="_blank">
          <TwitterIcon
            boxSize={5}
            cursor={"pointer"}
            color={"whiteAlpha.900"}
            _hover={{ color: "brand.main.default" }}
          />
        </Link>
      </Tooltip>
      <Tooltip label="Freelancer" color="brand.main.default">
        <Link href="https://www.freelancer.com/u/OussemaHeny" target="_blank">
          <FreelancerIcon
            boxSize={6}
            cursor={"pointer"}
            color={"whiteAlpha.900"}
            _hover={{ color: "brand.main.default" }}
          />
        </Link>
      </Tooltip>
    </Flex>
  );
};

export default Socials;
