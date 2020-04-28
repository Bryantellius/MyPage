import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Experience from "./views/Experience";

class App extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/xp" component={Experience}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export interface IAppProps {}

export default App;
