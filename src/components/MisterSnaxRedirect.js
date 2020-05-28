import React, {useCallback, useEffect, useState} from "react";
import msLogo from "../snax.svg";
import is from 'is_js'

export function MisterSnaxRedirect({location: {search}, baseUrl, extensionIndicator = '#KFkV9v9YisTYhOkRmTD9USAkPoH1ULoM'}) {
  const [state, setState] = useState({loading: true, message: 'Sammelbestellung wird gesucht, ...'})

  function isMobile() {
    return is.mobile() || is.tablet()
  }

  const isBrowserSupported = useCallback(() => {
    console.log('checking browser support')
    return is.chrome() || is.edge();
  }, [])

  function getErrorMessage() {
    return ([
      <p className="not-supported-label">Leider trat ein Fehler bei der Weiterleitung auf. Probiere es bitte
        erneut.</p>,
      <p> Sollte der Fehler weiterhin auftreten, entschuldigen wir uns für die Unannehmlichkeiten.
        <br/>In dem Fall würden wir uns auch über eine Meldung an <a href="mailto:support@mistersnax.com"
                                                                     style={{color: 'deepskyblue'}}> support@mistersnax.com </a> freuen,
        damit wir MisterSnax mit Deiner Hilfe besser machen können.</p>
    ])
  }

  const isExtensionInstalled = useCallback(async () => {
    const installed = await new Promise(resolve => setTimeout(() => {
      if (!document.getElementById(extensionIndicator)) {
        return resolve(false)
      }
      console.log('is installed')
      resolve(true)

    }, 1000))
    console.log(`is installed? ${installed}`)
  }, [extensionIndicator]);

  function getChromeStoreLink(linkText) {
    return <a
      href="https://chrome.google.com/webstore/detail/mistersnax/jmobiglepfamkdimbpcjjaomhinajijp?hl=de&gl=DE"
      target="_blank"
      rel="noopener noreferrer"
    >{linkText || "Chrome"}</a>;
  }

  function getEdgeStoreLink(linkText) {
    return <a
      href="https://microsoftedge.microsoft.com/addons/detail/ajhkjlancjlohobehdondejgmeakilcn"
      target="_blank"
      rel="noopener noreferrer"
    >{linkText || "Edge"}</a>;
  }

  function setMisterSnaxStyle() {
    document.title = 'MisterSnax';
    const content = document.getElementById('Content');
    if (!content.classList.contains('mrs'))
      content.classList.add('mrs')
  }

  const getBrowserStoreLink = useCallback((linkText) => {
    if (is.chrome())
      return getChromeStoreLink(linkText);
    if (is.edge())
      return getEdgeStoreLink(linkText);
    return null
  }, [])

  const stopLoading = (message) => {
    setState({
      loading: false,
      message
    })
  }

  const isClientSupported = useCallback(async () => {
    if (isMobile()) {
      stopLoading(<p>Eine Mobilversion von MisterSnax ist schon bald verfügbar. Bis dahin benutz' doch einfach unsere
        Browser Extensions für {getChromeStoreLink()} oder {getEdgeStoreLink()}!</p>)
      return Promise.reject()
    } else if (!isBrowserSupported()) {
      stopLoading(<p>Dein Browser wird nicht unterstützt.<br/>Wir bieten derzeit leider
        nur {getChromeStoreLink()} und {getEdgeStoreLink()} Extensions.
      </p>);
      return Promise.reject()

    } else if (!(await isExtensionInstalled())) {
      stopLoading(<p> Installiere bitte die {getBrowserStoreLink("Mister Snax Extension")} und
        lade diese Seite neu, um an der Sammelbestellung teilzunehmen.</p>)
      return Promise.reject()
    }
    return Promise.resolve()
  }, [isExtensionInstalled, isBrowserSupported, getBrowserStoreLink])

  const getRedirectId = useCallback(() => {
    const params = new URLSearchParams(search)
    let redirectId = params.get('r');
    if (!redirectId) {
      setState({
        loading: false,
        message: <p> Leider hast Du keinen validen ShareLink.<br/>Bitte frage den Ersteller erneut nach einem Link! </p>
      })
      return Promise.reject()
    }
    return Promise.resolve(redirectId)
  }, [search])

  useEffect(() => {
    setMisterSnaxStyle();
    isClientSupported()
      .then(() => {
        if (!state.loading) {
          return Promise.reject()
        }
        getRedirectId();
      })
      .then((params) => {
        const url = `${baseUrl || 'https://api.mistersnax.com'}/redirects/${params.get('r')}`;
        fetch(url, {method: 'GET'}).then(res => res.json())
          .then(body => {
            let message;
            if (body.link) {
              setTimeout(() => {
                window.location.href = body.link
              }, 1000)
              message = 'Sammelbestellung gefunden! Leite weiter ...';
            } else {
              message = "Sammelbestellung wurde nicht gefunden. Bitte überprüfe den ShareLink"
            }

            setState({
              message,
              loading: false
            });


          })
          .catch(_err => setState({message: getErrorMessage(), loading: false}));
      })

  }, [baseUrl, search, isClientSupported, getRedirectId]);


  return (

    <div>
      <img src={msLogo} className={state.loading ? "App-logo-spinner" : "App-logo"} alt="logo"/>
      <p className="logo-label">
        MisterSnax<br/>
      </p>
      {state.message}
    </div>
  )

}

export function MisterSnaxRedirectDev({location}) {
  return MisterSnaxRedirect({
    location,
    baseUrl: 'https://api-dev.mistersnax.com',
    extensionIndicator: '#KGKrLMT4CMRPA54q1aIORZzaIApvTcYQEcPuTpoL'
  })
}
