import React from "react";
import { Link } from "react-router-dom";

// Image assets
import Logo from "../img/logo.png";
// import Logo2 from "../img/logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        Made by{" "}
        <a href="https://justinklam.netlify.app/">
          <b>Justin</b>
        </a>
      </span>
    </footer>
  );
};

export default Footer;
