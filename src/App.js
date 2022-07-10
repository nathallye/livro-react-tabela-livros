import React, { Component } from "react";

import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component {

  state = {
    livros: []
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function(error) {
        console.log("Erro na requisição");
      })
      .finally(function() {
        console.log("Sempre retorna")
      });
  };

  lidarComRemoverLinha = (id) => {
    // console.log("Botão Clicado!");
    const livros = this.state.livros.filter(livro => livro.id !== id); // o filter irá criar um novo objeto contenendo todos os livros exceto aquele cuso o id veio do componente TabelaBody
    this.setState({ livros });
  }
  render () {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody 
          livros={this.state.livros} 
          removerLinha={this.lidarComRemoverLinha} />
        <TabelaFoot qdeLivros={this.state.livros.length} />
      </table>
    );
  } 
}

export default App;
