import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <div>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Know Who <strong className="purple">I AM</strong>
      </h1>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              With a background spanning both <i className="purple">academic</i>{" "}
              and <i className="purple">professional</i> spheres, I've dabbled
              in a multitude of technologies, completed numerous projects and
              absorbed a wealth of knowledge along the way.
              <br />
              <br />
              Whether tackling complex programming tasks or developing{" "}
              <i className="purple">innovative</i> solutions, I bring a
              versatile skill set and a passion for continuous learning to every
              project. Let's <i className="purple">collaborate</i> and{" "}
              <i className="purple">create</i> something remarkable together!
            </p>

            <p style={{ color: "rgb(155 126 172)" }}>
              <i>
                "Creativity is thinking up new things. Innovation is doing new
                things."
              </i>{" "}
            </p>
            <footer className="blockquote-footer">Theodore Levitt</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
