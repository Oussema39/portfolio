import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Section from "./Section";
import MePicture from "./MePicture";

const Hero = () => {
  return (
    <Section
      title={
        <Text>
          {/*eslint-disable-next-line react/no-unescaped-entities*/}
          i'm web developer <br /> oussema heni
        </Text>
      }
      titleHeadingProps={{
        fontSize: ["4xl", "7xl", "7xl"],
        textAlign: ["center", "center", "left"],
        whiteSpace: ["nowrap", "normal", "normal"],
      }}
      subtitleHeadingProps={{
        textAlign: ["center", "center", "left"],
      }}
      subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, necessitatibus?"
      display={["block", "block", "grid"]}
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="repeat(3, min-content)"
    >
      <Flex justifyContent={["center", "center", "start"]} mb={6}>
        <Button bg="brand.main" color="whiteAlpha.900" fontWeight="medium">
          Learn more
        </Button>
      </Flex>
      <Flex
        justifyContent={["center", "center", "end"]}
        gridArea="1 / 2 / 3 / 3"
      >
        <MePicture />
      </Flex>
    </Section>
  );
};

export default Hero;
