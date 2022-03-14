import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			//it's always a json object
			country : 'Brasil'
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Hello {this.state.country}
					</p>
					<button onClick={() => {
						this.setState({
							country:'Jamaica'
						});
					}}>
						Change name
					</button>
				</header>
			</div>
		);
	}
}

export default App;
