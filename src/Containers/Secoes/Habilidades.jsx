import React from "react";
import BlocoHabilidade from "../../Componentes/BlocoHabilidade/BlocoHabilidade.jsx";
import listaHabilidades from "../../Data/habilidades.jsx";
import "./style.css";

const Habilidades = () => {
    return (
    <section id="habilidades" className="container">
        <h2>Habilidades</h2>
        <div className="controle-lista">
            <div className="mover">
                <img src = "./svg/seta-esquerda.svg" alt="esquerda"/>
            </div>
            <div className="lista-habilidades">
                {listaHabilidades.map(habilidade => {
                    return <BlocoHabilidade key={"habilidade -"+habilidade.titulo} titulo={habilidade.titulo} img={habilidade.img} />
                })}
            </div>
            <div className="mover">
                <img src = "./svg/seta-direita.svg" alt="direita"/>
            </div>
        </div>
        <div className="card-habilidade">
            <div className="card-habilidade-img">
                <img src="./img/html5.png" alt="html5"/>
                <h3>HTML5</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita, incidunt saepe atque ullam accusantium a quibusdam fugit unde temporibus pariatur tempora vitae corrupti tenetur, magnam ea ipsum, reiciendis corporis.</p>
            </div>
        </div>
    </section>);
}
export default Habilidades;