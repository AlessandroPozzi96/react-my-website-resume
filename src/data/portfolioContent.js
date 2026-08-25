import NotesManager from "../Assets/Projects/NotesManager.png";
import TVShowAdviser from "../Assets/Projects/TVShowAdviser.png";
import ExpenseTracker from "../Assets/Projects/ExpenseTRacker.png";
import RedCross from "../Assets/Projects/RedCross.png";
import DonDeSang from "../Assets/Projects/DonDeSang.png";
import AzureDevOpsPipeline from "../Assets/Projects/AzurePipeline.png";
import Microservices from "../Assets/Projects/MicroServices.png";

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
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiIntellijidea,
  SiVmware,
  SiUdemy,
} from "react-icons/si";
import { FaLinux, FaNetworkWired } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { TbBrandVisualStudio } from "react-icons/tb";

export const projects = [
    {
    imgPath: Microservices,
    isBlog: false,
    title: ".NET 10 Microservices — Weather Alert Platform",
    description:
      "Designed and developed a microservices-based weather alert platform using .NET 10. The application is composed of independent Weather, Alert and Notification services communicating asynchronously through RabbitMQ. The entire environment is containerized with Docker and Docker Compose, with PostgreSQL and Entity Framework Core for data persistence. The project demonstrates experience with microservices architecture, event-driven communication, REST APIs, containerization, service decoupling, and inter-service communication.",
    ghLink: "https://github.com/AlessandroPozzi96/weather-alert-microservices",
  },
  {
    imgPath: AzureDevOpsPipeline,
    isBlog: false,
    title: "End-to-End CI/CD Pipeline for a .NET Minimal API",
    description:
      "Developed and deployed a .NET Minimal REST API with a fully automated Azure DevOps CI/CD pipeline. Created reusable YAML-based multi-stage pipelines to restore NuGet packages, build the application, execute automated tests, publish build artifacts, and deploy seamlessly across Test and Production environments, following modern DevOps best practices.",
    ghLink: "https://github.com/AlessandroPozzi96/AzureDevOpsPipelines_Training",
  },
  {
    imgPath: NotesManager,
    isBlog: false,
    title: "Notes Manager",
    description:
      "Notes Manager is a React-based application designed for efficient note-taking and organization. It features robust form validation, seamless routing, and real-time server communication. Users can easily filter notes by categories or keywords, ensuring quick access to important information. The application provides a smooth and intuitive user experience, making it ideal for managing personal or professional notes.",
    ghLink: "https://github.com/AlessandroPozzi96/react-notes-manager",
    demoLink: "https://react-notes-manager.vercel.app/",
  },
  {
    imgPath: TVShowAdviser,
    isBlog: false,
    title: "TV Show Adviser",
    description:
      "TV Show Adviser is a React application that helps users discover movies and TV shows by making multiple API calls to fetch the latest content. It displays detailed information, including rating scores, for each title, allowing users to explore and find recommendations based on their preferences. The application offers an intuitive interface for easy browsing and selection of films and series.",
    ghLink: "https://github.com/AlessandroPozzi96/react-tv-show-adviser",
    demoLink: "https://react-tv-show-adviser-omega.vercel.app/",
  },
  {
    imgPath: ExpenseTracker,
    isBlog: false,
    title: "Expense Tracker",
    description:
      "Expense Tracker is a React and Redux-powered application designed to help users manage and track their expenses efficiently. The app allows users to categorize and record their spending, providing a clear overview of their financial habits. With Redux, state management is streamlined, ensuring real-time updates and a seamless user experience. Perfect for anyone looking to gain control over their personal finances.",
    ghLink: "https://github.com/AlessandroPozzi96/react-expense-tracker",
    demoLink: "https://react-expense-tracker-coral.vercel.app/",
  },
  {
    imgPath: RedCross,
    isBlog: false,
    title: "Croix Rouge .NET Core API",
    description:
      "Croix Rouge API is a secure ASP.NET Core API developed in C#. It is designed to perform various operations on the database while ensuring data integrity. The API uses BCrypt with a cost factor of 12 for password hashing to enhance security. The project can be easily set up with .NET Core and is recommended to be developed using Visual Studio Code. Comprehensive documentation is available online, guiding users through setup and API usage.",
    ghLink: "https://github.com/AlessandroPozzi96/Croix-Rouge-API",
  },
  {
    imgPath: DonDeSang,
    isBlog: false,
    title: "Don De Sang",
    description:
      "Don De Sang is an Android application developed in Java, aimed at facilitating blood donation management. The app leverages key Android components like AppCompatActivity and SharedPreferences for user sessions and data persistence. It also incorporates Retrofit2 for handling asynchronous API calls, ensuring seamless interaction with backend services. The project structure is organized into packages like activity, services, and model, supporting a clean and maintainable codebase. This app is designed to provide a smooth user experience, making it easier to manage and track blood donation activities.",
    ghLink: "https://github.com/AlessandroPozzi96/DonDeSang",
  },
];

export const techStack = [
  { icon: SiDotnet, title: ".NET" },
  { icon: DiJavascript1, title: "Javascript" },
  { icon: DiNodejs, title: "NodeJS" },
  { icon: DiReact, title: "React" },
  { icon: SiMicrosoftsqlserver, title: "Microsoft SQL Server" },
  { icon: SiSolidity, title: "Solidity" },
  { icon: DiGit, title: "Git" },
  { icon: GrDocker, title: "Docker" },
  { icon: DiJava, title: "Java" },
  { icon: FaLinux, title: "Linux" },
  { icon: SiCsharp, title: "CSharp" },
  { icon: FaNetworkWired, title: "General network knowlege" },
];

export const toolStack = [
  { icon: SiVisualstudiocode, title: "Visual Studio Code" },
  { icon: SiVmware, title: "VMWare" },
  { icon: SiPostman, title: "Postman" },
  { icon: SiVercel, title: "Vercel" },
  { icon: TbBrandVisualStudio, title: "Visual Studio" },
  { icon: SiUdemy, title: "Udemy" },
  { icon: SiIntellijidea, title: "Intelliji" },
];
