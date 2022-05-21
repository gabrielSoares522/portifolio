import React from "react";
import LinkNavegacao from "../Components/LinkNavegacao";
import secoes from "../Data/secoes.jsx";

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