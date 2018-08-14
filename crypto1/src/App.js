import React, { Component } from 'react';
import './App.css';
import CurrentCrypto from './CurrentCrypto'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentCrypto />
      </div>
    );
  }
}

export default App;
