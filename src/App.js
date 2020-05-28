import React from 'react';
import './App.css';

import {HashRouter, Route} from "react-router-dom"
import {MisterSnaxRedirect, MisterSnaxRedirectDev} from "./components/MisterSnaxRedirect";
import {MisterSnax} from "./components/MisterSnax";
import {SpaetzleHunter} from "./components/Spaetzlehunter";

function App() {
  return (
    <header className="App-header" id="Content">
      <HashRouter basename='/'>
        <div className="App">
          <Route exact path="/" component={MisterSnax}/>
          <Route exact path="/mistersnax" component={MisterSnax}/>
          <Route exact path="/spaetzlehunter" component={SpaetzleHunter}/>
          <Route exact path="/pd" component={MisterSnaxRedirectDev}/>
          <Route exact path="/p" component={MisterSnaxRedirect}/>
        </div>
      </HashRouter>
    </header>
  );
}


export default App;
