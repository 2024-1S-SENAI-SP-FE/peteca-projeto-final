const scripts = [
  { src: "./scripts/aluguel.js" },
  { src: "./scripts/carrossel-carros.js" },
  { src: "./scripts/scripts.js" },
  { src: "./scripts/footer.js" },
];

function criaScripts(scripts) {
  const fragment = document.createDocumentFragment();
  scripts.forEach((scrpt) => {
    const scriptElement = document.createElement("script");
    scriptElement.src = scrpt.src;
    fragment.appendChild(scriptElement);
  });
  return fragment;
}

document.body.appendChild(criaScripts(scripts))

console.log(criaScripts(scripts));


const batata = [
  { "rel": "stylesheet", "type": "text/css", url: "/estilos/reset.css"},
  { "rel": "stylesheet", "type": "text/css", url: "/estilos/styles.css" },
  { "rel": "stylesheet", "type": "text/css", url: "/estilos/resposividade.css" },
  { "rel": "stylesheet", "type": "text/css", url: "/estilos/aluguel.css" },
];

function criaLink(batata) {
  const head = document.head

  batata.forEach(l => {
    const link = document.createElement('link')
    
    link.setAttribute('rel', l.rel)
    link.setAttribute('type', l.type)
    link.href = l.url
    head.appendChild(link)
  });

  // return head
}
criaLink(batata)
// document.head.appendChild(criaLink(links))
