// import React, { Component } from 'react'

// export default class App extends Component{

//   state = {
//     nome: "David Medeiros",
//     idade: 28
//   }

//   mudarNome = () => {
//     this.setState({
//       nome: "Fernanda Flores"
//     })
//     document.body.style.backgroundColor = 'black'
//     document.body.style.color = 'white'
//   }

//   render(){
//     return(
//       <main>
//         <h1>Aula de React</h1>
//         <h2>setState()</h2>
//         <br></br>
//         <h2>{this.state.nome}</h2>
//         <button onClick={this.mudarNome}>Mudar nome</button>
//       </main>
//     )
//   }
// }

import React, { Component } from 'react';

export default class App extends Component{

  state = {
    numero: 0
  }

  somar = () => {
    this.setState({
      numero: this.state.numero + 1 
    })
  }

  subtrair = () => {
    this.setState({
      numero: this.state.numero - 1 
    })
  }

  render(){
    return(
      <div>
        <h1>Contador</h1>
        <h2>{this.state.numero}</h2>
        <button onClick={this.somar}> + </button>
        <button onClick={this.subtrair}> - </button>
      </div>
    )
  }
}