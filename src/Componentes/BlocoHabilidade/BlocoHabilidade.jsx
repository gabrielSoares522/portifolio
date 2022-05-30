import React from "react";
import "./style.css";

const BlocoHabilidade = (props) => {
    return (
        <div className="bloco-habilidade">
            <img src={props.img} alt={props.titulo} />
            <h3>{props.titulo}</h3>
        </div>);
}
export default BlocoHabilidade;