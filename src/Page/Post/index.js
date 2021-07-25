import React from "react";
import Style from "./style.css";
import { AA, FF,GG} from "../../Assets";
import ReactEmbedGist from "react-embed-gist";

const Post = () => {
  return (
    <div id="PostContainer">
      <div className="headingPost">
        <img src={AA} />
      </div>
      <div className="detailPost">
        <h1>Menyalakan LED dengan Arduino Uno</h1>
        <p>
          Halo Sobat uno, apakabar nih udah lama kita tidak memproject bareng.
          Kali ini kami dari Tim talkbot.id ingin memberi kamu insight yang
          mendalam tentang gimana sih cara menyalakan LED dengan arduino uno.
          Emang kesannya basic banget sih ya, tapi emang sesuatu yang gede itu
          mulanya dari kecil dulu. Makannya kita bakal bahas topik kali ini
          secara mendalam biar kamu punya pondasi yang kuat buat ngerjain
          project-project yang advance berikutnya.
        </p>
        <p>
          Untuk persiapannya sebelum mengoprek si Arduino kita perlu bahan-bahan
          dibawah ini:
        </p>
        <div className="alatBahan">

          <div className="cardAlatBahan">
            <div className="imageAlatBahan">
              <img src={FF} />
            </div>
            <div className="deskripsiAlatBahan">
              <h3>Arduino</h3>
              <p>1 buah</p>
            </div>
          </div>

          <div className="cardAlatBahan">
            <div className="imageAlatBahan">
              <img src={GG} />
            </div>
            <div className="deskripsiAlatBahan">
              <h3>LED</h3>
              <p>4 buah</p>
            </div>
          </div>

        </div>
        <ReactEmbedGist
          gist="Justrezy007/864969856a637ed4d6be27ff4adafb54"
          wrapperClass="gist__bash"
          loadingClass="loading__screen"
          titleClass="gist__title"
          contentClass="gist__content"
          errorClass="gist__error"
          file="testing.ino"
        />
      </div>
    </div>
  );
};

export default Post;
