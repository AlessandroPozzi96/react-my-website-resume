import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import Github from "../Github/Github";
import Aboutcard from "../AboutCard/AboutCard";
import Avatar from "../../Assets/AvatarArrondi.png";
import Tilt from "react-parallax-tilt";

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
            <Tilt>
              <img src={Avatar} className="img-fluid" alt="about" />
            </Tilt>
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
