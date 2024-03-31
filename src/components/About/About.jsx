import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import Github from "../Github/Github";
import Aboutcard from "../AboutCard/AboutCard";
import laptopImg from "../../Assets/ManOnDesk.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "20px",
              paddingBottom: "50px",
              paddingLeft: "20px",
            }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <br />
        <br />
        <br />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
