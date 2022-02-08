import React from "react";
import styled from "styled-components";
import { DiBootstrap } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import Heading from "./Heading";
import skillsImage from "../imgs/skills.jpg";

const Container = styled.div`
  z-index: 20;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  margin: 10px 70px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    margin-top: 70px;
  }
  @media (max-width: 740px) {
    flex-wrap: wrap;
    margin-top: 85px;
  }
`;

const Box = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 20;
  flex: 1;
  @media (max-width: 1080px) {
    bottom: -5px;
  }
`;

const ImagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  max-height: 50vh;
  position: relative;
`;

const Icons = styled.div`
  font-size: 45px;
  color: white;
  display: flex;
  justify-content: space-around;

  & > * > * {
    border: 2px solid white;
  }
  & > * {
    border: 2px solid white;
  }
  & > * {
    border-radius: 50%;
    background: transparent;
  }
`;

const Text = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 15px;
  @media (max-width: 1300px) {
    letter-spacing: 1px;
    font-size: 0.98rem;
  }

  @media (max-width: 540px) {
    letter-spacing: 1px;
    font-size: 0.8rem;
    padding: 5px;
  }
`;

const Image = styled.img`
  src: ${(props) => props.src};
  width: 85%;
  min-width: 300px;
  top: 0;
`;
const Image2 = styled.img`
  src: ${(props) => props.src};
  height: auto;
  width: 70%;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
`;
const MySkillsPage = () => {
  return (
    <>
      <Heading text={"The one with Skills 💪"} />
      <Container>
        <Box
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <Icons>
            <DiBootstrap />
            <DiGithubBadge />
            <DiReact />
            <DiMongodb />
            <DiPython />
            <DiNodejsSmall />
            <DiJavascript1 />
            <DiCss3 />
          </Icons>
          <Text>
            My skill creative skills include React, Express, NodeJs, MongoDB.
            Also have worked with quite a few css libraries like Bootstrap,
            Materialize Css, Chakra UI. Whereas analytical skills are in domain
            of Machine Learning with python, worked with jupyter nodebook,
            numpy, pandas, matplotlib, tensorflow, sklearn.
          </Text>
        </Box>
        <Box style={{ paddingTop: "60px" }}>
          <Image src={skillsImage} />
        </Box>
      </Container>
    </>
  );
};

export default MySkillsPage;
