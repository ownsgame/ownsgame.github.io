let haquadradoEls = false;
let tilesAlt = 100;
let tilesLarg = 100;

function fixarAoConteiner(objeto){
    const CONTAINER = document.getElementById("conteiner");
    CONTAINER.appendChild(objeto);
}

function posicionarGrid(item, x, y, largura = 1, altura = 1){
    item.style.gridRow = `${x} / ${x + altura}`;
    item.style.gridColumn = `${y} / ${y + largura}`;
}

function getTileInPosition(x, y) {

    if (!haquadradoEls) return null;

    const quadradoElS = document.querySelectorAll(".tiles");
    for (const q of quadradoElS) {
        const row = parseInt(q.style.gridRow);
        const col = parseInt(q.style.gridColumn);
        
        if(x == row && y == col){
            return q;
        }
    }

    return null;
}


function criarGrid(x, y, sprites) {
    if (!criarGrid._indiceSprite) criarGrid._indiceSprite = 0;

    const quadradoEl = document.createElement("img");
    quadradoEl.classList.add("tiles");

    const spriteAtual = sprites[criarGrid._indiceSprite];
    quadradoEl.src = spriteAtual;

    criarGrid._indiceSprite = (criarGrid._indiceSprite + 1) % sprites.length;
    
    quadradoEl.classList.add("tamPadrao");
    posicionarGrid(quadradoEl, x, y);
    fixarAoConteiner(quadradoEl);
}

function removerGrid(){
    const TILES = document.querySelectorAll(".tiles");
    TILES.forEach(tile => {
        tile.remove();
    });

    return true;
}

function desenharGrade(id, ){
    const CONTAINER = document.getElementById("conteiner");
    const SPRITES = getClusterTiles(id);
    let string = ``;
    for(let j = 1; j <= 5; j++){
        string += `1fr `;
    }
    
    CONTAINER.style.gridTemplateRows = string;
    CONTAINER.style.gridTemplateColumns = string;

    for(let i = 1; i <= 5; i++){
        for(let j = 1; j <= 5; j++){
            criarGrid(i, j, SPRITES);
        }
    }

    haquadradoEls = true;
}

function atualizarTamanhoPadrao() {
  const conteiner = document.getElementById("conteiner");
  
  const largura = conteiner.offsetWidth;
  const altura = conteiner.offsetHeight;

  const tamTileLargura = largura / 5;
  const tamTileAltura = altura / 5;
  tilesAlt = tamTileAltura;
  tilesLarg = tamTileLargura;

  const estilo = document.createElement("style");
  estilo.innerHTML = `
    .tamPadrao {
      width: ${tamTileLargura}px;
      height: ${tamTileAltura}px;
    }

    .boss {
      width: ${tamTileLargura * 2}px;
      height: ${tamTileAltura * 2}px;
    }
  `;

  const antiga = document.getElementById("tamPadraoEstilo");
  if (antiga) antiga.remove();

  estilo.id = "tamPadraoEstilo";
  document.head.appendChild(estilo);
}

atualizarTamanhoPadrao();
window.addEventListener("resize", atualizarTamanhoPadrao);

function getTamanhosGrid(){
    const grid = document.getElementById("conteiner");
    const rect = grid.getBoundingClientRect();

    return {
        gridOffsetX: rect.left,
        gridOffsetY: rect.top,
        tileAlt: tilesAlt,
        tileLarg: tilesLarg
    }
}






