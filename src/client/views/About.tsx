import * as React from "react";

const About: React.FC<IAboutProps> = () => {
  return (
    <main className="container my-4">
      <div id="aboutDiv" className="rounded p-3">
        <h1
          id="aboutHeader"
          className="p-2 text-light border-bottom border-light"
        >
          About Me
        </h1>
        <div className="row">
          <div className="col-lg-6 text-center">
            <img
              id="profilePic"
              className="img-fluid"
              src="\assets\ProfilePic.jpg"
              alt="Ben Bryant"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <p className="p-2 text-light about-text" id="about1">
              Hello there! My name is Ben Bryant and I am a Web Developer
              teaching full-stack web development classes with TrueCoders.
              Here's a little bit about myself.
            </p>
            <p className="p-2 text-light about-text" id="about2">
              I've always enjoyed coding, especially web development, but it
              wasn't the first thing I decided I wanted to do with my life. When
              I finally decided Web Development was the career for me, I had to
              take a leap.
            </p>
            <p className="p-2 text-light about-text" id="about3">
              After graduating college, I thought about ways to get into
              computer science. I taught myself about webpages, writing HTML,
              CSS, and Vanilla Javascript to begin. Then, I decided to enroll in
              a Full-Stack Development bootcamp. Best decision I've made. I
              learned a lot and more, and so can you if that's the decision you
              want to make.
            </p>
            <p className="p-2 text-light about-text" id="about4">
              Now I work with TrueCoders Software Development Academy as a Web
              Development Instructor. I enjoy learning and writing code for
              development. I find it fun to conquer coding challenges, and the
              resilience it requires.
            </p>
          </div>
        </div>
        <h6
          className="p-2 text-light about-text border-bottom border-light"
          id="aboutList1"
        >
          Tech I've used in projects:
        </h6>
        <div className="card-columns">
          <div className="p-2 card text-center">HTML/CSS</div>
          <div className="p-2 card text-center">SASS</div>
          <div className="p-2 card text-center">Javascipt</div>
          <div className="p-2 card text-center">Typescript</div>
          <div className="p-2 card text-center">React</div>
          <div className="p-2 card text-center">React Native</div>
          <div className="p-2 card text-center">Electron.js</div>
          <div className="p-2 card text-center">Node.js</div>
          <div className="p-2 card text-center">Express.js</div>
          <div className="p-2 card text-center">Passport.js</div>
          <div className="p-2 card text-center">C#</div>
          <div className="p-2 card text-center">MySQL</div>
          <div className="p-2 card text-center">MongoDB</div>
          <div className="p-2 card text-center">MailGun</div>
          <div className="p-2 card text-center">Stripe.js</div>
          <div className="p-2 card text-center">Remotion</div>
          <div className="p-2 card text-center">GraphQL</div>
          <div className="p-2 card text-center">Ruby</div>
          <div className="p-2 card text-center">Ruby on Rails</div>
          <div className="p-2 card text-center">Angular</div>
          <div className="p-2 card text-center">Vue.js</div>
          <div className="p-2 card text-center">ASP.NET</div>
        </div>
      </div>
    </main>
  );
};

export interface IAboutProps {}

export default About;
