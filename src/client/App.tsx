import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import About from "./views/About";
import Experience from "./views/Experience";

const App: React.FC<IAppProps> = () => {
  return (
    <main className="container-fluid bg-secondary w-100 h-100">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/xp" component={Experience}></Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export interface IAppProps {}

export default App;
