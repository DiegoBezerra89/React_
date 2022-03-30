import { useEffect, useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]); //O HOOK USESTATE SETA O ESTADO FORA DO COMPONENTE FUNCIONAL E GUARDA
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // faz-se uma requisição
      .then((response) => response.json()) //transforma a resposta em json
      .then(
        (users) => setMonsters(users) //seta o estado que antes era [], para {monsters: [{},{}]}
      );
  }, []); //AO SETAR O ARRAY USERS EM MONSTERS VC SETA UM VALOR EXTERNO, O QUE FAZ COM QUE O USESTATE GUARDE NA MEMÓRIA E FAÇA A COMPARAÇÃO COM O OUTRO ARRAY ARMAZENADO NO ESTADO, AGORA OS ARRAYS SÃO DIFERENTES, POIS ELES POSSUEM ENDEREÇOS DE MEMÓRIA DIFERENTES, O QUE GERA A SUBSTITUIÇÃO DELES, O QUE POR CONSEQUÊNCIA FAZ COM QUE O COMPONENTE SEJA RENDERIZADO NOVAMENTE, GERANDO UM LOOP INFINITO CASO O PARAMETRO DE EFEITO NÃO SEJA PASSADO
  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString); //searchField: searchField
  };

  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLowerCase().includes(searchField);
  // });

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

export default App;
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

// //FUNÇÕES PURAS X FUNÇÕES IMPURAS

// //FUNÇÃO PURA
// //Uma função pura, retorna sempre o que é esperado, não importa quantas vezes tenha sido invocada, quando lhe é dada os mesmos argumentos.

// const somaPura = (a, b) => a + b;
// console.log(somaPura(4, 5)); //9
// console.log(somaPura(4, 5)); //9
// console.log(somaPura(4, 5)); //9
// console.log(somaPura(4, 5)); //9
// console.log(somaPura(4, 5)); //9

// //FUNÇÃO IMPURA
// //Uma função impura, pode sofrer alterações dependendo do contexto, mesmo se os argumentos nunca mudarem.

// let c = 5;
// const somaImpura = (a, b) => a + b + c;
// console.log(somaImpura(4, 5)); //14
// console.log(somaImpura(4, 5)); //14
// console.log(somaImpura(4, 5)); //14
// console.log(somaImpura(4, 5)); //14

// //note que existe uma outra variável na função, 'c', que não está sendo manipulada pela função, é externa a ela, logo se 'c' mudar de valor, a função também muda seu retorno, independente de serem passados os mesmos parâmetros
// c = 3;
// console.log(somaImpura(4, 5)); //12
// console.log(somaImpura(4, 5)); //12
// console.log(somaImpura(4, 5)); //12

// c = 1;
// console.log(somaImpura(4, 5)); //10
// console.log(somaImpura(4, 5)); //10
// console.log(somaImpura(4, 5)); //10

// //outra coisa que faz a sua função deixar de ser pura, é produzir side effects
// c = 0;
// const somaComSideEffects = (a, b) => {
//   //a função está mudando o valor de c, e a função não recebe c como argumento, ela tem acesso a 'c' e o modifica, gerando um side effect
//   c = a + b;
//   return a + b;
// };
// somaComSideEffects(4, 5);
// console.log(somaComSideEffects(4, 5)); //9
// console.log(somaComSideEffects(4, 5)); //9
// console.log(somaComSideEffects(4, 5)); //9
// console.log(somaComSideEffects(4, 5)); //9

// console.log("Valor de C", c); //9

// //O valor de 'c' era zero '0', agora é nove '9'

// //EM REACT, TRABALHAREMOS COM FUNÇÕES IMPURAS! HOOKS, SÃO FUNÇÕES IMPURAS QUE MODIFICAM ALGO EXTERNO A ELAS

// USESTATE HOOK

// const [] = useState(); //[value, setValue]
//useState nos retorna um array com dois valores, o primeiro é um valor que queremos armazenar em nosso estado do app, e o segundo parametro é uma função que seta o valor, e o atualiza.
//ao contrário dos componentes de classe, o useState não manipula um objeto de estados, como no setState, mas sim um valor único, cada useState / setState, manipula um valor, que pode ser um objeto, para manipular vários, é necessário um setState para cada estado
//No useState, o estado não é mais um objeto, e sim um valor!

//RENDER E RE RENDER DE COMPONENTES FUNCIONAIS
//Todas as vezes que um componente funcional eh re renderizado, ele roda toda a funçõa novamente, do topo ao chão
//Sempre que um prop for modificada, o componente re renderiza.
//Sempre que um estado é modificado, o componente re renderiza.

//LEMBRE-SE: um componente funcional sempre roda do começo ao fim, a cada renderização, não há métodos setados, valores guardados, etc.
//ele roda a função inteira, de cima a baixo.

//##########
// ATENÇÃO!
//##########
//USE UM ESTADO DENTRO DE UM COMPONENTE QUANDO VC QUISER QUE ELE SEJA RE RENDERIZADO DE ALGUMA MANEIRA EM ALGUM MOMENTO!

//EM UM COMPONENTE FUNCIONAL, NÃO HÁ LIFE CICLE, VC DEVE SE PREOCUPAR EM DIZER QUANDO VC QUER QUE O COMPONENTE SEJA RE RENDERIZADO, E POR CONSEQUÊNCIA RODAR A FUNÇÃO INTEIRA NOVAMENTE!

//SIDE EFFECTS HOOKS

//useEffect

// um side effect é algum comportamento que queremos acionar de dentro da função, que modifica algo que existe fora da função (FUNÇÕES IMPURAS)
// tem dois argumentos:

// useEffect(() => {
//   //o callback é a ação, ou o efeito que queremos realizar no estado da aplicação
//   //o array são os argumentos que o useEffect monitora, assim que os mesmos mudarem de valor, o useEffect é acionado
//   fetch("https://jsonplaceholder.typicode.com/users") // faz-se uma requisição
//     .then((response) => response.json()) //transforma a resposta em json
//     .then(
//       (users) => setMonsters(users) //seta o estado que antes era [], para {monsters: [{},{}]}
//     );
// }, []); //o parametro array vazio, significa que o useEffect será acionado apenas na primeira renderização do componente.(Componentes funcionais são chamados como funções, rodando pelo menos uma vez.)

//DOM E VIRTUAL DOM

//DOM
//A árvore do DOM é feita de nós, acessíveis e possivelmente modificáveis
//Ao utilizar o js vanilla para fazer modificações nessa árvore, você gasta recurso computacionais, as operações de modificação desta árvore são custosas

//VIRTUAL DOM

//O React cria o VIRTUAL DOM SNAPSHOT, que espelha a árvore do DOM real, porém ele não é HTML, ele é Javascript, o js é muito mais rápido para criar e refletir essas mudanças.
//É UMA REPRESENTAÇÃO EM JS DA ÁRVORE DO DOM REAL.
//O React utiliza essa primeira cópia como um snapshot do Dom Real, esta é a última barreira que o React tem para saber se foram feitas mudanças no DOM, sem ter que acessá-lo.
//Então, cria mais uma cópia, VIRTUAL DOM COPY, aqui sim o React faz as mudanças nos elementos do que representam o DOM real.

// O virtual dom getComputedStyle, recebe a informação de que foi criado um estado, e que esse estado está sendo passado para algum componente, este seu filho, no caso da nossa aplicação:

// App
// -> h1
// -> SearchBox
// -> CardList

// Ele percebe que o componente SearchBox teve uma de suas props modificada, faz a sua função, e percebe que mais um estado do componente cardList foi modificado, faz sua função e retira do DOM os monstros que não possuem as letras inseridas no estado do SearchBox.

// Compara o Dom que ele possui nesse momento , depois de todas modificações em sua árvore virtual, e se compara com o Virtual DOM Snapshot, pois o mesmo reflete o DOM real, as partes que não condizem com o DOM Real, são retiradas do DOM real.

// O DOM real entra no novo fluxo e terá a forma que precisa ter.
