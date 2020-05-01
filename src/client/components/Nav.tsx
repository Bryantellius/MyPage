import * as React from "react";
import { useLocation } from "react-router-dom";

const Nav: React.FC<INavProps> = () => {
  const location = useLocation();
  const [menu, setMenu] = React.useState<boolean>(false);

  const toggleMenu = () => {
    if (!menu) {
      document.getElementById("nav-list").style.height = "3rem";
      document.getElementById("menuIcon").style.display = "none";
      document.getElementById("arrowIcon").style.display = "inline";
      document.getElementById("arrowIcon").style.animation = "spin 1s";
      setMenu(true);
    } else {
      document.getElementById("nav-list").style.height = "0px";
      document.getElementById("arrowIcon").style.display = "none";
      document.getElementById("menuIcon").style.display = "inline";
      document.getElementById("menuIcon").style.animation = "spin 1s";
      setMenu(false);
    }
  };

  React.useEffect(() => {
    document.getElementById("nav-list").style.height = "0px";
    document.getElementById("arrowIcon").style.display = "none";
    document.getElementById("menuIcon").style.display = "inline";
    setMenu(false);
  }, [location.pathname]);

  return (
    <>
      <div
        className="col-md-4 d-flex justify-content-end align-items-center"
        onClick={toggleMenu}
      >
        <svg
          id="menuIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          {/* Menu icon */}
          <line id="topLine" x1="3" y1="12" x2="21" y2="12"></line>
          <line id="middleLine" x1="3" y1="6" x2="21" y2="6"></line>
          <line id="bottomLine" x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg
          id="arrowIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          {/* Down Arrow icon */}
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="12" y1="18" x2="21" y2="6"></line>
          <line x1="3" y1="6" x2="12" y2="18"></line>
        </svg>
      </div>
    </>
  );
};

export interface INavProps {}

export default Nav;
