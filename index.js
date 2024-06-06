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


const links = [
  { "rel": "stylesheet", url: "./estilos/reset.css" },
  { "rel": "stylesheet", url: "./estilos/styles.css" },
  { "rel": "stylesheet", url: "./estilos/resposividade.css" },
  { "rel": "stylesheet", url: "./estilos/aluguel.css" },
];

function criaLink(links) {
  const head = document.head
  const retorno = 
  links.forEach(l => {
    const link = document.createElement('link')
    
    link.setAttribute('rel', l.rel)
    link.href = l.url
    head.appendChild(link)
  });

}
criaLink(links)
// document.head.appendChild(criaLink(links))
console.log('aaaaaaaaaaaaaaaa');