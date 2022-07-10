import React from "react";

const TabelaHead = (props) => {
  return (
    <thead>
      <tr>
        <th colSpan="4">Tabela Livros</th>
      </tr>
      <tr>
        <th>ISBN</th>
        <th>Título
          <div className="container-setinhas">
            <div onClick={() => props.ordenarCrescenteTitulo()}>&uarr;</div>
            <div onClick={() => props.ordenarDecrescenteTitulo()}>&darr;</div>
          </div>
        </th>
        <th>Autor
          <div className="container-setinhas">
            <div onClick={() => props.ordenarCrescenteAutor()}>&uarr;</div>
            <div onClick={() => props.ordenarDecrescenteAutor()}>&darr;</div>
          </div>
        </th>
        <th></th> {/*Coluna que vai ficar o botão de remover*/}
      </tr>
    </thead>
  );
};

export default TabelaHead;