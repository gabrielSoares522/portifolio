import React from "react";
import BlocoProjeto from "../../Componentes/BlocoProjeto/BlocoProjeto.jsx";
import listaProjetos from "../../Data/projetos.jsx";
import "./style.css";

const Projetos = () => {
    return (
    <section id="projetos" className="container">
        <h2>Projetos</h2>
        <div className="lista-projetos">
            {listaProjetos.map(projeto => (
                <BlocoProjeto key={"projeto - "+projeto.titulo} projeto={projeto} />
            ))}
        </div>
    </section>);
}
export default Projetos;