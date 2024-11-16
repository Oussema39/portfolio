"use client";
import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, createContext, useContext, useState } from "react";
import { Project } from "../interface/Project";

type ProjectModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
};

export const ProjectModalProvider =
  createContext<ProjectModalContextType | null>(null);

export const useProjectModalContext = () => {
  const value = useContext(ProjectModalProvider);
  if (value === null)
    throw Error("Please use Project Modal Context inside of its provider");
  return value;
};

const ProjectModalContext = ({ children }: { children: ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectModalProvider.Provider
      value={{
        isOpen,
        onClose,
        onOpen,
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </ProjectModalProvider.Provider>
  );
};

export default ProjectModalContext;
