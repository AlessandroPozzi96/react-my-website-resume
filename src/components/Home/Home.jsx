import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogoCodingGuy from "../../Assets/CodingGuy.png";
import Particle from "../Particle/Particle";
import { HomeDescription } from "components/HomeDescription/HomeDescription";
import myImg from "../../Assets/HommeAffaireArrondi.png";
import Tilt from "react-parallax-tilt";
import { SocialIcons } from "components/SocialIcons/SocialIcons";
import s from "./style.module.css";

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

            <Col md={5} style={{ paddingBottom: 20 }} className={s.HomeLogoCol}>
              <img
                src={homeLogoCodingGuy}
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
                Hello! I'm a Computer Science enthusiast holding a&nbsp;
                <i>
                  <b className="purple">Master's degree</b>{" "}
                </i>
                from the University of Namur and a&nbsp;
                <i>
                  <b className="purple">Bachelor's degree</b>{" "}
                </i>
                from Hénallux. Currently, I work as a&nbsp;
                <i>
                  <b className="purple">.NET developer</b>
                </i>
                , but I also enjoy exploring other fields like Java, React,
                JavaScript, etc.
                <br />
                <br />
                Originally from&nbsp;
                <i>
                  <b className="purple">Belgium</b>
                </i>
                , I speak French and English. Besides coding, I love spending
                time outdoors, especially trekking in nature. During the
                pandemic, I picked up playing the piano, which has become a
                source of joy for me.
                <br />
                <br />
                I'm also fascinated by&nbsp;
                <i>
                  <b className="purple">blockchain</b>{" "}
                </i>
                technology and other new tech trends. With a down-to-earth
                attitude, I'm always eager to&nbsp;
                <i>
                  <b className="purple">learn</b>{" "}
                </i>
                and&nbsp;
                <i>
                  <b className="purple">grow</b>{" "}
                </i>
                both personally and professionally.
              </p>
            </Col>
            <Col
              md={4}
              className="myAvatar"
              style={{
                paddingLeft: "20px",
              }}
            >
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
