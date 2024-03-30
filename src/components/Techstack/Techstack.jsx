import s from "./style.module.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiSolidity,
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { FaLinux, FaNetworkWired } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";

function Techstack() {
  return (
    <div>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiDotnet title=".NET" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiJavascript1 title="Javascript" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiNodejs title="NodeJS" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiReact title="React" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiMicrosoftsqlserver title="Microsoft SQL Server" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiSolidity title="Solidity" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiGit title="Git" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <GrDocker title="Docker" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiJava title="Java" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <FaLinux title="Linux" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiCsharp title="CSharp" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <FaNetworkWired title="General network knowlege" />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
