import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle/Particle";
import Techstack from "../Techstack/Techstack";
import Toolstack from "../ToolStack/Toolstack";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Techstack />
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
