import "./Membros.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import VitorFoto from "../images/foto-vitor.jpg";
const VitorPage = () => {
    return (
        <div className="membro-page">
        <NavBar/>

        <div className="musico-page">
        <img className="musico-foto" src = {VitorFoto} alt = "foto-vocal-vitor"/>
        <p className="texto-musico">
        Esse é: Vitor Aguiar @vgaguiarr , Guitarrista e Vocalista, compositor e também importantíssimo nos arranjos das músicas da Banda.

        Apesar contribuir bastante com os arranjos das músicas Pop punk, Vitor tem como especialidade as composições de Reggae da Banda Roma. Nascido e criado na Tijuca, Zona Norte do RJ, Vitor Iniciou sua trajetória na música aos 3 anos, e como Guitarrista aos 11 anos, tendo como inspiração não só para as guitarras e vocais, mas como principais influências, bandas como: Charlie Brown Jr, Natiruts, Forfun, entre outras que são muito referências para a Banda Roma.
        </p>
        </div>

        <Footer/>

        </div>
    )
}

export default VitorPage;