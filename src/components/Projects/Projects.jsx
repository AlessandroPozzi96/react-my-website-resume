import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCards/ProjectCards";
import Particle from "../Particle/Particle";
import { projects } from "../../data/portfolioContent";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col key={project.title} md={4} className="project-card">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
