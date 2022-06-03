import React from "react";
import LinkNavegacao from "../../Componentes/LinkNavegacao/LinkNavegacao.jsx";
import secoes from "../../Data/secoes.jsx";
import "./style.css";

const Navegacao = () => {
    return (
        <nav className="navbar">
            <div class="checkbox-container">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="toggle"/>
                    <label for="toggle" class="checkbox">
                        <div class="trace"></div>
                        <div class="trace"></div>
                        <div class="trace"></div>
                    </label>
                    <div className="menu"></div>
                    <div class="menu-items">
                        <ul>
                            {secoes.map(item => <LinkNavegacao secao={item} />)}
                        </ul>
                    </div>
                </div>
            </div>
           
        </nav>
    )
}
export default Navegacao;