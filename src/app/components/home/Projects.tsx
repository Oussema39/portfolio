import React from "react";
import Section from "../Section";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";
import { projects } from "@/app/data/projects";

const Projects = async () => {
  return (
    <Box bg="brand.main.100">
      <Section
        title="Projects"
        subtitle="During the development of each project I have acquired wide range of skills"
      >
        <Grid
          gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          gridAutoRows={"1fr"}
          gap={8}
        >
          {projects.map((project) => (
            <GridItem
              key={project.id}
              borderRadius={"2xl"}
              overflow={"hidden"}
              boxShadow={"base"}
            >
              <ProjectCard {...project} />
            </GridItem>
          ))}
        </Grid>
      </Section>
    </Box>
  );
};

export default Projects;
