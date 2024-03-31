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
        <Col xs={4} md={2} className={s.techIcons} title=".NET">
          <SiDotnet title=".NET" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Javascript">
          <DiJavascript1 title="Javascript" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="NodeJS">
          <DiNodejs title="NodeJS" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="React">
          <DiReact title="React" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Microsoft SQL Server">
          <SiMicrosoftsqlserver title="Microsoft SQL Server" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Solidity">
          <SiSolidity title="Solidity" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Git">
          <DiGit title="Git" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Docker">
          <GrDocker title="Docker" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Java">
          <DiJava title="Java" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="Linux">
          <FaLinux title="Linux" />
        </Col>
        <Col xs={4} md={2} className={s.techIcons} title="CSharp">
          <SiCsharp title="CSharp" />
        </Col>
        <Col
          xs={4}
          md={2}
          className={s.techIcons}
          title="General network knowlege"
        >
          <FaNetworkWired title="General network knowlege" />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
