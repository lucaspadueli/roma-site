import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import LogoRoma from "../images/IMG_8982.PNG"
import Spotify from "../images/spotify-logo-png-7078.png";
import Amazon from "../images/amazon-music.png";
import AppleMusic from "../images/apple-music.png";
import { Link } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <h1> Site Oficial da Banda Roma</h1>
      <p> Disponível em todas as plataformas de streaming </p>
      <p>Confira abaixo</p>
      <div className="header-container">
      <div className="logo-container">
      <img id = "logo-home" src = {LogoRoma} alt = "logo-amarela"/> 
      </div>
      
      <div className="plataformas-container">
      
      <ul>
         <Link className="link-str" to = "https://open.spotify.com/intl-pt/artist/6eWJf9lfk8eVF4P85mYDmn" target="_blank"> <img className = "stream-logo" src = {Spotify} alt = "spotify-pic" /></Link> 
        <Link className="link-str" to = "https://music.apple.com/br/artist/banda-roma/1710771763" target="_blank"> <img className = "stream-logo" src = {AppleMusic} alt="Apple-music-logo"/>  </Link>
       <Link className="link-str" to = "https://music.amazon.com/artists/B0CKPYH19B/banda-roma" target="_blank"> <img className = "stream-logo" src = {Amazon} alt = "amazon-music-logo" /> </Link> 
      </ul>
      </div>
       </div>
      
      <hr/>
      
      <p>Confira o Vídeo Clipe de "Com Você"</p>
      
      <iframe className = "com-voce-clipe"  src="https://www.youtube.com/embed/gNl1afCDM6E?si=h9D19SV2REtdTVCO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      

      <h3> Siga a gente nas Redes Sociais </h3>
      
    </div>
  );
};

export default HomePage;
