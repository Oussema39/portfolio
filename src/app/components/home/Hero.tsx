import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Section from "../Section";
import MePicture from "../MePicture";
import ActionButton from "../ActionButton";
import AnimatedText from "../AnimatedText";
import { aboutMe } from "@/app/utils/personal";

const Hero = () => {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;
  return (
    <Box id="home">
      <Section
        display={["block", "block", "grid"]}
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="repeat(3, min-content)"
        title={
          <Text as={"span"}>
            {/*eslint-disable-next-line react/no-unescaped-entities*/}
            I'm a <AnimatedText text="full stack developer" />
            <br />
          </Text>
        }
        titleHeadingProps={{
          fontSize: ["4xl", "5xl", "6xl", "7xl"],
          textAlign: ["center", "center", "left"],
          whiteSpace: ["nowrap", "normal", "normal"],
          as: "h1",
        }}
        subtitleHeadingProps={{
          textAlign: ["center", "center", "left"],
          color: "",
        }}
        subtitle={aboutMe}
      >
        <Flex justifyContent={["center", "center", "start"]} mb={6}>
          <Link href={resumeUrl} target="_blank" download="Oussema_Heni_Resume">
            <ActionButton>Download Resume</ActionButton>
          </Link>
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
