function setSprite(elemento, tipo, id){
    let imagem = "Sprites/IU/logo.svg";

    if(tipo == "entidade"){
        imagem = getEntitySprite(id);
    }
    else if(tipo == "tile"){
        imagem = getTileSprite(id);
    }
    else if(tipo == "work"){
        let objeto = getWorkSprite(id);
        imagem = objeto.sprite;

        elemento.addEventListener("mouseenter", ()=>{
            elemento.src = `../${objeto.hover}`;
        });
        elemento.addEventListener("mouseleave", ()=>{
            elemento.src = `../${objeto.sprite}`;
        });
    }

    elemento.src = `../${imagem}`;
}

function setBackground(imagem){
    const BACKGROUND = document.body;
    BACKGROUND.style.backgroundImage = `url('../${imagem}')`;
}

function setHover(elemento, sprite, hover){
    elemento.addEventListener("mouseenter", ()=>{
        elemento.src = `../${hover}`;
    });
    elemento.addEventListener("mouseleave", ()=>{
        elemento.src = `../${sprite}`;
    });
}