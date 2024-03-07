import s from "./style.module.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiIntellijidea,
  SiVmware,
  SiUdemy 
} from "react-icons/si";
import { TbBrandVisualStudio } from "react-icons/tb";

function Toolstack() {
  return (
    <div>
      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiVmware />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiVercel />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <TbBrandVisualStudio />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiUdemy />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiIntellijidea />
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;
