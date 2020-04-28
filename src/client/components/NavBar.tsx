import * as React from "react";
import Media from "./Media";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

const NavBar: React.FC<INavBarProps> = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return (
      <div id="navBar" className="row">
        <Media />
        <div className="col-4 text-center">
          <h1 id="navHeader">Ben Bryant</h1>
        </div>
        <Nav />
      </div>
    );
  } else {
    return (
      <div id="navBar">
        <Media />
        <Nav />
      </div>
    );
  }
};

export interface INavBarProps {}

export default NavBar;
