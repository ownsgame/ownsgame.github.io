let haquadradoEls = false;

function fixarAoConteiner(objeto){
    const CONTAINER = document.getElementById("conteiner");
    CONTAINER.appendChild(objeto);
}

function posicionarGrid(item, x, y){
    item.style.gridRow = `${x}/${x}`;
    item.style.gridColumn = `${y}/${y}`;
}

function getTileInPosition(x, y) {
    console.log(haquadradoEls);
    console.log(x);
    console.log(y);

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


function criarGrid(x, y, loot, arrayRewards, sprites) {
    
    if (!criarGrid._indiceSprite) criarGrid._indiceSprite = 0;

    const quadradoEl = document.createElement("img");
    quadradoEl.classList.add("tiles");

    const spriteAtual = sprites[criarGrid._indiceSprite];
    quadradoEl.src = spriteAtual;

    criarGrid._indiceSprite = (criarGrid._indiceSprite + 1) % sprites.length;

    if (loot) {
        let rd = randomInt(0, 100);
        if (rd <= 5) {
            quadradoEl.classList.add("bau");
            if (arrayRewards != null) {
                setBau(quadradoEl, arrayRewards);
            } else {
                setBau(quadradoEl);
            }
            setTileValue("c", x, y, false);
        } else {
            setTileValue("g", x, y, false);
        }
    } else {
        setTileValue("g", x, y, false);
    }

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

function desenharGrade(id, loot = false, arrayRewards = null){
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
            criarGrid(i, j, loot, arrayRewards, SPRITES);
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






