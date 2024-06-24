const ancoras = [
  { "href": "index.html", "inner": "ancora1" },
  { "href": "index.html", "inner": "ancora2" },
  { "href": "index.html", "inner": "ancora3" },
  { "href": "index.html", "inner": "ancora4" },
  { "href": "index.html", "inner": "ancora5" },
];

function criaAncora(href, inner) {
  const ancora = document.createElement("a");
  ancora.classList.add("footer-a");
    ancora.href = href;
    ancora.innerHTML = inner


    return ancora 
}
function criaLi(ancora){
    const liFooter = document.createElement("li");
    liFooter.classList.add("footer-li");
    liFooter.append(ancora)
    return liFooter
}
function criaUl(ancoras) {
    const ul = document.createElement("ul");
    ul.classList.add("footer-ul");
    ancoras.forEach(ancora => {
        const a = criaAncora(ancora.href, ancora.inner)
        const li = criaLi(ancora)
        li.append(a)
        ul.append(li)
    });
    return ul
}
const footer = document.createElement("footer");
const containerFooter = document.createElement("div");
containerFooter.classList.add("footer-container");

const liTitle = document.createElement("li");
liTitle.classList.add("footer-title");
const h3 = document.createElement("h3");
h3.textContent = "Aluguel";

liTitle.append(h3);

containerFooter.appendChild(criaUl(ancoras));
footer.append(containerFooter);

document.body.appendChild(footer);
// console.log("teste");
