import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // faz-se uma requisição
      .then((response) => response.json()) //transforma a resposta em json
      .then(
        (users) => setMonsters(users) //seta o estado que antes era [], para {monsters: [{},{}]}
      );
  }, []);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField); //searchField: searchField
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        searchPlaceholder="Search monsters"
        className="search-box"
        inputType="search"
      />
      <CardList className="card" monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       //initial state
//       //it's always a json object
//       monsters: [],
//       searchField: "",
//     };
//     console.log("1"); //O construtor é chamado, para criar o componente e setar o seu estado inicial []
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {
//         searchField, //searchField: searchField
//       };
//     });
//   };

//   componentDidMount() {
//     console.log("3"); // o React sabe que o componente foi montado, com estado inicial []
//     fetch("https://jsonplaceholder.typicode.com/users") // faz-se uma requisição
//       .then((response) => response.json()) //transforma a resposta em json
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users }; //seta o estado que antes era [], para {monsters: [{},{}]}
//         })
//       );
//   }

//   render() {
//     //Sempre que o React quer atualizar a DOM ele roda o render method
//     console.log("2"); //O componente é renderizado, seu estado inicial é [], logo não irá aparecer nada

//     //refatoração para que não seja necessário utilizar o this a todo momento de chamada de variáveis
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     console.log(monsters);
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           searchPlaceholder="Search monsters"
//           className="search-box"
//           inputType="search"
//         />
//         <CardList className="card" monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;

// PROMISES

// const myPromise = new Promise((resolve, reject) => {
// 	//resolve é usado quando uma chamada de uma API, por exemplo, retorna SUCESSO
// 	//reject é usado quando uma chamada de uma API retorna um ERRO
// 	//a Promise estará em um estado pendente, enquanto o resolve ou o reject não tiver sido chamado
// 	if(false) {
// 		setTimeout(() => {
// 			resolve('I have succeeded!')
// 		}, 1000) // um segundo depois o callback eh chamado
// 	} else {
// 		reject('I have failed...');
// 	}
// });

// // para executar a função myPromise é necessário utilizar a propriedade .then
// // then retornará um valor, assim que a promise estiver resolvida, ou seja, pega o valor retornado de RESOLVE
// myPromise.then(value => console.log(value));

// // para capturar o REJECT, é necessário encadear o .then com o .catch
// myPromise.then(value => console.log(value)).catch(rejectValue => console.log(rejectValue));

//ASYNC / AWAIT

// const myAsyncFunction = async () => {
//   try {
//     const userResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     console.log("userResponse", userResponse);

//     const users = await userResponse.json();
//     console.log("users", users);

//     const secondUser = users[1];
//     console.log(secondUser);

//     const postResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
//     );

//     const posts = await postResponse.json();
//     return posts;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const posts = myAsyncFunction().then((item) => item);

// console.log("return ", posts);

// MODIFICANDO O ESTADO

/**
 * Se vc for modificar o estado da aplicação, e de alguma maneira vc quiser ter acesso ao estado completo, com todos os dados, vc precisa criar uma cópia dele, e modificar a cópia, nunca o estado em si.
 */

//RE Render
/**
 * O Componente irá re renderizar em duas situações:
 * -> Quando o setState for chamado.
 * -> Sempre que uma prop mudar.
 *
 */

//Functional Components

// Componentes funcionais são executados assim como funções de js.

// const SearchBox = ({ ...props }) => {
//   const { onChangeHandler, searchPlaceholder, className, inputType } = props;
//   return (
//     <input
//       className={className}
//       type={inputType}
//       placeholder={searchPlaceholder}
//       onChange={onChangeHandler}
//     />
//   );
// };

// O React renderiza o q tem que renderizar e pronto,

// Não há ciclos de vida em componentes funcionais.

// SIDE EFFECTS!!!

// Ao contrário dos componentes baseados em classes, os funcionais ao invés de possuírem ciclo de vida, eles possuem side effects, os chamados HOOKS.

//FUNÇÕES PURAS X FUNÇÕES IMPURAS

//FUNÇÃO PURA
//Uma função pura, retorna sempre o que é esperado, não importa quantas vezes tenha sido invocada, quando lhe é dada os mesmos argumentos.

const somaPura = (a, b) => a + b;
console.log(somaPura(4, 5)); //9
console.log(somaPura(4, 5)); //9
console.log(somaPura(4, 5)); //9
console.log(somaPura(4, 5)); //9
console.log(somaPura(4, 5)); //9

//FUNÇÃO IMPURA
//Uma função impura, pode sofrer alterações dependendo do contexto, mesmo se os argumentos nunca mudarem.

let c = 5;
const somaImpura = (a, b) => a + b + c;
console.log(somaImpura(4, 5)); //14
console.log(somaImpura(4, 5)); //14
console.log(somaImpura(4, 5)); //14
console.log(somaImpura(4, 5)); //14

//note que existe uma outra variável na função, 'c', que não está sendo manipulada pela função, é externa a ela, logo se 'c' mudar de valor, a função também muda seu retorno, independente de serem passados os mesmos parâmetros
c = 3;
console.log(somaImpura(4, 5)); //12
console.log(somaImpura(4, 5)); //12
console.log(somaImpura(4, 5)); //12

c = 1;
console.log(somaImpura(4, 5)); //10
console.log(somaImpura(4, 5)); //10
console.log(somaImpura(4, 5)); //10

//outra coisa que faz a sua função deixar de ser pura, é produzir side effects
c = 0;
const somaComSideEffects = (a, b) => {
  //a função está mudando o valor de c, e a função não recebe c como argumento, ela tem acesso a 'c' e o modifica, gerando um side effect
  c = a + b;
  return a + b;
};
somaComSideEffects(4, 5);
console.log(somaComSideEffects(4, 5)); //9
console.log(somaComSideEffects(4, 5)); //9
console.log(somaComSideEffects(4, 5)); //9
console.log(somaComSideEffects(4, 5)); //9

console.log("Valor de C", c); //9

//O valor de 'c' era zero '0', agora é nove '9'

//EM REACT, TRABALHAREMOS COM FUNÇÕES IMPURAS! HOOKS, SÃO FUNÇÕES IMPURAS QUE MODIFICAM ALGO EXTERNO A ELAS
