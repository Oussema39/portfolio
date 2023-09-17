import AboutMe from "./components/home/AboutMe";
import Hero from "./components/home/Hero";
import MyServices from "./components/home/MyServices";
import Projects from "./components/home/Projects";
import WorkExperience from "./components/home/WorkExperience";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MyServices />
      <WorkExperience />
      <Projects />
    </main>
  );
};

export default Home;
