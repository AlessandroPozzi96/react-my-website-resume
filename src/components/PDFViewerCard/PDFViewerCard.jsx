import s from "./style.module.css"

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewerCard({ PDFFile, title }) {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleError = (error) => {
    console.error("Error loading PDF:", error);
    setError(error.message);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="heading">
            <span className="purple">Read</span> and{" "}
            <span className="purple">download</span> my {title}
          </h1>
        </Row>

        <Row className="resume">
          {error && <div className="alert alert-danger">{error}</div>}
          <Document
            file={PDFFile}
            key={PDFFile}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={handleError}
            onSourceError={handleError}
            className={s.pdfDocument}
          >
            {Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.7 : 0.6}
                  className={s.pdfPage}
                />
              )
            )}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={PDFFile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default PDFViewerCard;