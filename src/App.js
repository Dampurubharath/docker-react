import React, { component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
		  <h1 className="App-title">welcome to react </h1>
	    </header>
        <p className="App-intro">
          Hi There!
        </p>
      </div>
    );
  }
}
export default App;
