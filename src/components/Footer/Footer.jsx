import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcons } from "components/SocialIcons/SocialIcons";
import s from "./style.module.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className={s.footer}>
      <Row>
        <Col md="4" className={s.footerCopywright}>
          <h3>Designed and Developed by Alessandro Pozzi</h3>
        </Col>
        <Col md="4" className={s.footerCopywright}>
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className={s.footerBody}>
          <SocialIcons isFooter={true} />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
