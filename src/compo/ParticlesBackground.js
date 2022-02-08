import React from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import ParticleConfig from "./particlesConfig";

const Box = styled.div`
  /* height: 100%;
  width: 100%; */
`;
const ParticlesBackground = () => {
  return <Particles options={ParticleConfig} />;
};

export default ParticlesBackground;
