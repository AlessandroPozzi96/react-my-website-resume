import s from "./style.module.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiIntellijidea,
  SiVmware,
  SiUdemy,
} from "react-icons/si";
import { TbBrandVisualStudio } from "react-icons/tb";

function Toolstack() {
  return (
    <div>
      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className={s.techIcons} title="Visual Studio Code">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiVmware title="VMWare" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiPostman title="Postman" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiVercel title="Vercel" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <TbBrandVisualStudio title="Visual Studio" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiUdemy title="Udemy" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiIntellijidea title="Intelliji" />
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;
