import * as React from "react";

class About extends React.Component<IAboutProps> {
  constructor(props: IAboutProps) {
    super(props);
  }

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">About Me</h1>
      </main>
    );
  }
}

export interface IAboutProps {}

export default About;
