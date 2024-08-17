import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCards/ProjectCards";
import Particle from "../Particle/Particle";
import NotesManager from "../../Assets/Projects/NotesManager.png";
import TVShowAdviser from "../../Assets/Projects/TVShowAdviser.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTRacker.png";
import RedCross from "../../Assets/Projects/RedCross.png";
import DonDeSang from "../../Assets/Projects/DonDeSang.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NotesManager}
              isBlog={false}
              title="Notes Manager"
              description="Notes Manager is a React-based application designed for efficient note-taking and organization. It features robust form validation, seamless routing, and real-time server communication. Users can easily filter notes by categories or keywords, ensuring quick access to important information. The application provides a smooth and intuitive user experience, making it ideal for managing personal or professional notes."
              ghLink="https://github.com/AlessandroPozzi96/react-notes-manager"
              demoLink="https://react-notes-manager.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TVShowAdviser}
              isBlog={false}
              title="TV Show Adviser"
              description="TV Show Adviser is a React application that helps users discover movies and TV shows by making multiple API calls to fetch the latest content. It displays detailed information, including rating scores, for each title, allowing users to explore and find recommendations based on their preferences. The application offers an intuitive interface for easy browsing and selection of films and series."
              ghLink="https://github.com/AlessandroPozzi96/react-tv-show-adviser"
              demoLink="https://react-tv-show-adviser-omega.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              isBlog={false}
              title="Expense Tracker"
              description="Expense Tracker is a React and Redux-powered application designed to help users manage and track their expenses efficiently. The app allows users to categorize and record their spending, providing a clear overview of their financial habits. With Redux, state management is streamlined, ensuring real-time updates and a seamless user experience. Perfect for anyone looking to gain control over their personal finances."
              ghLink="https://github.com/AlessandroPozzi96/react-expense-tracker"
              demoLink="https://react-expense-tracker-coral.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RedCross}
              isBlog={false}
              title="Croix Rouge .NET Core API"
              description="Croix Rouge API is a secure ASP.NET Core API developed in C#. It is designed to perform various operations on the database while ensuring data integrity. The API uses BCrypt with a cost factor of 12 for password hashing to enhance security. The project can be easily set up with .NET Core and is recommended to be developed using Visual Studio Code. Comprehensive documentation is available online, guiding users through setup and API usage."
              ghLink="https://github.com/AlessandroPozzi96/Croix-Rouge-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DonDeSang}
              isBlog={false}
              title="Don De Sang"
              description="Don De Sang is an Android application developed in Java, aimed at facilitating blood donation management. The app leverages key Android components like AppCompatActivity and SharedPreferences for user sessions and data persistence. It also incorporates Retrofit2 for handling asynchronous API calls, ensuring seamless interaction with backend services. The project structure is organized into packages like activity, services, and model, supporting a clean and maintainable codebase. This app is designed to provide a smooth user experience, making it easier to manage and track blood donation activities."
              ghLink="https://github.com/AlessandroPozzi96/DonDeSang"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
