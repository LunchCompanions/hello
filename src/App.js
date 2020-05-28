import React, {useEffect, useState} from 'react';
import msLogo from './snax.svg';
import shLogo from './shunter.svg'
import './App.css';

import {HashRouter, Route, Link} from "react-router-dom"

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

function MisterSnaxRedirectDev({location}) {
  return MisterSnaxRedirect({location, baseUrl: 'https://api-dev.mistersnax.com'})
}

function MisterSnaxRedirect({location: {search}, baseUrl}) {
  const [state, setState] = useState({loading: true, message: 'Sammelbestellung wird gesucht, ...'})

  useEffect(() => {
    const params = new URLSearchParams(search);
    const url = `${baseUrl || 'https://api.mistersnax.com'}/redirects/${params.get('r')}`;
    fetch(url, {method: 'GET'}).then(res => res.json())
      .then(body => {

        if (body.link) {
          setState({
            message: 'Sammelbestellung gefunden! Leite weiter ...',
            loading: false
          });
          setTimeout(() => {
            window.location.href = body.link
          }, 1000)
        }
        throw new Error('Not Found')
      })
      .catch(_err => setState({message: `Sammelbestellung nicht gefunden :(`, loading: false}));
  }, [baseUrl, search])


  return (

    <div>
      <img src={msLogo} className={state.loading ? "App-logo-spinner" : "App-logo"} alt="logo"/>
      <p>
        MisterSnax<br/><br/><span className="small">{state.message}</span>

      </p>
    </div>
  )

}

const MisterSnax = function () {

  useEffect(() => {
    document.title = 'MisterSnax';
    const content = document.getElementById('Content');
    if (!content.classList.contains('mrs'))
      content.classList.add('mrs')
  })

  return (
    [

      <img src={msLogo} className="App-logo" alt="logo"/>,
      <p>
        MisterSnax<br/><span className="small"> Gruppenbestellungen einfach koordinieren.</span>
      </p>,
      <a
        className="App-link"
        href="https://chrome.google.com/webstore/detail/mistersnax/jmobiglepfamkdimbpcjjaomhinajijp?hl=de&gl=DE"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get the Extension for Chrome!
      </a>,
      <br/>, <br/>, <br/>,
      <span className="small">
      Jagst Du gern? <br/>
      <Link to="/sh" className="App-link">
        <span rel="noopener noreferrer">
          Unser Spätzlehunter auch!
        </span>
      </Link>
    </span>,
    ]

  )
}

const SpaetzleHunter = function () {

  useEffect(() => {
    document.title = 'Spätzlehunter'
    const content = document.getElementById('Content');
    if (content.classList.contains('mrs'))
      content.classList.remove('mrs')
  }, [])

  return (
    [
      <img src={shLogo} className="App-logo" alt="logo"/>,
      <p>
        Spätzlehunter - auf der Jagd nach den leckersten Gerichten!
      </p>,
      <a
        className="App-link"
        href="https://chrome.google.com/webstore/detail/mistersnax/jmobiglepfamkdimbpcjjaomhinajijp?hl=de&gl=DE"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zur Website
      </a>,
      <br/>, <br/>, <br/>,
      <span className="small">
      Du isst nicht gern allein? <br/>
      <Link to="/mrs" className="App-link">
        <p rel="noopener noreferrer">
          MisterSnax organisiert Deine Gruppenbestellung!
        </p>
      </Link>
  </span>
    ])
}


export default App;
