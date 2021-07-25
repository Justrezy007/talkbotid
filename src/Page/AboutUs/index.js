import React from "react";
import { Testimony, Map, Introduction } from "../../Components";
import Style from "./style.css";
import {AA,BB} from "../../Assets";

const AboutUs = () => {
  return (
    <div id="AboutUsContainer">
      <div className="aboutUsDescription">

        <div className="aboutUsImage">
          <img src={AA} />
        </div>

        <div className="aboutUsDetail">
          <h2>Talkbot.id</h2>
          <p>
            Adalah platform yang akan memandu kamu dalam berkreasi dengan
            komponen elektronika, website, applikasi, dan penerapannya menggunakan
            IoT. Kami sadar bahwa kreatifitas adalah hal mutlak yang harus
            dimiliki oleh pemuda penerus bangsa. Kami berharap dapat membantu
            kamu melalui tutorial dan peralatan yang kami sediakan untuk
            menunjang pembelajaran kamu selama melakukan eksperimen untuk menghasilkan karya.
          </p>
        </div>
    
      </div>

      <div className="aboutUsExtra">
        <h2>Mengapa Kami Berbeda?</h2>
        <div className="extraMenuContainer">

          <div className="extraMenu">
            <img src={BB} />
            <h3>Good Quality</h3>
          </div>

          <div className="extraMenu">
            <img src={BB} />
            <h3>Wide Topic</h3>
          </div>

          <div className="extraMenu">
            <img src={BB} />
            <h3>Friendly</h3>
          </div>

          <div className="extraMenu">
            <img src={BB} />
            <h3>Affordable</h3>
          </div>

          <div className="extraMenu">
            <img src={BB} />
            <h3>Community</h3>
          </div>

          <div className="extraMenu">
            <img src={BB} />
            <h3>Fast Respon</h3>
          </div>

        </div>
      </div>
      <Testimony />
      <Map />
    </div>
  );
};

export default AboutUs;
