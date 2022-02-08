import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const Container = styled.div`
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 80%;
  overflow: hidden;
  margin-top: 2.5rem;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    margin-top: 55px;
  }
`;

const Box = styled.div`
  flex: 1;
  padding: 2rem;
  @media (max-width: 1300px) {
    padding: 1.2rem;
  }
  @media (max-width: 900px) {
    flex: auto;
  }
`;

const ImageContainer = styled.div`
  width: 85%;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  src: ${(props) => props.src};
  width: 90%;
  top: 0;
`;
const Image2 = styled.img`
  src: ${(props) => props.src};
  width: 60%;
  position: absolute;
  border-radius: 50%;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
`;

const InnerBox = styled.div``;

const Title = styled.h3`
  letter-spacing: 2.1px;
  text-align: center;
  @media (max-width: 1400px) {
    letter-spacing: 1.4px;
    font-size: 1.1rem;
  }
  @media (max-width: 1300px) {
    letter-spacing: 1.1px;
    font-size: 1.1rem;
  }
`;

const Text = styled.p`
  letter-spacing: 2.1px;
  text-align: center;
  @media (max-width: 1400px) {
    letter-spacing: 1.2px;
    font-size: 1.02rem;
  }
  @media (max-width: 1300px) {
    letter-spacing: 1px;
    font-size: 0.98rem;
  }

  @media (max-width: 540px) {
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
`;

const AboutText = styled.div`
  border: 2px solid #fff;
  /* border: calc(8px + 0.2vw) solid transparent; */
  border-radius: 0px 50px;
  padding: 5px;
  backdrop-filter: blur(10px);
  font-size: 1.1rem;
  color: white;
  transition: all 0.5s ease-in;
  &:hover {
    color: black;
    background-color: white;
    transition: all 0.5s ease-in;
  }

  @media (max-width: 1300px) {
    padding: 2px;
  }
`;

const AboutPage = () => {
  return (
    <>
      <Heading text={"The One With Intro 💁 "} />

      <Container>
        <Box>
          <InnerBox>
            <ImageContainer>
              <Image src="/chandler-friends.gif" />
            </ImageContainer>
            <AboutText>
              <Title>Hey Hey Hey !!</Title>
              <Text>
                I am Cyrus Thapa, native of Dehradun, Uttrakhand ,currently in
                2nd at JIIT Noida.An Active competitive programmer , like
                working with MERN stack , learning Ai/ML. Apart from this I like
                watching Anime , TV series and playing sports
              </Text>
            </AboutText>
          </InnerBox>
        </Box>
        <Box>
          <ImageContainer>
            <Image src="/frame2.png" />
            <Image2 src="/profileImage.png" />
          </ImageContainer>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
