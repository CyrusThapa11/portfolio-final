import React from "react";
import styled from "styled-components";

const Line = styled.div`
  position: absolute;
  left: 20px;
  height: 220px;
  width: 2px;
  color: white;
  bottom: 0;
  background-color: #a959ff;
  z-index: 30;
  @media (max-width: 570px) {
    left: 10px;
    bottom: -12px;
    height: 480px;
  }
`;

const LineCompo = () => {
  return <Line></Line>;
};

export default LineCompo;
