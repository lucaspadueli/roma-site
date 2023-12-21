import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Contatos.css";

const Contatos = () => {
    return (
        <div className="contatos-page">
        <NavBar/>
        <div className="email-container">
        <a href="mailto:bandaroma333@gmail.com">Clique aqui para enviar um e-mail</a>
        </div>
        
       

        </div>
    )
}

export default Contatos;