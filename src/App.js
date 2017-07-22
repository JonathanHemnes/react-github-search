import React, { Component } from 'react';
import './App.scss';
import Github from './Github.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Search for things on github bro</h1>
        <Github />
      </div>
    );
  }
}

export default App;
