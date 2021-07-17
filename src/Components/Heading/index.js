import React from "react";
import Style from "./style.css";

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
        <a href="#">MASUK TUTORIAL</a>
      </div>
      <div className="heroImage">
        <img />
      </div>
    </div>
  );
};

export default Heading;
