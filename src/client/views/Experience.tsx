import * as React from "react";

class Experience extends React.Component<IExperienceProps> {
  constructor(props: IExperienceProps) {
    super(props);
  }

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Experience</h1>
      </main>
    );
  }
}

export interface IExperienceProps {}

export default Experience;
