import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle/Particle";
import { HomeDescription } from "components/HomeDescription/HomeDescription";
import myImg from "../../Assets/Avatar.jpg";
import Tilt from "react-parallax-tilt";
import { SocialIcons } from "components/SocialIcons/SocialIcons";

function Home() {
  const skills = [
    "Software Developer",
    "Master's degree in Computer Science",
    "Always motivated and passionate",
    "Continuous learner",
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Alessandro Pozzi</strong>
              </h1>

              <HomeDescription description={skills} />
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Since i was a teenager i love the computer word! Whether it's
                the hardware or the software, I always enjoy finding solutions.
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> C#, Java, HTML, CSS, JavaScript, etc. </b>
                </i>
                <br />
                <br />
                My area of expertise is currently building &nbsp;
                <i>
                  <b className="purple">.NET applications </b>
                </i>
                <br />
                <br />
                
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <SocialIcons isFooter={false} />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
