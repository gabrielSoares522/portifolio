import React,{Component,Fragment} from "react";
import BlocoHabilidade from "../../Componentes/BlocoHabilidade/BlocoHabilidade.jsx";
import listaHabilidades from "../../Data/habilidades.jsx";
import "./style.css";
/*<div className="card-habilidade">
            <div className="card-habilidade-img">
                <img src="./img/html5.png" alt="html5"/>
                <h3>HTML5</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita, incidunt saepe atque ullam accusantium a quibusdam fugit unde temporibus pariatur tempora vitae corrupti tenetur, magnam ea ipsum, reiciendis corporis.</p>
            </div>
        </div>*/
class Habilidades extends Component  {
    constructor(props) {
        super(props);
        let {pagina = 0,quantidade = 3} = this.props; 
        this.state = {
            pagina: pagina,
            qtdPagina: quantidade,
            subListaHabilidades: listaHabilidades.slice(pagina*quantidade,(pagina+1)*quantidade)
        }
    }
    
    
    moverEsquerda = () => {
        let pg = this.state.pagina-1;
        if(pg<0){
            pg = 0;
        }

        this.setState({
            pagina: pg,
            subListaHabilidades: listaHabilidades.slice(pg*this.state.qtdPagina,(pg+1)*this.state.qtdPagina)});
        console.log(this.state);
    }
    moverDireita = () => {
        let pg = this.state.pagina+1;
        
        if(pg>=listaHabilidades.length/3){
            pg = pg-1;
        }

        this.setState({pagina: pg,
            subListaHabilidades: listaHabilidades.slice(pg*this.state.qtdPagina,(pg+1)*this.state.qtdPagina)});
        console.log(this.state);
    }
    render(){
    return (
    <Fragment>
    <section id="habilidades" className="container">
        <h2>Habilidades</h2>
        <div className="controle-lista">
            <button className="mover" onClick={this.moverEsquerda}>
                <img src = "./svg/seta-esquerda.svg" alt="esquerda"/>
            </button>
            <div className="lista-habilidades">
                {this.state.subListaHabilidades.map(habilidade => {
                    return <BlocoHabilidade key={"habilidade -"+habilidade.titulo} titulo={habilidade.titulo} img={habilidade.img} />
                })}
            </div>
            <button className="mover" onClick={this.moverDireita}>
                <img src = "./svg/seta-direita.svg" alt="direita"/>
            </button>
        </div>
        
    </section>
    </Fragment>);
    }
}
export default Habilidades;