import React, { Component } from 'react';

import './App.css';
import Intro from './components/Intro';
import Perso from './components/Perso';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Walking dead</h1>
        </header>
        <Intro />
        <Perso />
      </div>
    );
  }
}

export default App;
