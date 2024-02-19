import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import person from './person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{person.name}</h1>
      </div>
    );
  }
}

export default App;
