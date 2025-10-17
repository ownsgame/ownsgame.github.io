function fixarAoConteiner(objeto){
    const CONTAINER = document.getElementById("conteiner");
    CONTAINER.appendChild(objeto);
}

function posicionarGrid(item, x, y){
    item.style.gridRow = `${x}/${x}`;
    item.style.gridColumn = `${y}/${y}`;
}

function criarGrid(x, y, classe, loot){
    let quadrado = document.createElement("div");
    quadrado.classList.add("tiles");
    
    if(loot){
        let rd = randomInt(0, 100);
        if(rd <= 5){
            quadrado.classList.add("bau");
            setBau(quadrado);
        }
        else{
            quadrado.classList.add(`${classe}`);
        } 
    }
    else{
        quadrado.classList.add(`${classe}`);
    }

    posicionarGrid(quadrado, x, y);
    fixarAoConteiner(quadrado);
}

function removerGrid(){
    const TILES = document.querySelectorAll(".tiles");
    TILES.forEach(tile => {
        tile.remove();
    });

    return true;
}

function desenharGrade(ordem, classe, loot = false){
    const CONTAINER = document.getElementById("conteiner");
    let string = ``;
    for(let j = 1; j <= ordem; j++){
        string += `1fr `;
    }
    
    CONTAINER.style.gridTemplateRows = string;
    CONTAINER.style.gridTemplateColumns = string;

    for(let i = 1; i <= ordem; i++){
        for(let j = 1; j <= ordem; j++){
            criarGrid(i, j, classe, loot);
        }
    }
}

//boa chatgpt estou gostando de ver...

function atualizarTamanhoPadrao() {
  const conteiner = document.getElementById("conteiner");
  
  const largura = conteiner.offsetWidth;
  const altura = conteiner.offsetHeight;

  const tamTileLargura = largura / 5;
  const tamTileAltura = altura / 5;

  const estilo = document.createElement("style");
  estilo.innerHTML = `
    .tamPadrao {
      width: ${tamTileLargura}px;
      height: ${tamTileAltura}px;
    }
  `;

  const antiga = document.getElementById("tamPadraoEstilo");
  if (antiga) antiga.remove();
  estilo.id = "tamPadraoEstilo";
  document.head.appendChild(estilo);
}

atualizarTamanhoPadrao();
window.addEventListener("resize", atualizarTamanhoPadrao);






