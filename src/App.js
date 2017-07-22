import React, { Component } from 'react';
import './App.scss';
import Github from './Github.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="banner">
          <h1>Search for projects on github</h1>
        </div>
        <Github />
      </div>
    );
  }
}

export default App;
