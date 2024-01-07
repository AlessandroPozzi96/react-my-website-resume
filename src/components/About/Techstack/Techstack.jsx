import s from "./style.module.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className={s.techIcons}>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className={s.techIcons}>
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
