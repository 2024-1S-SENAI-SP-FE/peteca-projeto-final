let nameUser = localStorage.getItem("nomeDoMano");
document.addEventListener("DOMContentLoaded", function() {
    const links = [
      { url: "index.html", texto: "Home" },
      { url: "aluguel.html", texto: "Carros" },
      { url: "sobre-nos.html", texto: "Sobre nós" },
      { url: "contato.html", texto: "Contatos" },
      { url: "login.html", texto: '<img src="../icones/arrow-right-to-bracket-solid copy.svg" alt="">Log in'},
    ];
    
    function criaAncora(url, texto) {
      const a = document.createElement("a");

        a.href = url;
        if (
            texto ===
            '<img src="../icones/arrow-right-to-bracket-solid copy.svg" alt="">Log in'
        ) {
            if (nameUser) {
            url = 'user.html'
            texto = nameUser;
            a.href = '#'
          a.classList.add('user-logado')
        }
        // a.setAttribute("target", "_blank");
      }
      a.innerHTML = texto;
        //   console.log(a);
      return a;
    }

    
    function criaItem(ancora){
        const li = document.createElement('li');
        li.appendChild(ancora);
    
        return li;
    }
    
    function criaUl(ancoras) {
        const ul = document.createElement('ul');
    
        ancoras.forEach(ancora =>{
            const a = criaAncora(ancora.url, ancora.texto);
            const li = criaItem(a);
            ul.appendChild(li);
        })
    
        return ul;
    }
    
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    header.appendChild(nav);
    nav.id = "menu";
    const div = document.createElement('div');
    div.classList.add('logo');
    // div.innerHTML = '<img src="imagens/logo.png" alt="">';
    nav.appendChild(div);
    nav.appendChild(criaUl(links));
    document.body.insertAdjacentElement('afterbegin', header);
})
let aClass
setTimeout(() => {
    
     aClass = document.querySelector('.user-logado')
    // console.log(aClass);
    const liPai = aClass.parentElement
    liPai.classList.add('liPai')
    const divInfo = document.createElement('div')
    divInfo.classList.add('info-user')
    liPai.append(divInfo)
    
    console.log(liPai);
    aClass.addEventListener('click',console.log('teste'))
    
}, 300)  
//   function showUser(div) {
//         div.classList.add('crescer')
//     }


function criaDetalhesUser(a) {
    if (a.classList.cotains = 'user-logado') {
        console.log('teste de classe');
       
        
    }
}