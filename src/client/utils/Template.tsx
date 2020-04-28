import * as React from "react";

const Template: React.FC<ITemplateProps> = () => {
  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Hello World!</h1>
    </main>
  );
};

export interface ITemplateProps {}

export default Template;
