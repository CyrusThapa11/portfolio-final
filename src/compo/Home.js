import React from "react";
import styled, { keyframes } from "styled-components";
import Heading from "./Heading";

const Container = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 7rem;
  z-index: 20;
`;

const rotate = keyframes`
    from{
        transform:rotate(0);
    }
    to{
        transform:rotate(360deg);
    }
`;
const Box = styled.div`
  flex: ${(props) => props.flex};
  z-index: 20;
  padding: 5px;
  display: flex;
  backdrop-filter: blur(10px);
  & > :first-child {
    animation: ${rotate} infinite 2.5s linear;
  }
`;

const Image = styled.img`
  src: ${(props) => props.src};
  width: 50%;
  margin: auto;
`;

const Home = () => {
  return (
    <>
      <Heading text={"The One With Portfolio 🚀"} />
      <Container>
        <Box>
          {/* <ImageContainer> */}
          <Image
            // src={cperk}
            src="/c-perk.png"
          />
          {/* </ImageContainer> */}
        </Box>{" "}
      </Container>
    </>
  );
};

export default Home;
