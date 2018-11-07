import React, { Component } from 'react';
import './App.css';
import Stopwatch from './stopwatch';

class App extends Component {


  render() {

    return (
      <div className="container App" >
        <h1>Stopwatch</h1>
        <Stopwatch />
      </div>
    );
  }

}


export default App;
