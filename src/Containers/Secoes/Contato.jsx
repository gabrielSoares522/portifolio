import React from "react";
import "./style.css";
import BlocoContatos from "../../Componentes/BlocoContatos/BlocoContatos";

const Contato = () => {
    return (
    <section id="contato" className="container">
        <div className="box">
            <h2>Contato</h2>
            <p>Se tiver enteresse em trabalhar comigo, entre em contato!</p>
            <BlocoContatos />
        </div>
    </section>);
}
export default Contato;