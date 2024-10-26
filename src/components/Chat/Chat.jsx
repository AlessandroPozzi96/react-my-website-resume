import s from "./style.module.css";

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Constants } from "Constants/Constants";
import Particle from "../Particle/Particle";

export function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const currentYear = new Date().getFullYear();

  const summary = `
You're an assistant in charge of answering recruiters' questions and you're integrated into my website. My name is Alessandro Pozzi, I was born in 1996, I speak French, I live in Belgium, I play the piano, I love nature and hiking and I created this site after taking a course on Udemy. I'm a software developer with expertise in front-end and back-end technologies, including .NET, Java, React, SQL, HTML/CSS, JavaScript and functional and non-functional requirements analysis. I have experience in web and mobile application development and am committed to continuous learning. I studied IT management at Haute-École Hénallux and continued my education at the University of Namur. It seems you don't know the current year, so remember that we're in ${currentYear}. Be consistent, logical, don't lie and always check your answers. You're my representative.
`;
  const [conversation, setConversation] = useState([
    { role: "system", content: `${summary}` },
  ]);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    // Log conversation state whenever it updates
    console.log("Updated conversation:", conversation);
  }, [conversation]); // This effect runs every time `conversation` updates

  const handleSend = async (e) => {
    e.preventDefault(); // Prevent form submission and page refresh
    // Ensure that the Prompt is not empty
    if (!prompt) return;

    setIsLoading(true);

    // Add the user's prompt
    const updatedConversation = [
      ...conversation,
      {role: "user", content: `${prompt}`}
    ];

    const data = {
      model: "gpt-3.5-turbo", // Specify the model you want to use
      messages: updatedConversation,
      temperature: 0.7, // Set the temperature
      max_tokens: 500, // Set the maximum number of tokens
      n: 1, // Number of responses
    };

    try {
      const result = await axios.post(Constants.OPENAI.API_URL, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Constants.OPENAI.API_KEY}`,
        },
      });

      // Get the assistant's messages from the response
      const assistantMessages = result.data.choices.map(
        (choice) => choice.message.content
      ).join("\n");

      // Update conversation with the assistant's response
      setConversation([
        ...updatedConversation,
        { role: "assistant", content: assistantMessages }
      ]);

      setResponse(assistantMessages); // Join responses if multiple
      
      // Clear the prompt
      setPrompt("");
    } catch (error) {
      console.error("Error fetching the OpenAI API:", error);
      setResponse("An error occurred while fetching the response.");
    } finally {
      setIsLoading(false); // Set loading to false when request finishes
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="heading">
            Chat with <strong className="purple">OpenAI</strong> Platform
          </h1>
        </Row>

        <Row className="resume" style={{ zIndex: 1, position: "relative" }}>
          <textarea
            className={s.Prompt}
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Write your prompt here"
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            type="button"
            style={{ maxWidth: "250px" }}
            onClick={handleSend}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Sending Prompt..." : "Send Prompt"}{" "}
          </Button>
        </Row>

        <Row className="resume">
          <textarea
            className={s.Response}
            value={response}
            readOnly
            placeholder="The response will be displayed here"
          />
        </Row>
      </Container>
    </div>
  );
}
