"use client";
import React from "react";
import Section from "../Section";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorMode,
} from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";
import { projects } from "@/app/data/projects";
import { useProjectModalContext } from "@/app/context/ProjectModalProvider";
import { Project } from "@/app/interface/Project";

const Projects = () => {
  const { isOpen, onClose, selectedProject } = useProjectModalContext();

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
      {selectedProject !== null && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          onEsc={onClose}
          motionPreset="scale"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProject.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ProjectCard
                fullDetails
                {...(selectedProject ?? ({} as Project))}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Projects;
