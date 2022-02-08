import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  top: -22px;
  font-size: 20px;
  z-index: 20;

  color: white;
  @media (max-width: 1080px) {
    right: 280px;
    font-size: 15px;
  }
  @media (max-width: 850px) {
    right: 210px;
    font-size: 15px;
  }
  @media (max-width: 777px) {
    right: 140px;
    font-size: 15px;
  }

  @media (max-width: 700px) {
    right: 150px;
    top: 1px;
    font-size: 12px;
  }
  @media (max-width: 650px) {
    right: auto;
    left: auto;
    top: 15px;
    font-size: 14px;
  }
  @media (max-width: 370px) {
    right: auto;
    left: auto;
    top: 15px;
    font-size: 12px;
  }
`;

const Heading = ({ text }) => {
  return (
    <Box>
      <h1>{text} </h1>
    </Box>
  );
};

export default Heading;
