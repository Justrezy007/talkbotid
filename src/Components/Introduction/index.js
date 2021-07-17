import React from "react";
import Style from "./style.css";
import {A} from "../../Assets"

const Introduction = () => {
  return (
    <div id="IntroductionContainer">
      <div className="introductionVideo">
          <img src={A} width="600px" height="auto"/>
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
