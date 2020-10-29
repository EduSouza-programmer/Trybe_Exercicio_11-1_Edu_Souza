<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 11-1: Introdução à React, Hello World! - Concluído o/ o/ o/ :star:
</h3>

<blockquote align="center">“Quanto mais você estuda, mais aprende e se aproxima de realizar seu sonhos!”</blockquote>

<h1></h1>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/">
    <img alt="Made by Eduardo Souza" src="https://img.shields.io/badge/made%20by-Edu%20Souza-%23F8952D">
  </a>&nbsp;

 <a href="https://edusouza-programmer.github.io/">
<img alt="Github page Edu Souza " src="https://img.shields.io/badge/Github%20page-Edu_Souza-orange">
</a>&nbsp;

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-Sobre-o-Exercício">Sobre o Exercício</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#postbox-Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#unlock-Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

Hoje você vai conhecer os primeiros conceitos do React, os pilares sobre os quais a equipe do Facebook/Instagram o fez, assim como o motivo de essa tecnologia ter tido adoção tão massiva nos últimos anos.
Vamos ver o que diferencia React de JavaScript e depois vamos ver um pouco sobre classes. Ao final do dia vamos ter todas as informações para codar um componente básico em React!

#### Você será capaz de : 

- Saber a melhor forma para instalar um gerenciador de pacotes.
- Inicializar um projeto em React
- Utilizar JSX no React
- Utilizar o ReactDOM.render para renderizar elementos numa página web.
- Utilizar o import para usar código externo junto ao seu.

# :postbox: Entrega

### :clipboard: Sumário

- <p><a href="#1"> :pushpin: 1.</a> Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app;</p>

- <p><a href="#2"> :pushpin: 2.</a> Crie uma lista de tarefas simples seguindo os passos abaixo...;</p>

- <p><a href="#3"> :pushpin: 3.</a> Acesse este link e faça cada um dos exercícios em ordem, sendo o último o "Create a Component with Composition";</p>

- <p><a href="#4"> :pushpin: 4.</a> Bônus Por último, entenda como funciona o código deste link. Adicione mais dois cards com descrição e link a sua escolha.</p>


## :books: Exercícios

### 1° - 2°

- [x] Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app,
- [x] Crie uma lista de tarefas simples seguindo os passos abaixo:

- insira a função a seguir acima do seu App:

```js
const task = (value) => {
	return <li>{value}</li>;
}
``` 

- [x] agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start.	

- [x] por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
import './App.css';

const commitments = ['Estudar', 'Aprender', 'Ajudar', 'Xablau1', 'Xablau2'];

const task = value => {
  return <li key={value}>{value}</li>;
};

const populateCommitmentList = () => {
  return commitments.map(commitment => task(commitment));
};

function App() {
  return <ul>{populateCommitmentList()}</ul>;
}

export default App;
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3° 

Acesse este _[link](https://www.freecodecamp.org/learn/front-end-libraries/react/)_ e faça cada um dos exercícios em ordem, sendo o último o "Create a Component with Composition".

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
// Create a Simple JSX Element
const JSX = <h1>Hello JSX</h1>;

/* --------------- */
// React: Create a Complex JSX Element
const JSX = (<div>
    <h1></h1>
    <p></p>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>)

/* ------------------ */

// React: Add Comments in JSX
const JSX = (
  <div>
  {/* To começando a gosta :) */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

/* ----------------------- */

// React: Render HTML Elements to the DOM
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

ReactDOM.render(JSX, document.getElementById('challenge-node'))

/* ------------------------------------------ */

// React: Define an HTML Class in JSX
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

/* ------------------------------------- */

// React: Learn About Self-Closing JSX Tags
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

/* ----------------------------------- */

// React: Create a Stateless Functional Component
const MyComponent = function() {
  // Change code below this line

return <div>Legal esta interessante</div>

  // Change code above this line
}

/* ----------------------------------- */

// React: Create a React Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
return <div><h1>Hello React!</h1></div>


    // Change code above this line
  }
};

/* --------------------------------------- */

// React: Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
          <ChildComponent/>

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4° 

Bônus Por último, entenda como funciona o código deste _[link](https://codepen.io/nathansebhastian/pen/qgOJKe)_. Adicione mais dois cards com descrição e link a sua escolha.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
function Card(props) {
    return (
      <div className="card">
        <img className="card-img-top" src={props.featureImage} alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary">Learn more</a>
        </div>
      </div>
    );
}

function CardList() {
  return (
		<div className="row">
		
		// O primeiro card aqui
      <div className="col-sm-4">
        <Card
          featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
          title="Meu titulo qualquer"
          description="Estou gostando muito de aprender React"
          link="https://sebhastian.com/babel-guide"
        />
      </div>
			
		// O segundo card aqui 
      <div className="col-sm-4">
        <Card
          featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
          title="Meu segundo titulo qualquer"
          description="Nem sei o que dizer, tanta emoção"
          link="https://sebhastian.com/babel-guide"
        />
      </div>
      
      <div className="col-sm-4">
        <Card
          featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
          title="How To Make Interactive ReactJS Form"
          description="Let's write some interactive form with React"
          link="https://sebhastian.com/interactive-react-form"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
          title="Babelify your JavaScript code"
          description="Babel make JavaScript code browser-compatible."
          link="https://sebhastian.com/babel-guide"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
          title="JavaScript Basics Before You Learn React"
          description="Learn the prerequisites of learning React fast"
          link="https://sebhastian.com/js-before-react"
        />
      </div>
    </div>
  );
}

ReactDOM.render(<CardList />, document.getElementById('root'))
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
