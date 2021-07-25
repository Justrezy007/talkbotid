import React from "react";
import Style from "./style.css";
import { Instagram, Whatsapp, Youtube, Facebook } from "../../Assets";

const Footer = () => {
  return (
    <div id="FooterContainer">
      <div className="footerContent">
        <address>Pondok Majapahit 1 Blok N No.18, Mranggen, Demak, Jawa Tengah</address>
        <p>
          Email at <a href="#">joinreyhan@gmail.com</a>
        </p>
        <p>Phone +62-895-039-530-90</p>
      </div>
      <div className="footerSocialMedia">
        <h2>Find Us</h2>
        <div className="socialMediaIcon">
          <a href="#">
            <img src={Instagram} width="64px" height="64px" />
          </a>
          <a href="#">
            <img src={Whatsapp} width="64px" height="64px" />
          </a>
          <a href="#">
            <img src={Youtube} width="64px" height="64px" />
          </a>
          <a href="#">
            <img src={Facebook} width="64px" height="64px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
