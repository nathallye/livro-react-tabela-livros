import React from "react";

const TabelaBody = (props) => {
  return (
    <tbody>
      {/*Props.livro é o objeto que contém os dados vindos de App. Nesse objeto usamos o método map que irá mapear cada um dos livros contidos no objeto(já que é objeto que recebe a chave livro e o valor é um array de objetos)*/}
      {props.livros.map((livro, index) => ( 
        <tr key={livro.id}>
          <td>{livro.id}</td>
          <td>{livro.titulo}</td>
          <td>{livro.autor}</td>
          <td>
            <button 
              className="botao remover"
              onClick={() => props.removerLinha(livro.id)}>Remover</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TabelaBody;