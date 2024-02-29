import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcons } from "components/SocialIcons/SocialIcons";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Alessandro Pozzi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <SocialIcons isFooter={true}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
