import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import Section from "../Section";
import ActionButton from "../ActionButton";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Section
      title="About me"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      withDivider
    >
      <Heading as="h3" mb={6}>
        Developing With a Passion While Exploring The World.
      </Heading>
      <Divider variant="custom" width={["5rem", "7rem", "7rem"]} mb={6} />
      <Text mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar dapibus leo.
      </Text>
      <Text mb={8}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <ActionButton size="md" mb={20}>
        Contact Me
      </ActionButton>
      <Center>
        <Box
          position="relative"
          boxSize="md"
          isolation="isolate"
          borderRadius="md"
          maxW="sm"
          _after={{
            content: `''`,
            position: "absolute",
            inset: 0,
            bg: "brand.main.default",
            margin: "-1rem 0 -1rem 0",
            transform: "translateX(1rem)",
            zIndex: -1,
            borderRadius: "0.5rem 1.5rem 1.5rem 0.5rem",
          }}
        >
          <Image
            src="/images/computer.jpg"
            alt="computer"
            objectFit="cover"
            fill
            style={{
              borderRadius: "1rem 0.5rem 0.5rem 1rem",
            }}
          />
        </Box>
      </Center>
    </Section>
  );
};

export default AboutMe;
