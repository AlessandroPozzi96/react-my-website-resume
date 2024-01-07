import s from "./style.module.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
