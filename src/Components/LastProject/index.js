import React from "react";
import Style from "./style.css";
import { AA, BB, DD } from "../../Assets";

const LastProject = () => {
  return (
    <div id="LastProjectContainer">
      <div className="lastProjectCard">
        <div className="imageLastProject">
          <img src={AA} />
        </div>
        <div className="descriptionLastProject">
          <h3>Project Noob</h3>
          <p className="levelLastProject">Level Noob</p>
          <p>
            Pembuatan project nuub sekali dengan cara yang nuub sehingga dapat
            menyalakan anduinuub
          </p>
          <div className="buttonLastProject">
          <a href="#">
            JOIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="lastProjectCard">
        <div className="imageLastProject">
          <img src={BB} />
        </div>
        <div className="descriptionLastProject">
          <h3>Project Noob</h3>
          <p className="levelLastProject">Level Noob</p>
          <p>
            Pembuatan project nuub sekali dengan cara yang nuub sehingga dapat
            menyalakan anduinuub
          </p>
          <div className="buttonLastProject">
            <a href="#">
            JOIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="lastProjectCard">
        <div className="imageLastProject">
          <img src={DD} />
        </div>
        <div className="descriptionLastProject">
          <h3>Project Noob</h3>
          <p className="levelLastProject">Level Noob</p>
          <p>
            Pembuatan project nuub sekali dengan cara yang nuub sehingga dapat
            menyalakan anduinuub
          </p>
          <div className="buttonLastProject">
          <a href="#">
            JOIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastProject;
