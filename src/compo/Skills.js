import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Emoji } from "../App";

const Box = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20vw;
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
    right: 12vw;
  }

  @media (max-width: 570px) {
    right: 6vw;
  }
  @media (max-width: 500px) {
    /* right: 26vw; */
    bottom: 20px;
    right: auto;
    left: auto;
  }
`;

const Skills = () => {
  return (
    <Box>
      <Link to="/skills" className="link">
        The One With Skills <Emoji> 💪 </Emoji>
      </Link>
    </Box>
  );
};

export default Skills;
