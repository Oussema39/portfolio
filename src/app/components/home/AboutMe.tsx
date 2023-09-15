import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
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
      <Grid
        display={["block", "block", "grid"]}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows={"repeat(3, 1fr)"}
        gridTemplateAreas={`
            "title . picture"
            "paragraph1 paragraph2  picture"
            "contact-button contact-button picture"
        `}
        columnGap={16}
      >
        <GridItem gridArea={"title"}>
          <Heading as="h3" mb={6} color="brand.accent.600">
            Developing With a Passion While Exploring The World.
          </Heading>
          <Divider variant="custom" width={["5rem", "7rem", "7rem"]} mb={6} />
        </GridItem>
        <GridItem gridArea={"paragraph1"}>
          <Text mb={4} textAlign="justify" color="brand.accent.400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Text>
        </GridItem>
        <GridItem gridArea={"paragraph2"}>
          <Text mb={8} textAlign="justify" color="brand.accent.400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eius laboriosam fuga. Pariatur accusantium placeat voluptas harum
            est culpa consectetur!
          </Text>
        </GridItem>
        <GridItem gridArea={"contact-button"}>
          <ActionButton size="md" mb={20}>
            Contact Me
          </ActionButton>
        </GridItem>
        <GridItem gridArea={"picture"}>
          <Center>
            <Box
              position="relative"
              boxSize="md"
              isolation="isolate"
              borderRadius="md"
              maxW="sm"
              transform={["translateX(-0.65rem)", "", ""]}
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
        </GridItem>
      </Grid>
    </Section>
  );
};

export default AboutMe;
