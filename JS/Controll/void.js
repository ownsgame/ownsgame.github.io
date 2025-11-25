function varrerTile(tile){
    let cordX = tile.style.gridRow;
    let CordY = tile.style.gridColumn;

    tile.className = "";
    tile.classList.add("void");
    setTileValue("v", x, y, false);

    tile.style.gridRow = cordX;
    tile.style.gridColumn = CordY;   
}

function varrerLinha(num, tam){
    const QUADRADOS = document.querySelectorAll(".tiles");
    let linha = (num - 1) * tam;

    for(let i = linha; i < linha + tam; i++){
        if(QUADRADOS[i] != undefined){
            varrerTile(QUADRADOS[i]);
        }
    }
}

function varrerColuna(num, tam){
    const QUADRADOS = document.querySelectorAll(".tiles");
    num -= 1;

    for(let i = num; i < tam * tam; i+= tam){
        if(QUADRADOS[i] != undefined){
            varrerTile(QUADRADOS[i]);
        }
    }
}

function restaurarTile(num, classe){
    const voids = document.querySelectorAll(".void");
    let tile = voids[num];
    let cordX = tile.style.gridRow;
    let CordY = tile.style.gridColumn;

    if (tile.classList.contains("void")) {
        tile.className = "";
        tile.classList.add(`${classe}`, "tiles");
        setTileValue("g", x, y, false);
    }
    

    tile.style.gridRow = cordX;
    tile.style.gridColumn = CordY;  
}
