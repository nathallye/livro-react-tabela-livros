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
  };

  lidarComOrdenarCrescenteTitulo = (titulo) => {
    const livros = this.state.livros.sort((a, b) => 
      a.titulo < b.titulo ? -1 : 0 // se titulo de a for menor que o titulo de b, então(?) retorna -1, que irá ordenar a para um índice anterior a b, ou seja, a vem primeiro. Senão(:) retorna 0 que irá manter a e b inalterados
    );
    this.setState({ livros });
  };

  lidarComOrdenarDecrescenteTitulo = (titulo) => {
    const livros = this.state.livros.sort((a, b) => 
      a.titulo < b.titulo ? -1 : 0
    );
    livros.reverse(); // esse método irá inverter a ordem dos elementos
    this.setState({ livros });
  };

  lidarComOrdenarCrescenteAutor = (autor) => {
    const livros = this.state.livros.sort((a, b) => 
      a.autor < b.autor ? -1 : 0 // se autor de a for menor que o autor de b, então(?) retorna -1, que irá ordenar a para um índice anterior a b, ou seja, a vem primeiro. Senão(:) retorna 0 que irá manter a e b inalterados
    );
    this.setState({ livros });
  };

  lidarComOrdenarDecrescenteAutor = (autor) => {
    const livros = this.state.livros.sort((a, b) => 
      a.autor < b.autor ? -1 : 0
    );
    livros.reverse(); // esse método irá inverter a ordem dos elementos
    this.setState({ livros });
  };

  render () {
    return (
      <table className="tabela">
        <TabelaHead 
          ordenarCrescenteTitulo={this.lidarComOrdenarCrescenteTitulo} 
          ordenarDecrescenteTitulo={this.lidarComOrdenarDecrescenteTitulo}
          ordenarCrescenteAutor={this.lidarComOrdenarCrescenteAutor} 
          ordenarDecrescenteAutor={this.lidarComOrdenarDecrescenteAutor} />
        <TabelaBody 
          livros={this.state.livros} 
          removerLinha={this.lidarComRemoverLinha} />
        <TabelaFoot qdeLivros={this.state.livros.length} />
      </table>
    );
  } 
}

export default App;
