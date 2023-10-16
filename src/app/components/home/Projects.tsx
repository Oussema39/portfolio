import React from "react";
import Section from "../Section";
import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";
import { projects } from "@/app/data/projects";

const Projects = async () => {
  return (
    <Section title="Projects" subtitle="Lorem ipsum dolor sit amet.">
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
  );
};

export default Projects;
