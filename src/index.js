import React from "react";
import ReactDOM from "react-dom";
import Navegacao from "./Containers/Navegacao/Navegacao.jsx";
import Sobre from "./Containers/Secoes/Sobre.jsx";
import Contato from "./Containers/Secoes/Contato.jsx";
import Habilidades from "./Containers/Secoes/Habilidades.jsx";
import Projetos from "./Containers/Secoes/Projetos.jsx";
import Rodape from "./Containers/Rodape/Rodape.jsx";
import './index.css';
import './paletaCores.css';
const App = () => {
    return (
    <div className="conteudo">
        <Navegacao />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
        <Rodape />
    </div>);
};

ReactDOM.render(<App/>, document.getElementById("app"));