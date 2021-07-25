import React from "react";
import { Introduction, ProjectMenu,Filter } from "../../Components";
import Style from "./style.css";

const Tutorial = () => {
  return (
    <div id="TutorialContainer">
      <Introduction />
      <div>
        <Filter />
        <ProjectMenu />
      </div>
    </div>
  );
};

export default Tutorial;
