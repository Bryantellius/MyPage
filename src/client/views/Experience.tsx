import * as React from "react";
import StriderXP from "../components/StriderXP";
import TSXP from "../components/TSXP";

const Experience: React.FC<IExperienceProps> = () => {
  return (
    <main id="experienceDiv" className="container rounded shadow appear">
      <h1
        id="aboutHeader"
        className="p-2 text-light border-bottom border-light"
      >
        My Work
      </h1>
      <StriderXP />
      <TSXP />
    </main>
  );
};

export interface IExperienceProps {}

export default Experience;
