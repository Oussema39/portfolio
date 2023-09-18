import React from "react";
import Section from "../Section";
import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";

const Projects = async () => {
  const projects = [0, 1, 2, 3, 4, 5];
  return (
    <Section title="Projects" subtitle="Lorem ipsum dolor sit amet.">
      <Grid
        gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
        gap={8}
      >
        {projects.map((project) => (
          <GridItem
            key={project}
            borderRadius={"2xl"}
            overflow={"hidden"}
            boxShadow={"base"}
          >
            <ProjectCard />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
