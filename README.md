# React 

React é um framework single page application(aplicação de única página).

## Criando o primeiro projeto React

- Dentro da pasta do projeto, vamos rodar o comando:

```
npx create-react-app tabela-livros
                     [nome-aplicação]
```

**npx:** Comando que vai se encarregar de baixar uma dependência que vamos usar apenas de forma temporária. Ele baixa essa dependência, executa o que tem que ser executado e depois exclui ela. Desse modo, não instalamos as dependências de forma global, evitando ocupar espaço na máquina. 

**create-react-app:** Dependência para criar um projeto.

- Ou, podemos rodar o comando, para instalar o comando create-reatc-app globalmente na nossa máquina:

```
sudo npm install -g create-react-app
```

- E em seguida podemos usá-lo:

```
create-react-app tabela-livros
                 [nome-aplicação]
```

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
cd tabela-livros
   [nome-pasta-aplicação]
```

- Segundo, rodar o comando para iniciar o projeto:

```
npm start ou yarn start
```

Dentro do vscode, podemos notar que foram criados os seguintes diretórios no projeto:

```
node_modules
public
src
```
