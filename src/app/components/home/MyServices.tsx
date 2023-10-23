import { Box, Grid, GridItem } from "@chakra-ui/react";
import Section from "../Section";
import ServiceCard from "../ServiceCard";
import { services } from "@/app/data/services";

const MyServices = () => {
  return (
    <Box
      id="services"
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
        subtitle="Stay up-to-date of my latest services"
        withDivider
      >
        <Grid
          gridTemplateColumns={["", "", "repeat(3, 1fr)"]}
          placeItems="center"
          gap={"20"}
        >
          {services.map((service) => (
            <GridItem key={service.title}>
              <ServiceCard service={service} />
            </GridItem>
          ))}
        </Grid>
      </Section>
    </Box>
  );
};

export default MyServices;
