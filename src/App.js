import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Diamond Sweeper
        </h1>
        <p>There are 8 diamonds hidden on the board. Click on the square to open it. If the square was hiding a diamond, the diamond appears. If not, an arrow appears, pointing towards the nearest diamond. Your score is the number of unturned squares</p>
        <Board />
      </div>
    );
  }
}

export default App;
