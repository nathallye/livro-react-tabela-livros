import React from "react";

const TabelaHead = () => {
  return (
    <thead>
      <tr>
        <th colSpan="4">Tabela Livros</th>
      </tr>
      <tr>
        <th>ISBN</th>
        <th>Título
          <div className="container-setinhas">
            <div>&uarr;</div>
            <div>&darr;</div>
          </div>
        </th>
        <th>Autor</th>
        <th></th> {/*Coluna que vai ficar o botão de remover*/}
      </tr>
    </thead>
  );
};

export default TabelaHead;