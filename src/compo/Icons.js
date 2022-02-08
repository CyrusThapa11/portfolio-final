import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styled from "styled-components";

const Box = styled.div`
  z-index: 20;
  position: absolute;
  left: 15px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  height: 200px;
  & > * {
    z-index: 20;
    color: white;
    text-decoration: none;
  }
  justify-content: space-between;
  font-size: 1.5rem;
  top: 240px;
  /* border: 1px solid white; */
  backdrop-filter: blur(10px);

  @media (max-width: 570px) {
    left: 10px;
  }
`;

const Icons = ({ icon }) => {
  return (
    <Box>
      <a
        href="https://www.instagram.com/_cyrus19xx_/"
        rel="noreferrer"
        target="_blank"
      >
        <BsInstagram
          style={{ color: "#feff10", cursor: "pointer" }}
          className="iconss"
        />
      </a>
      <a
        href="https://www.facebook.com/cyrus.thapa.180"
        rel="noreferrer"
        target="_blank"
      >
        <BsFacebook
          style={{ color: "#ff3102", cursor: "pointer" }}
          className="iconss"
        />
      </a>
      <a
        href="https://twitter.com/CyrusThapa2"
        rel="noreferrer"
        target="_blank"
      >
        <BsTwitter
          style={{ color: "#3e4fff", cursor: "pointer" }}
          className="iconss"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/cyrusthapa/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin
          style={{ color: "#FFF580", cursor: "pointer" }}
          className="iconss"
        />
      </a>
      <a
        href="https://github.com/copyNinja1219"
        rel="noreferrer"
        target="_blank"
      >
        <BsGithub
          style={{ color: "#FFF580", cursor: "pointer" }}
          className="iconss"
        />
      </a>
    </Box>
  );
};

export default Icons;
