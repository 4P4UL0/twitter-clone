import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="div">
        <a className="App-link"
          href="./homepage.tsx"
          // target="_blank"
          target=""
          rel="noopener noreferrer">
        <img src={logo} className="App-logo-1" alt="logo" />
        </a>
      </div>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <img src={logo} className="App-logo-2" alt="logo" />
      </header>
    </div>
  );
}

export default App;
