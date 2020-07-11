import React, {useEffect} from "react";
import shLogo from "../shunter.svg";
import {Link} from "react-router-dom";

export const SpaetzleHunter = function () {

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
        <p>
          MisterSnax organisiert Deine Gruppenbestellung!
        </p>
      </Link>
  </span>
    ])
}
