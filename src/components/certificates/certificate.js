import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChargeGenie"
              description="Predicts legal charges when provided with facts based data as presented in the Supreme Court."
              ghLink="https://github.com/vediicaa/ChargeGenie"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blind Detection of Underwater Acoustic Signals"
              description="Built an ANN model and trained it on the real underwater acoustic signal. It classifies the type of the ship based on the audio signal received."
              ghLink="https://github.com/vediicaa/UnderwaterCommunication."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="To do list"
              description="Your daily task manager. Implemented with MongoDB database and Node.js sever for backend and HTML, CSS, Javascript and Bootstrap Templates for front-end"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blind Stick"
              description="Blind stick detects any obstacle and alarms the person holding it. Implemented using Arduino UNO and an ultrasonic senosr. Used Arduino IDE for coding."
              ghLink="https://github.com/vediicaa/Blind-stick-using-Arduino-Uno"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Drumkit"
              description="Basic Drumkit website that allows user to play drums through keyboard keys and icons on the webpage."
              ghLink="https://github.com/vediicaa/drumkit"
              demoLink="https://vediicaa.github.io/drumkit/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
