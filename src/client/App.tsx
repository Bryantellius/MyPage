import * as React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import About from "./views/About";
import Experience from "./views/Experience";
import Contact from "./views/Contact";

const App: React.FC<IAppProps> = () => {
  return (
    <main id="appMain" className="container-fluid w-100 h-100">
      <BrowserRouter>
        <NavBar />
        <div className="d-flex row justify-content-end align-items-center mb-3">
          <ul id="nav-list" className="nav">
            <li className="nav-item">
              <NavLink
                className="nav-link text-light border-left border-light"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light border-left border-light"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light border-left border-light"
                to="/xp"
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light border-left border-light"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/xp" component={Experience}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export interface IAppProps {}

export default App;
