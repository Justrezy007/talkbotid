import React from "react";
import Style from "./style.css";

const Filter = () => {
  return (
    <div id="FilterContainer">
      <h2>Cari Projek</h2>
      <div className="filterMenu">
        <div className="filterType">
        Arduino
        </div>
        <div className="filterLevel">Noob</div>
      </div>
    </div>
  );
};

export default Filter;
