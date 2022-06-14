import React from "react";
import { Container } from "react-bootstrap";
import Timeline from "./VerticalTime";
function WorkExp() {
  return (
    <Container fluid className="about-section">
      <h1
        style={{ justifyContent: "center", paddingBottom: "50px" }}
        className="project-heading"
      >
        <strong className="purple">Work</strong> Experience
      </h1>
      <Container>
        <Timeline />
      </Container>
    </Container>
  );
}

export default WorkExp;
