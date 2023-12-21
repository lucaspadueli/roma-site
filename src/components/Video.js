import "./Videos.css";
import "./Footer";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TeaserAnel from "../images/REELS 1 (com logo).mp4";
const Video = () => {
    return (
        <div className="videos-page">
        <NavBar/>
        <p id = "videos-p"> Vídeos </p>
        <hr/>
        <div className="videos-container">
        <p> Com Você </p>
        <iframe
        className="com-voce-video-page"
        src="https://www.youtube.com/embed/gNl1afCDM6E?si=h9D19SV2REtdTVCO"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

        <hr/>
        <p> Teaser Anel de Saturno</p>
        <video id = "teaser-anel" controls>
        <source src = {TeaserAnel} type="video/mp4" />

        </video>
        </div>
        

        <Footer/>
        </div>
    )
}

export default Video;