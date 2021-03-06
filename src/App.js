import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Testable from "./components/Testable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">experiment-01-code-test-coverage</h1>
        </header>

        <Testable />
        
      </div>
    );
  }
}

export default App;
