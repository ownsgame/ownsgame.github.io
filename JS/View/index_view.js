
function mostrarSaves(saves){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="fonte-futuretimes animated-aparecer">Selecione seu save...</h1>
        <div class="column-buttons">
    `;

    for(let i = 0; i < 3; i ++){
        if(saves[i] == null){
            stringHTML +=`
                <div class="row-buttons animated-buttons">
                    <button class="save-button empty" onclick="createSaveAt(${i})">
                        + Novo Save
                    </button>
                </div> 
            `;
        }
        else{
            const SAVE = saves[i];
            stringHTML +=
            `
                <div class="row-buttons animated-buttons">
                    <button onclick="jogar(${i})" class="save-button"> 
                        ${saves[i].nome}
                    </button>
                    <button onclick="jogar(${i})" class="save-button"> 
                        <i class="fa-solid fa-play"></i>
                    </button>
                    <button onclick="deletar(${i})" class="save-button red-button">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
        }
    }

    stringHTML += 
    `
        </div>
        <button class="animated-aparecer red-button" onclick="fecharTelaPrincipal()">
            <i class="fa-solid fa-x"></i>
        </button>
    `;
    TELA.innerHTML = stringHTML;
    abrirTela("index-popup");
    blurBoxOpen();
}

function fecharTelaPrincipal(){
    const TELA = document.getElementById("index-popup");
    fecharTela("index-popup");
    blurBoxClose();
}

function mostrarOpcoes(saves){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="fonte-futuretimes animated-aparecer">Configurar</h1>
        <div class="column-buttons animated-buttons">
    `;

    stringHTML += 
    `
            <button><i class="fa-solid fa-volume-low"></i></button>
            <button class="animated-aparecer red-button" onclick="fecharTelaPrincipal()">
                <i class="fa-solid fa-x"></i>
            </button>
        </div>
    `;
    TELA.innerHTML = stringHTML;
    abrirTela("index-popup");
    blurBoxOpen();
}

function mostrarSobre(){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="fonte-futuretimes animated-aparecer">Sobre</h1>
        <p class="texto-padrão"><b>Versão:</b> 0.5.1 - Quests e Mapa</p>
        <p class="texto-padrão">
            <i>Owns é um jogo onde mundo carrega o destino de um herói
            à uma possível catastrofe. Será que no fim deixarás ela acontecer?</i> <br>
            <b>Feito por:</b> 
            <a href="https://github.com/SamuelDevelop" target="_blank"><b>@samuscadev</b></a>
         - 2025 Projeto Pessoal</p>
        <button class="animated-aparecer red-button" onclick="fecharTelaPrincipal()">
            <i class="fa-solid fa-x"></i>
        </button>
    `;

    TELA.innerHTML = stringHTML;
    abrirTela("index-popup");
    blurBoxOpen();
}