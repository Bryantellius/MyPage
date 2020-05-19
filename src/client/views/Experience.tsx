import * as React from "react";

const Experience: React.FC<IExperienceProps> = () => {
  return (
    <main className="container bg-dark shadow">
      <div id="experienceDiv" className="rounded p-3">
        <h1
          id="aboutHeader"
          className="p-2 text-light border-bottom border-light"
        >
          My Work
        </h1>
        <img src="" alt=""/>
      </div>
    </main>
  );
};

export interface IExperienceProps {}

export default Experience;
