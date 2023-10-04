import { Box, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import Section from "../Section";
import WorkExperienceCard from "../WorkExperienceCard";
import { workExperiences } from "@/app/data/workExperiences";

const WorkExperience = () => {
  return (
    <Box
      isolation="isolate"
      position="relative"
      _after={{
        zIndex: -1,
        position: "absolute",
        content: `''`,
        inset: 0,
        backgroundImage:
          "linear-gradient(brand.main.default , brand.accent.default , transparent 60%)",
        borderTopLeftRadius: "full",
        left: ["10", "20"],
        opacity: 0.05,
      }}
    >
      <Section
        title="Work Experience"
        subtitle="Checkout my work history"
        withDivider
      >
        <Flex gap={8} mb={"6"} flexWrap={["wrap", "nowrap"]}>
          {workExperiences.slice(0, 2).map((experience) => (
            <Box key={experience.endDate.toString()} flexBasis={"1fr"}>
              <WorkExperienceCard {...experience} />
            </Box>
          ))}
        </Flex>
        <Grid
          gap={12}
          gridTemplateColumns="repeat(auto-fit, minmax(200px,1fr))"
        >
          {workExperiences.slice(3).map((experience) => (
            <GridItem key={experience.endDate.toString()}>
              <WorkExperienceCard {...experience} />
            </GridItem>
          ))}
        </Grid>
      </Section>
    </Box>
  );
};

export default WorkExperience;
