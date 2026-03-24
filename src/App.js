import React, { Component } from "react";
import "./estilo.css"

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            titleButton: 'VAI'
        };
        this.timer = null;
        this.vai = this.vai.bind(this);
        // this.pausar = this.pausar.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai() {
        let state = this.state;

        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            state.titleButton = "VAI"
        } else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state)
            }, 100);
            state.titleButton = "PAUSAR"
            
        }

        this.setState(state)
    }


    limpar() {

        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;
        state.numero = 0;
        state.titleButton = "VAI"
        this.setState(state)
    }


    // forma extra de adicionar o botão pausar, adicionando mais conteudo a o nosso timer
    // pausar() {
    //     if (this.timer !== null) {
    //         clearInterval(this.timer)
    //         this.timer =  null;
    //     }
    // }



    render() {
        return (
            <div className="container">
                <h1 className="title">Bora cronometrar este treino!!</h1>
                <img src={require('./assests/cronometro.png')} className="img" />
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.titleButton}</a>
                    {/* <a className="botao" onClick={this.pausar}>PAUSAR</a> */}
                    <a className="botao" onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        )
    }
}

export default App;