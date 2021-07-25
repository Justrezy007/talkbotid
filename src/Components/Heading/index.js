import React from "react";
import Style from "./style.css";
import {Drone} from "../../Assets"

const Heading = () => {
  return (
    <div id="HeadingContainer">
      <div className="description">
        <h2>
          Bagaimana Cara <span class="highlightWord">Memulai ?</span>
        </h2>
        <p>
          Kami adalah start-up yang bergerak di bidang edukasi untuk membantu
          kamu dalam mempelajari arduino, website, aplikasi, dan penerapannya di
          bidang IoT melalui projek-projek yang kami berikan. Kami juga
          menyediakan peralatan yang dapat menunjang kamu untuk berkreasi dalam
          pembuatan projek.
        </p>
        <a href="#">
          MASUK TUTORIAL
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
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
      <div className="heroImage">
        <img src={Drone} />
      </div>
    </div>
  );
};

export default Heading;
