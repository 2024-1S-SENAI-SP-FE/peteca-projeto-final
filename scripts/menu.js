document.addEventListener("DOMContentLoaded", function() {

    const links = [
        {"url": "index.html", "texto": "Home"},
        {"url": "carros.html", "texto": "Carros"},
        {"url": "sobre-nos.html", "texto": "Sobre nós"},
        {"url": "contato.html", "texto": "Contatos"},
        {"url": "login.html", "texto": '<img src="../icones/arrow-right-to-bracket-solid copy.svg" alt="">Log in'}
    ];
    
    function criaAncora(url, texto){
        const a = document.createElement('a');
        a.href = url;
        a.innerHTML = texto;
    
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
    div.innerHTML = '<img src="imagens/logo.png" alt="">';
    nav.appendChild(div);
    nav.appendChild(criaUl(links));
    
    document.body.insertAdjacentElement('afterbegin', header);
})
