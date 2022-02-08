import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Emoji } from "../App";

const Box = styled.div`
  position: absolute;
  right: -2rem;
  z-index: 40;
  transform: rotate(90deg);
  & > .link {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 900px) {
    right: -4rem;
  }
  @media (max-width: 500px) {
    right: -5rem;
  }
`;

const Intro = () => {
  return (
    <Box>
      <Link to="/about" className="link">
        The One With Intro <Emoji>💁</Emoji>
      </Link>
    </Box>
  );
};

export default Intro;
