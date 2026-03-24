import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        teste:  'legal',
        liberaMensagem: false
    }
    
  }

  componentDidMount() {
    debugger
    const state = this.state;
    state.liberaMensagem = true;
    this.setState(state)
  }

  render() {
    return (
      <div >
        <h1>{this.state.teste}</h1>
        <h2>{this.state.liberaMensagem ? 'Olá bora criar este cronometro'
        : 'Deu errado'}</h2>
      </div>
    );
  }
}

export default App;
