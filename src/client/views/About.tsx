import * as React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

const About: React.FC<IAboutProps> = () => {
  return (
    <main className="container bg-dark shadow">
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
          Opelika, AL, and upon graduating from Samford University, now reside
          in Birmingham, AL.
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
          webpages, writing HTML, CSS, and Vanilla Javascript. Finally I decided
          to enroll in the Covalence Full-Stack Development bootcamp.
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
        <CardColumns>
          <Card className="p-2 cardlist">HTML/CSS</Card>
          <Card className="p-2 cardlist">Javascipt</Card>
          <Card className="p-2 cardlist">Typescript</Card>
          <Card className="p-2 cardlist">React</Card>
          <Card className="p-2 cardlist">NodeJS</Card>
          <Card className="p-2 cardlist">ExpressJS</Card>
          <Card className="p-2 cardlist">MySQL</Card>
          <Card className="p-2 cardlist">MailGun</Card>
          <Card className="p-2 cardlist">StripeJS</Card>
        </CardColumns>

        <h6
          className="p-2 text-light border-bottom border-light"
          id="aboutList2"
        >
          Below is a list of tech that I want to learn next:
        </h6>
        <CardColumns>
          <Card className="p-2 cardlist">Ruby on Rails</Card>
          <Card className="p-2 cardlist">Angular</Card>
          <Card className="p-2 cardlist">C#</Card>
        </CardColumns>
      </div>
    </main>
  );
};

export interface IAboutProps {}

export default About;
