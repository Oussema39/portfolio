import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Section from "../Section";
import MePicture from "../MePicture";
import ActionButton from "../ActionButton";

const Hero = () => {
  return (
    <Box bg="brand.main.100">
      <Section
        display={["block", "block", "grid"]}
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="repeat(3, min-content)"
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
          as: "h1",
        }}
        subtitleHeadingProps={{
          textAlign: ["center", "center", "left"],
        }}
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, necessitatibus?"
      >
        <Flex justifyContent={["center", "center", "start"]} mb={6}>
          <ActionButton>Learn more</ActionButton>
        </Flex>
        <Flex
          justifyContent={["center", "center", "end"]}
          gridArea="1 / 2 / 3 / 3"
        >
          <MePicture />
        </Flex>
      </Section>
    </Box>
  );
};

export default Hero;
