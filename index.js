const scripts = [
  { src: "./scripts/aluguel.js" },
  { src: "./scripts/carrossel-carros.js" },
  { src: "./scripts/scripts.js" },
  { src: "./scripts/footer.js" },
];

function criaScripts(scripts) {

    const a = document.createElement("script");
   scripts.forEach(scrpt => {
       a.src = scrpt.src
       return a
    });
    return a
}

document.body.append(criaScripts(scripts))

console.log(criaScripts(scripts)  );