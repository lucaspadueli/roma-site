import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Video from "./components/Video";
import LucasPage from './components/LucasPage';
import VitorPage from './components/VitorPage';
import Contatos from './components/Contatos';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element = {<HomePage/>} />
      <Route path = "/videos" element = {<Video/>}/>
      <Route path = "/membros/lucas" element ={<LucasPage/>} />
      <Route path = "/membros/vitor" element ={<VitorPage/>} />
      <Route path = "/contatos" element = {<Contatos/>}/>
      </Routes>
    </div>
  );
}

export default App;
