import React from "react";
import Style from "./style.css";
import { A } from "../../Assets";

const Introduction = () => {
  return (
    <div id="IntroductionContainer">
      <div className="introductionVideo">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bS0rRocp0aM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="introductionDescription">
        <h2>Siapakah Kami?</h2>
        <p>
          Kami adalah startup yang ingin berkembang bersama dengan memberikan
          tutorial-tutorial mengenai projek arduino dan elektronik serta
          implementasinya di bidang IoT melalui Website dan Aplikasi.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
