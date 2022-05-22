import React from "react";
import ReactDOM from "react-dom";
import Navegacao from "./Containers/Navegacao/Navegacao.jsx";
import Sobre from "./Containers/Secoes/Sobre.jsx";
import Contato from "./Containers/Secoes/Contato.jsx";
import Habilidades from "./Containers/Secoes/Habilidades.jsx";
import Projetos from "./Containers/Secoes/Projetos.jsx";
import './index.css';

const App = () => {
    return (
    <div>
        <Navegacao />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />      
    </div>);
};

ReactDOM.render(<App/>, document.getElementById("app"));