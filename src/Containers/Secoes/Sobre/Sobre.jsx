import React from "react";
import "./style.css";

import BlocoContatos from "../../../Componentes/BlocoContatos/BlocoContatos";
const Sobre = () => {
    return (
    <section id="sobre" className="container">
        <img className="perfil" src="./img/foto_perfil.jpg"/>
        <h1 className="titulo">Gabriel C. Soares</h1>
        <BlocoContatos />
        <p className="descricao">Estudante de Análise de sistemas FATEC</p>
        <a href="/pdf/_Curriculo_gabrielSoares.pdf" download>Baixar Currículo</a>
    </section>);
}
export default Sobre;