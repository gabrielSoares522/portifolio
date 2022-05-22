import React from "react";
import "./style.css";
const LinkNavegacao = (props) => {
    const secao = props.secao;
    return (
        <li className="nav-item">
            <a className="nav-link" href={"#"+secao}>{secao}</a>
        </li>
    )
}

export default LinkNavegacao;