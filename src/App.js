import "./App.css";
import styled from "styled-components";
import Home from "./compo/Home";
import ParticlesBackground from "./compo/ParticlesBackground";
import LineCompo from "./compo/Line";
import Icons from "./compo/Icons";
import { Routes, Route, Link, useParams } from "react-router-dom";
import MySkillsPage from "./compo/MySkillsPage";
import AboutPage from "./compo/AboutPage";
import Projects from "./compo/Projects";
import Intro from "./compo/Intro";
import Skills from "./compo/Skills";
import ProjectsPage from "./compo/ProjectsPage";

export const Emoji = styled.span`
  font-size: 30px;

  @media (max-width: 1080px) {
    font-size: 21px;
  }
  @media (max-width: 950px) {
    font-size: 15px;
  }
`;

const Container = styled.div`
  margin: 0;
  /* padding: 20px; */
  height: auto;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const HomeHeading = styled(Link)`
  position: absolute;
  top: 10px;
  color: white;
  z-index: 20;
  left: 30px;
  /* transform: rotate(-90deg); */
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 950px) {
    font-size: 12px;
    left: 15px;
  }
`;

function App() {
  return (
    <>
      <Container>
        <Intro />
        <Skills />
        <Projects />
        <HomeHeading to="/">
          The one with Portfolio <Emoji> 🚀 </Emoji>
        </HomeHeading>
        <ParticlesBackground />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/projects" element={<ProjectsPage />} />
          <Route exact={true} path="/skills" element={<MySkillsPage />} />
          <Route exact={true} path="/about" element={<AboutPage />} />
        </Routes>
        <Icons />
        <LineCompo />
      </Container>
    </>
  );
}

export default App;
