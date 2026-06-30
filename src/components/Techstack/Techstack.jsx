import React from "react";
import IconGrid from "../IconGrid/IconGrid";
import { techStack } from "../../data/portfolioContent";

function Techstack() {
  return (
    <div>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <IconGrid items={techStack} />
    </div>
  );
}

export default Techstack;
