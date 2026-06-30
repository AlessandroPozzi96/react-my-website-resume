import React from "react";
import { Col, Row } from "react-bootstrap";
import s from "./style.module.css";

function IconGrid({ items }) {
  return (
    <Row className={s.grid} role="list">
      {items.map(({ icon: Icon, title }) => (
        <Col
          key={title}
          xs={4}
          md={2}
          className={s.iconTile}
          title={title}
          role="listitem"
        >
          <Icon title={title} />
        </Col>
      ))}
    </Row>
  );
}

export default IconGrid;
