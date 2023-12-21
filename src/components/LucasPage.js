import "./Membros.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LucasFoto from "../images/foto-lucas.jpg";

const LucasPage = () => {
return (
    <div className="membro-page">
    <NavBar/>
    <div className="musico-page">
    <img className="musico-foto" src = {LucasFoto} alt = "foto-bateria-lucas"/>
    <p className="texto-musico">
    Começando a apresentar um pouco da Banda Roma para vocês. Esse é: Lucas Capella @capella.lucas__ , não apenas o baterista da banda, mas também compositor e importantíssimo nos arranjos das músicas que, muito em breve, não vão parar de tocar nas plataformas digitais de vocês.

    Fundamental principalmente nas composições das músicas Pop punk (sua especialidade), Capella nasceu e passou parte da sua infância em Niterói-RJ. Iniciou sua trajetória na bateria aos 14 anos e tem como grande inspiração Eloy Casagrande (Sepultura) e Travis Barker (baterista do Blink 182), banda que também é grande influência para a Banda Roma.

    </p>

    </div>
    <Footer/>
    </div>
)
}


export default LucasPage;