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
        className="col-md-4 border"
        onClick={toggleMenu}
      >
        <span>Nav</span>
      </div>
    </>
  );
};

export interface INavProps {}

export default Nav;
