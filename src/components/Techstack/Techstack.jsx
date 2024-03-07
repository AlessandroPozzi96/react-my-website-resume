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
import { SiSolidity, SiDotnet, SiCsharp, SiMicrosoftsqlserver  } from "react-icons/si";
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
          <SiDotnet />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiReact />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiMicrosoftsqlserver />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiSolidity />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiGit />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <GrDocker />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <DiJava />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <FaLinux />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <SiCsharp />
        </Col>
        <Col xs={4} md={2} className={s.techIcons}>
          <FaNetworkWired />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
