import React from "react";
import Style from "./style.css";

const Map = () => {
  return (
    <div id="MapContainer">
      <iframe
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Jl.Palapasari%20%20I%20Demak+(Talkbot.id)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default Map;
