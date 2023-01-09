import React from "react";
import { Link } from "react-router-dom";

// Image assets
import Logo from "../img/myBlog.png";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
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
