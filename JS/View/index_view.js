
function mostrarSaves(saves){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="fonte-comum animated-aparecer">Selecione seu Save...</h1>
        <div class="saves-conteiner">
    `;

    for(let i = 0; i < 3; i ++){
        if(saves[i] == null){
            stringHTML +=`
                <button class="empty animated-aparecer" onclick="createSaveAt(${i})">
                    <i class="fa-solid fa-floppy-disk"></i> Novo Save
                </button>
            `;
        }
        else{
            const SAVE = saves[i];
            stringHTML +=
            `
                <div class="save-conteiner pointer animated-aparecer" onclick="jogar(${i})">
                    <h2 class="fonte-comum">${i + 1} - ${saves[i].nome}</h2>
                    <button onclick="deletar(event, ${i})" class="red-button">
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