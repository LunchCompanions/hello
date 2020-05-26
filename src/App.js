import React from 'react';
import msLogo from './snax.svg';
import shLogo from './shunter.svg'
import './App.css';

import {HashRouter, Route, Link} from "react-router-dom"

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Route exact path="/" component={MisterSnax}/>
        <Route exact path="/mrs" component={MisterSnax}/>
        <Route exact path="/sh" component={SpaetzleHunter}/>
      </div>
    </HashRouter>
  );
}

const Home = function () {
  return (<div><h2>Home</h2></div>)
}

const MisterSnax = function () {
  return (<header className="App-header">
    <img src={msLogo} className="App-logo" alt="logo"/>
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
    <br/><br/><br/>
    <span className="small">
      Jagst Du gern? <br/>
      <Link to="/sh" className="App-link">
        <a rel="noopener noreferrer">
          Unser Spätzlehunter auch!
        </a>
      </Link>
    </span>
  </header>)
}

const SpaetzleHunter = function () {
  return (<header className="App-header">
    <img src={shLogo} className="App-logo" alt="logo"/>
    <p>
      Spätzlehunter - auf der Jagd nach den leckersten Gerichten!
    </p>
    <a
      className="App-link"
      href="https://chrome.google.com/webstore/detail/mistersnax/jmobiglepfamkdimbpcjjaomhinajijp?hl=de&gl=DE"
      target="_blank"
      rel="noopener noreferrer"
    >
      Zur Website
    </a>
    <br/><br/><br/>
    <span className="small">
      Du isst nicht gern allein? <br/>
      <Link to="/mrs" className="App-link">
        <a rel="noopener noreferrer">
          MisterSnax organisiert Deine Gruppenbestellung!
        </a>
      </Link>
    </span>
  </header>)
}


export default App;
