import React from "react";
import LinkNavegacao from "../../Componentes/LinkNavegacao/LinkNavegacao.jsx";
import secoes from "../../Data/secoes.jsx";
import "./style.css";

const Navegacao = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul>
                {secoes.map(item => <LinkNavegacao secao={item} />)}
            </ul>
        </nav>
    )
}
export default Navegacao;