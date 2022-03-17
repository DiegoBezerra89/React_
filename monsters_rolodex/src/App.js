import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      //it's always a json object
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

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

const myAsyncFunction = async () => {
	try {
		const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
		console.log("userResponse", userResponse);
		
		const users = await userResponse.json();
		console.log("users", users);
		
		const secondUser = users[1];
		console.log(secondUser);
		
		const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+secondUser.id);
		
		const posts = await postResponse.json();
		console.log("Posts", posts);
		return posts
	} catch(err) {
		console.log(err);
	}
}

const posts = async () => myAsyncFunction().then((item) => item);

console.log("return ", posts);
