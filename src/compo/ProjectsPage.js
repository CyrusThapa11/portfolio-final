import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import mern1 from "../imgs/crisis-stbl.png";
import mern2 from "../imgs/mern-2.png";
import static1 from "../imgs/static-1.png";
import static2 from "../imgs/static-2.png";
import static3 from "../imgs/static-3.png";
import slackclone from "../imgs/slackclone.png";

const Container = styled.div`
  z-index: 20;
  color: white;
  margin: 10px 70px;
  margin-top: 4rem;
  height: auto;
  /* display: flex; */
  @media (max-width: 1000px) {
    /* flex-wrap: wrap; */
    margin-top: 70px;
  }
  @media (max-width: 740px) {
    flex-wrap: wrap;
    margin-top: 85px;
  }
`;

const Box = styled.div`
  /* width: 25vw; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  z-index: 20;
  flex: 1;
  margin: 0.5rem;
  border-radius: 18px 8px 12px 84px / 92px 94px 90px 26px;
  border: 3.5px solid white;
  backdrop-filter: blur(10px);
  padding: 10px;
  @media (max-width: 1080px) {
    /* bottom: -5px; */
    flex-wrap: wrap;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  margin: 1rem;
  @media (max-width: 1080px) {
    /* bottom: -5px; */
    flex-wrap: wrap;
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
  font-size: 10px;
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
  width: 300px;
  /* height: 100%; */
  object-fit: contain;
  border-radius: 15px;
`;

const ProjectsPage = () => {
  return (
    <>
      <Heading text={"The one with Projects 💻"} />
      <Container>
        <BoxContainer>
          <Box>
            <Image src={mern1} style={{ borderRadius: "10px" }} />
            {/* <Text>
              nobis in repellat id dolore blanditiis tempora exercitationem
              dignissimos
            </Text> */}
          </Box>
          <Box>
            <Image src={mern2} style={{ borderRadius: "10px" }} />
            {/* <Text>
              nobis in repellat id dolore blanditiis tempora exercitationem
              dignissimos
            </Text> */}
          </Box>
          <Box>
            <Image src={slackclone} style={{ borderRadius: "10px" }} />
            {/* <Text>
              nobis in repellat id dolore blanditiis tempora exercitationem
              dignissimos
            </Text> */}
          </Box>
        </BoxContainer>

        <BoxContainer>
          <Box>
            <Image src={static1} style={{ borderRadius: "10px" }} />
            {/* <Text>
              nobis in repellat id dolore blanditiis tempora exercitationem
              dignissimos
            </Text> */}
          </Box>
          <Box>
            <Image src={static2} style={{ borderRadius: "10px" }} />
            {/* <Text>
              nobis in repellat id dolore blanditiis tempora exercitationem
              dignissimos
            </Text> */}
          </Box>
          <Box>
            <Image src={static3} style={{ borderRadius: "10px" }} />
            {/* <Text>
              nobis in repellat id dolore blanditiis tempora exercitationem
              dignissimos
            </Text> */}
          </Box>
        </BoxContainer>
      </Container>
    </>
  );
};

export default ProjectsPage;
