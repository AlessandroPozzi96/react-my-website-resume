import s from "./style.module.css";

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle/Particle";

export function Chat() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="heading">
            Chat with <strong className="purple">OpenAI</strong> Platform
          </h1>
        </Row>

        <Row className="resume">
          <textarea className={s.Prompt}>
            The user write the prompt here
          </textarea>
        </Row>

        <Row className="resume">
          <textarea className={s.Response}>
            The response is displayed here
          </textarea>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Send
          </Button>
        </Row>
      </Container>
    </div>
  );
}
