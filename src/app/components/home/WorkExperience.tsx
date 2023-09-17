import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Section from "../Section";
import WorkExperienceCard from "../WorkExperienceCard";

const WorkExperience = () => {
  const workExperienceCards = [0, 1, 2, 3, 4, 5];

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
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        withDivider
      >
        <Flex gap={8} mb={"6"}>
          {workExperienceCards.slice(0, 2).map((card) => (
            <WorkExperienceCard key={card} />
          ))}
        </Flex>
        <Grid gap={12} gridTemplateColumns="repeat(3, 1fr)" placeItems="center">
          {workExperienceCards.slice(3).map((card) => (
            <GridItem key={card.toString()}>
              <WorkExperienceCard />
            </GridItem>
          ))}
        </Grid>
      </Section>
    </Box>
  );
};

export default WorkExperience;
