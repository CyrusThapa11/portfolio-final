import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Emoji } from "../App";

const Box = styled.div`
  position: absolute;
  bottom: 5px;
  left: 20vw;
  z-index: 40;
  cursor: pointer;
  & > .link {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 1080px) {
    bottom: 0px;
  }
  @media (max-width: 740px) {
    left: 12vw;
  }
  @media (max-width: 570px) {
    left: 6vw;
  }
  @media (max-width: 500px) {
    /* left: 29vw; */
    bottom: -4px;
    right: auto;
    left: auto;
  }
`;

const Projects = () => {
  return (
    <Box>
      <Link to="/projects" className="link">
        The One With Projects <Emoji>💻 </Emoji>
      </Link>
    </Box>
  );
};

export default Projects;
