import { Box, IconButton } from "@chakra-ui/react";
import AboutMe from "./components/home/AboutMe";
import ClientsFeedback from "./components/home/ClientsFeedback";
import Hero from "./components/home/Hero";
import MyServices from "./components/home/MyServices";
import Projects from "./components/home/Projects";
import WorkExperience from "./components/home/WorkExperience";
import ProjectModalContext from "./context/ProjectModalProvider";
import { ChevronUpIcon } from "./icons/ChevronUpIcon";

const Home = () => {
  return (
    <Box>
      <Hero />
      <AboutMe />
      <MyServices />
      <WorkExperience />
      <ProjectModalContext>
        <Projects />
      </ProjectModalContext>
      <ClientsFeedback />
      <IconButton
        zIndex={999}
        borderRadius={"full"}
        position={"fixed"}
        as={"a"}
        aria-label="scroll-up"
        href="#navbar"
        icon={<ChevronUpIcon color={"brand.main.default"} />}
        bottom={10}
        right={10}
      />
    </Box>
  );
};

export default Home;
