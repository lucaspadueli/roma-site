import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Spotify from "../images/spotify-logo-png-7078.png";
import Amazon from "../images/amazon-music.png";
import AppleMusic from "../images/apple-music.png";
import { Link } from "react-router-dom";
import InstaLogo from "../images/insta-logo.png";
import YtLogo from "../images/youtube-logo-png-2073.png";

import AnelDeSaturno from "../images/gif-anel.gif";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <div className="novo-lancamento">
      
        <img id="anel-logo" src={AnelDeSaturno} alt="animacao-anel" />
        <Link id = "pre-save-btn" to="https://onerpm.link/922551188377">Faça aqui o Pré-Save</Link>
      </div>
      <div className="header-container">
        <hr />
        <div className="plataformas-container">
          <p id="escute-p">Disponível em:</p>
          <ul>
            <Link
              className="link-str"
              to="https://open.spotify.com/intl-pt/artist/6eWJf9lfk8eVF4P85mYDmn"
              target="_blank"
            >
              {" "}
              <img className="stream-logo" src={Spotify} alt="spotify-pic" />
            </Link>
            <Link
              className="link-str"
              to="https://music.apple.com/br/artist/banda-roma/1710771763"
              target="_blank"
            >
              {" "}
              <img
                className="stream-logo"
                src={AppleMusic}
                alt="Apple-music-logo"
              />{" "}
            </Link>
            <Link
              className="link-str"
              to="https://music.amazon.com/artists/B0CKPYH19B/banda-roma"
              target="_blank"
            >
              {" "}
              <img
                className="stream-logo"
                src={Amazon}
                alt="amazon-music-logo"
              />{" "}
            </Link>
          </ul>
        </div>
      </div>

      <hr />

   

      <p>Confira o Vídeo Clipe de "Com Você"</p>

      <iframe
        className="com-voce-clipe"
        src="https://www.youtube.com/embed/gNl1afCDM6E?si=h9D19SV2REtdTVCO"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <hr />
      <p> Siga nas Redes Sociais </p>
      <div className="social-media-container">
        <ul className="social-media-list">
          <Link
            className="link-str"
            to="https://www.youtube.com/@BandaRoma"
            target="_blank"
          >
            {" "}
            <img className="stream-logo" src={YtLogo} alt="spotify-pic" />
          </Link>
          <Link
            className="link-str"
            to="https://www.instagram.com/bandaromaoficial_/"
            target="_blank"
          >
            {" "}
            <img className="stream-logo" src={InstaLogo} alt="spotify-pic" />
          </Link>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
