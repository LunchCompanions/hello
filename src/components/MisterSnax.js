import React, {useEffect} from "react";
import msLogo from "../snax.svg";
import {Link} from "react-router-dom";

export const MisterSnax = function () {

  function setMisterSnaxStyle() {
    document.title = 'MisterSnax';
    const content = document.getElementById('Content');
    if (!content.classList.contains('mrs'))
      content.classList.add('mrs')
  }

  useEffect(() => {
    setMisterSnaxStyle();
  },[])

  return (
    [

      <img src={msLogo} className="App-logo" alt="logo"/>,
      <p className="logo-label">
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
