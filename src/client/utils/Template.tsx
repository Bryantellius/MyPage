import * as React from "react";

class Template extends React.Component<ITemplateProps> {
  constructor(props: ITemplateProps) {
    super(props);
  }

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Hello World!</h1>
      </main>
    );
  }
}

export interface ITemplateProps {}

export default Template;
