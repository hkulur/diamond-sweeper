import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Diamond Sweeper
          </p>
          <Board />
        </header>
      </div>
    );
  }
}

export default App;
