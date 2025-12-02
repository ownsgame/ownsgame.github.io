const FLOAT_SCREEN = document.querySelector("tela-flutuante");

function fecharTelaF(){
    FLOAT_SCREEN.style.transition = "all ease-in-out 250ms";
    setTimeout(()=>{
        FLOAT_SCREEN.style.opacity = 0;
    }, 50);
    setTimeout(()=>{
        FLOAT_SCREEN.style.display = "none"
        FLOAT_SCREEN.style.opacity = 1;
    }, 300);
}

function abrirTelaF() {
    FLOAT_SCREEN.style.transition = "all ease-in-out 250ms";
    FLOAT_SCREEN.style.display = "flex";
    FLOAT_SCREEN.style.opacity = 0;

    setTimeout(() => {
        FLOAT_SCREEN.style.opacity = 1;
    }, 50);
}

function telaApresentarSala(nome, imagem, link){
    FLOAT_SCREEN.innerHTML = 
    `
        <h1>${nome}</h1>
        <img src="${imagem}">
        <div class="botoes">
            <button >Jogar</button>
            <button>Prévia</button>
            <button>Inventário</button>
            <button onclick="fecharTelaF()">Fechar</button>
        </div>
    `;
}

function telaApresentarBoss(nome, titulo, imagem, link, forca){
    FLOAT_SCREEN.innerHTML = 
    `
        <h1>${nome}</h1>
        <h2>${titulo}</h2>
        <img src="${imagem}">
        <p>Força: ${forca}</p>
        <div class="botoes">
            <button>Jogar</button>
            <button>Prévia</button>
            <button>Inventário</button>
            <button onclick="fecharTelaF()">Fechar</button>
        </div>
    `;
}