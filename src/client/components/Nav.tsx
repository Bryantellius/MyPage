import * as React from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC<INavProps> = () => {
  const toggleMenu = () => {
    alert("test menu");
  };

  return (
    <>
      {/* <div
        id="nav"
        className="col-4 d-flex flex-column justify-content-start align-items-end"
        onClick={toggleMenu}
      >
        <div id="line1" className="navLines"></div>
        <div id="line2" className="navLines"></div>
        <div id="line3" className="navLines"></div>
      </div> */}
      <div
        id="navLinks"
        className="col-4 d-flex flex-column justify-content-start align-items-end"
      >
        <NavLink to="/" className="nav-link text-dark p-1">Home</NavLink>
        <NavLink to="/about" className="nav-link text-dark p-1">About</NavLink>
        <NavLink to="/xp" className="nav-link text-dark p-1">Experience</NavLink>
      </div>
    </>
  );
};

export interface INavProps {}

export default Nav;
