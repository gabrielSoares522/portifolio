import React from "react";
import "./style.css";

const BlocoProjeto = (props) => {
    const { projeto } = props;
    return (
        <div className="bloco-projeto">
            <div className="bloco-projeto-img">
                <img src={projeto.banner} alt={projeto.titulo} />
            </div>
            <h3>{projeto.titulo}</h3>
            <button>Saiba mais</button>
        </div>);
}
export default BlocoProjeto;