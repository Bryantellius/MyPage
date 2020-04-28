import * as React from "react";

const About: React.FC<IAboutProps> = () => {
  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">About Me</h1>
    </main>
  );
};

export interface IAboutProps {}

export default About;
