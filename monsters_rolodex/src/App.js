import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      //it's always a json object
      name: {
        firstName: "Renata",
        lastName: "Almeida",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, I'm {this.state.name.firstName} {this.state.name.lastName}!
          </p>
          <button
            onClick={() => {
              //o primeiro parâmetro do useState é o novo estado
              this.setState(
                () => {
                  return {
                    name: {
                      firstName: "Diego",
                      lastName: "Martins",
                    },
                  };
                },
                //o segundo parâmetro só vai rodar assim que o estado for atualizado
                () => {
                  console.log(this.state);
                }
              );
            }}
            //O react nota que o estado mudou, porém ele precisa que seja um novo objeto, com a mesma chave em questão
            //assim que é passado um novo objeto ele entende que o estado mudou, e renderiza o componente com o novo
          >
            Change Persons
          </button>
        </header>
      </div>
    );
  }
}

export default App;
