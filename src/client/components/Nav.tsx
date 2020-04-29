import * as React from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC<INavProps> = () => {
  const [menu, setMenu] = React.useState<boolean>(false);

  const toggleMenu = () => {
    if (!menu) {
      document.getElementById("navLinks").style.zIndex = "4";
      document.getElementById("navDivHome").style.opacity = "100%";
      document.getElementById("navDivAbout").style.opacity = "100%";
      document.getElementById("navDivXp").style.opacity = "100%";
      setMenu(true);
    } else {
      document.getElementById("navDivHome").style.opacity = "0%";
      document.getElementById("navDivAbout").style.opacity = "0%";
      document.getElementById("navDivXp").style.opacity = "0%";
      document.getElementById("navLinks").style.zIndex = "-1";
      setMenu(false);
    }
  };

  return (
    <>
      <div
        id="nav"
        className="col-md-4 d-flex flex-column justify-content-start align-items-end"
        onClick={toggleMenu}
      >
        <div id="line1" className="navLines"></div>
        <div id="line2" className="navLines"></div>
        <div id="line3" className="navLines"></div>
      </div>
      <div id="navLinks">
        <div id="navDivHome">
          <NavLink to="/" className="nav-link text-light p-1">
            Home
          </NavLink>
        </div>
        <div id="navDivAbout">
          <NavLink to="/about" className="nav-link text-light p-1">
            About
          </NavLink>
        </div>
        <div id="navDivXp">
          <NavLink to="/xp" className="nav-link text-light p-1">
            Experience
          </NavLink>
        </div>
      </div>
    </>
  );
};

export interface INavProps {}

export default Nav;
