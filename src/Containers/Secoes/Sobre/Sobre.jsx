import React from "react";
import "./style.css";

import BlocoContatos from "../../../Componentes/BlocoContatos/BlocoContatos";
const Sobre = () => {
    return (
    <section id="sobre" className="container">
        <div className="apresentacao">
            <img className="perfil" src="./img/foto_perfil.jpg"/>
            <div className="meu-nome">
                <h1 className="titulo">Ola, meu nome é Gabriel Soares.</h1>
                <a href="/pdf/_Curriculo_gabrielSoares.pdf" className="baixar-curriculo" download>Baixar Currículo</a>
            </div>
        </div>
        <div className="sobre-container">
            <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut gravida nisl. Sed rutrum convallis lorem, vitae scelerisque mi finibus id. Cras fringilla odio dignissim, ornare nunc in, dapibus mauris. Sed ornare dapibus dolor non cursus. Duis faucibus risus et lectus malesuada faucibus. Vestibulum quis sagittis purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus ornare nisi, vitae rhoncus nulla eleifend feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras mollis pulvinar justo nec dignissim. Sed sodales eleifend congue. Cras at tincidunt odio. Proin tellus tellus, auctor ac quam sit amet, tincidunt scelerisque ante.</p>
        </div>
    </section>);
}
export default Sobre;