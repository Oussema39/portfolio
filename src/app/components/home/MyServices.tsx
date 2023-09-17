import { Box, Grid, GridItem } from "@chakra-ui/react";
import Section from "../Section";
import ServiceCard from "../ServiceCard";

const MyServices = () => {
  const cards = [0, 1, 2];
  return (
    <Box
      isolation="isolate"
      bg="brand.main.100"
      position="relative"
      _after={{
        zIndex: -1,
        position: "absolute",
        content: `''`,
        inset: 0,
        backgroundImage:
          "linear-gradient(brand.main.default , brand.accent.default , transparent 60%)",
        borderTopRightRadius: "full",
        right: ["10", "60"],
        opacity: 0.05,
      }}
    >
      <Section
        title="What Services I'm Providing"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        withDivider
      >
        <Grid
          gridTemplateColumns={["", "", "repeat(3, 1fr)"]}
          placeItems="center"
          gap={"20"}
        >
          {cards.map((card) => (
            <GridItem key={card.toString()}>
              <ServiceCard />
            </GridItem>
          ))}
        </Grid>
      </Section>
    </Box>
  );
};

export default MyServices;
