import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        <Accordion defaultActiveKey="0">
          <Card id="workOne" className="my-2 shadow rounded">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="nav-link" eventKey="0">
                Mobile Running Store
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Running Store Info</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card id="workTwo" className="my-2 shadow rounded">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="nav-link" eventKey="1">
                Blog Site
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Blog Info</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card id="workThree" className="my-2 shadow rounded">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="nav-link" eventKey="2">
                Strider: Strava Clone
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Strider Info</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </main>
  );
};

export interface IExperienceProps {}

export default Experience;
