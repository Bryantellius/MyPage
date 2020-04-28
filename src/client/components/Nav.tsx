import * as React from "react";

class Nav extends React.Component<INavProps> {
  constructor(props: INavProps) {
    super(props);
  }

  render() {
    return (
      <div id="nav">
          <div id="line1" className="navLines"></div>
          <div id="line2" className="navLines"></div>
          <div id="line3" className="navLines"></div>
      </div>
    );
  }
}

export interface INavProps {}

export default Nav;
