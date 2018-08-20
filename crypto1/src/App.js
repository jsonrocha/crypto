import React, { Component } from 'react';
import './App.css';
import CurrentCrypto from './CurrentCrypto'

class App extends Component {
  render() {
    return (
      <section>
      <h1>\\CRYPTO-WATCH//</h1>
      <table className="App">
      <tbody>
        <CurrentCrypto />
      </tbody>
      </table>
      </section>
    );
  }
}

export default App;
