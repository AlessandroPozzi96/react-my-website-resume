import s from "./style.module.css";

import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Constants } from "Constants/Constants";
import Particle from "../Particle/Particle";
import Modal from "react-bootstrap/Modal";

const SYSTEM_PROMPT = `You are an assistant answering recruiters' questions on Alessandro Pozzi's React website.
Use a professional tone, stay factual, and avoid inventing details.
Alessandro Pozzi was born in 1996, speaks French and English, lives in Belgium, and worked for 4 years as a Fullstack .NET Software Engineer in Bertrange, Luxembourg, at Silicon DNA S.A.
He is currently looking for a new opportunity. He plays piano, likes nature, sports, and hiking, and built this site after taking a Udemy course.
He has experience with .NET (C#, VB.NET, WinForms, WPF), Java, React, SQL, HTML/CSS, JavaScript, and requirements analysis.
He studied IT management at Henallux and continued at the University of Namur. He completed his studies in 2022.
If asked for personal details, answer with restraint and keep the focus on his professional profile.`;

export function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [conversation, setConversation] = useState([
    { role: "system", content: SYSTEM_PROMPT },
  ]);
  const responseRef = useRef(null);
  const promptRef = useRef(null);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = 0;
    }
  }, [response]);

  const handleSend = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    if (!Constants.GROQ.API_KEY) {
      setError(
        "Missing GROQ API key. Set REACT_APP_GROQ_API_KEY before using chat.",
      );
      return;
    }

    setIsLoading(true);
    setError("");

    const updatedConversation = [
      ...conversation,
      { role: "user", content: prompt.trim() },
    ];

    const data = {
      model: "openai/gpt-oss-20b",
      messages: updatedConversation,
      temperature: 0.7,
      max_tokens: 500,
    };

    try {
      const result = await axios.post(Constants.GROQ.API_URL, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Constants.GROQ.API_KEY}`,
        },
      });

      const assistantMessages = result.data.choices
        .map((choice) => choice.message.content)
        .join("\n");

      setConversation([
        ...updatedConversation,
        { role: "assistant", content: assistantMessages },
      ]);
      setResponse(assistantMessages);
      setPrompt("");

      if (promptRef.current) {
        promptRef.current.focus();
      }
    } catch (requestError) {
      console.error("Error fetching the OpenAI API:", requestError);
      setError("An error occurred while fetching the response.");
      setResponse("An error occurred while fetching the response.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="heading">
            Chat with <strong className="purple">AI Assistant</strong>
          </h1>
        </Row>

        {error && (
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <div className="alert alert-warning" role="alert">
              {error}
            </div>
          </Row>
        )}

        <Row className="resume" style={{ zIndex: 1, position: "relative" }}>
          <textarea
            className={s.Prompt}
            ref={promptRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write your prompt here"
          />
        </Row>

        <Row
          style={{ justifyContent: "center", zIndex: 1, position: "relative" }}
        >
          <Button
            variant="primary"
            type="button"
            style={{ maxWidth: "250px" }}
            onClick={handleSend}
            disabled={isLoading}
          >
            {isLoading ? "Sending Prompt..." : "Send Prompt"}
          </Button>
        </Row>

        <Row className="resume" style={{ zIndex: 1, position: "relative" }}>
          <textarea
            className={s.Response}
            value={response}
            ref={responseRef}
            readOnly
            placeholder="The response will be displayed here"
          />
        </Row>

        <Row
          style={{
            justifyContent: "center",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Button
            variant="primary"
            type="button"
            style={{ maxWidth: "250px" }}
            onClick={() => setShowHistory(true)}
          >
            Show conversation history
          </Button>
        </Row>

        <Modal
          show={showHistory}
          onHide={() => setShowHistory(false)}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Conversation History</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {conversation
              .slice()
              .reverse()
              .map(
                (msg, index) =>
                  msg.role !== "system" && (
                    <div key={index} className={s.historyMessage}>
                      <strong>{msg.role}:</strong>
                      <p>{msg.content}</p>
                    </div>
                  ),
              )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowHistory(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Row className="resume" style={{ position: "relative" }}>
          <p>
            You still have some <strong className="purple">questions</strong>?{" "}
            <a href="mailto:alessandro.pozzi72@gmail.com">Contact me!</a>
          </p>
        </Row>
      </Container>
    </div>
  );
}
