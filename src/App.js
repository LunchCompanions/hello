import React from 'react';
import logo from './snax.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MisterSnax - Gruppenbestellungen einfach koordinieren.
        </p>
        <a
          className="App-link"
          href="https://chrome.google.com/webstore/detail/mistersnax/jmobiglepfamkdimbpcjjaomhinajijp?hl=de&gl=DE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the Extension for Chrome!
        </a>
      </header>
    </div>
  );
}

export default App;
