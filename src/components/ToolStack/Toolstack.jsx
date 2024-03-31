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
          <SiVisualstudiocode title="Visual Studio Code" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="VMWare">
          <SiVmware title="VMWare" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Postman">
          <SiPostman title="Postman" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Vercel">
          <SiVercel title="Vercel" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Visual Studio">
          <TbBrandVisualStudio title="Visual Studio" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Udemy">
          <SiUdemy title="Udemy" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Intelliji">
          <SiIntellijidea title="Intelliji" />
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;
