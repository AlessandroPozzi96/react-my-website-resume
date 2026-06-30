import React from "react";
import IconGrid from "../IconGrid/IconGrid";
import { toolStack } from "../../data/portfolioContent";

function Toolstack() {
  return (
    <div>
      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <IconGrid items={toolStack} />
    </div>
  );
}

export default Toolstack;
