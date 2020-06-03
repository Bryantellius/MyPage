import * as React from "react";

const About: React.FC<IAboutProps> = () => {
  return (
    <main className="container shadow">
      <div id="aboutDiv" className="rounded p-3">
        <h1
          id="aboutHeader"
          className="p-2 text-light border-bottom border-light"
        >
          About Me
        </h1>
        <p className="p-2 text-light" id="about1">
          Hello there! My name is Ben Bryant and I am a student studying
          full-stack development with Covalence.io. I am originally from
          Opelika, AL, and upon graduating from Samford University in the Spring
          of 2019, now reside in Birmingham, AL.
        </p>
        <p className="p-2 text-light" id="about2">
          While at Samford, I primarily studied Sport Administration and
          Marketing. During my senior year, I enrolled in an Intro to Computer
          Science class that taught an introduction to the fundamentals of
          computer science and the Java programming language. I was enamored by
          the area of study, but graduation came in Spring, and my time at
          Samford came to a close.
        </p>
        <p className="p-2 text-light" id="about3">
          After graduating, I thought about ways to get into computer science
          being a college graduate. In the meantime, I taught myself about
          webpages, writing HTML, CSS, and Vanilla Javascript. I decided
          to enroll in the Covalence Full-Stack Development bootcamp. Fast-forward to now, I have reached the end of the Covalence.io course, and am seeking opportunities to start a career in software development.
        </p>
        <p className="p-2 text-light" id="about4">
          I enjoy learning and writing code for development. I find it fun to
          conquer coding challenges, and the resilience it requires.
        </p>
        <h6
          className="p-2 text-light border-bottom border-light"
          id="aboutList1"
        >
          Below is a list of current tech I'm learning and using:
        </h6>
        <div className="card-columns">
          <div className="p-2 card">HTML/CSS</div>
          <div className="p-2 card">Javascipt</div>
          <div className="p-2 card">Typescript</div>
          <div className="p-2 card">React</div>
          <div className="p-2 card">NodeJS</div>
          <div className="p-2 card">ExpressJS</div>
          <div className="p-2 card">PassportJS</div>
          <div className="p-2 card">MySQL</div>
          <div className="p-2 card">MailGun</div>
          <div className="p-2 card">StripeJS</div>
        </div>

        <h6
          className="p-2 text-light border-bottom border-light"
          id="aboutList2"
        >
          Below is a list of tech that I want to learn next:
        </h6>
        <div className="card-columns">
          <div className="p-2 card">Ruby on Rails</div>
          <div className="p-2 card">Angular</div>
          <div className="p-2 card">C#</div>
          <div className="p-2 card">PHP</div>
          <div className="p-2 card">.NET</div>
        </div>
      </div>
    </main>
  );
};

export interface IAboutProps {}

export default About;
