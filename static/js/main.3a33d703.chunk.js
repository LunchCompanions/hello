(this["webpackJsonpmister-snax-landing-react"]=this["webpackJsonpmister-snax-landing-react"]||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/shunter.cfc93561.svg"},17:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),c=n.n(l),s=(n(22),n(16)),o=n(7),m=n.n(o),i=n(14),p=n.n(i),u=(n(23),n(5)),g=n(1);function h(e){return E({location:e.location,baseUrl:"https://api-dev.mistersnax.com"})}function E(e){var t=e.location.search,n=e.baseUrl,l=Object(a.useState)({loading:!0,message:"Sammelbestellung wird gesucht, ..."}),c=Object(s.a)(l,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){var e=new URLSearchParams(t),a="".concat(n||"https://api.mistersnax.com","/redirects/").concat(e.get("r"));fetch(a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.link?window.location.href=e.link:i({message:"Sammelbestellung nicht gefunden :(",loading:!1})})).catch((function(e){return i({message:"Sammelbestellung nicht gefunden :(",loading:!1})}))}),[n,t]),r.a.createElement("div",null,r.a.createElement("img",{src:m.a,className:o.loading?"App-logo-spinner":"App-logo",alt:"logo"}),r.a.createElement("p",null,"MisterSnax",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"small"},o.message)))}var d=function(){return Object(a.useEffect)((function(){document.title="MisterSnax";var e=document.getElementById("Content");e.classList.contains("mrs")||e.classList.add("mrs")})),[r.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"MisterSnax",r.a.createElement("br",null),r.a.createElement("span",{className:"small"}," Gruppenbestellungen einfach koordinieren.")),r.a.createElement("a",{className:"App-link",href:"https://chrome.google.com/webstore/detail/mistersnax/jmobiglepfamkdimbpcjjaomhinajijp?hl=de&gl=DE",target:"_blank",rel:"noopener noreferrer"},"Get the Extension for Chrome!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"small"},"Jagst Du gern? ",r.a.createElement("br",null),r.a.createElement(u.b,{to:"/sh",className:"App-link"},r.a.createElement("span",{rel:"noopener noreferrer"},"Unser Sp\xe4tzlehunter auch!")))]},f=function(){return Object(a.useEffect)((function(){document.title="Sp\xe4tzlehunter";var e=document.getElementById("Content");e.classList.contains("mrs")&&e.classList.remove("mrs")}),[]),[r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Sp\xe4tzlehunter - auf der Jagd nach den leckersten Gerichten!"),r.a.createElement("a",{className:"App-link",href:"https://chrome.google.com/webstore/detail/mistersnax/jmobiglepfamkdimbpcjjaomhinajijp?hl=de&gl=DE",target:"_blank",rel:"noopener noreferrer"},"Zur Website"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"small"},"Du isst nicht gern allein? ",r.a.createElement("br",null),r.a.createElement(u.b,{to:"/mrs",className:"App-link"},r.a.createElement("p",{rel:"noopener noreferrer"},"MisterSnax organisiert Deine Gruppenbestellung!")))]},b=function(){return r.a.createElement("header",{className:"App-header",id:"Content"},r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{exact:!0,path:"/",component:d}),r.a.createElement(g.a,{exact:!0,path:"/mistersnax",component:d}),r.a.createElement(g.a,{exact:!0,path:"/spaetzlehunter",component:f}),r.a.createElement(g.a,{exact:!0,path:"/pd",component:h}),r.a.createElement(g.a,{exact:!0,path:"/p",component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n.p+"static/media/snax.cfae8199.svg"}},[[17,1,2]]]);
//# sourceMappingURL=main.3a33d703.chunk.js.map