import React from "react";
import { Link } from "react-router-dom";

// Image assets
import Logo from "../img/logo.png";
import Logo2 from "../img/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link>Art</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
