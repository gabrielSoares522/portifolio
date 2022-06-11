import React from "react";
import "./style.css";

const BlocoProjeto = (props) => {
    const { banner,titulo,descricao,repositorio,demo } = props.projeto;
    const openLink = (link) => {
        window.open(link, "_blank");
    }
    return (
        <div className="bloco-projeto">
            <div className="banner" style={{backgroundImage: `url(${banner})`}}></div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <div className="botoes">
                {demo && <button onClick={openLink(demo)}>VER DEMONSTRAÇÃO</button>}
                <button onClick={openLink(repositorio)}>ACESSAR REPOSITORIO</button>
            </div>
        </div>);
}
export default BlocoProjeto;