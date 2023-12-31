import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css';
import LogoRoma from "../images/IMG_8982.PNG";

const NavBar = () => {
 
 return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div class="container">
    <a class="navbar-brand fs-4" href="/"> <img id = "logo-navbar" src = {LogoRoma} alt = "logo-banda-roma" /> </a>
    <p id = "legenda-nav"> Site Oficial da Banda Roma</p>
    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header text-white border-bottom">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Roma Menu</h5>
        <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
          <li class="nav-item mx-2">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="/videos">Vídeos</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Membros
            </a>
            <ul class="dropdown-menu justify-content-center align-items-center fs-8">
              <li><a class="dropdown-item" href="/membros/lucas">Lucas Capella</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="/membros/vitor">Vitor Aguiar</a></li>
            </ul>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="/contatos">Contatos</a>
          </li>
          
        </ul>
        
      </div>
    </div>
  </div>
</nav>
 )


    

 
};

export default NavBar;
