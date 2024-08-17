import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
//import Resume from "./components/Resume/ResumeNew";
import PDFViewerCard from "./components/PDFViewerCard/PDFViewerCard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "components/Skills/Skills";
import PortfolioPDF from "./Assets/Portfolio.pdf";
import ResumePDF from "./Assets/CV_AlessandroPozzi.pdf";
import Projects from "components/Projects/Projects";

function App() {
  const [load, isLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      isLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/resume"
            element={<PDFViewerCard PDFFile={ResumePDF} title={"Resume"} />}
          />
          <Route
            path="/portfolio"
            element={
              <PDFViewerCard PDFFile={PortfolioPDF} title={"Portfolio"} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
