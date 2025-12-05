
function mostrarSaves(saves){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="fonte-futuretimes animated-aparecer">Selecione seu save...</h1>
        <div class="column-buttons animated-buttons">
    `;

    for(let i = 0; i < 3; i ++){
        if(saves[i] == null){
            stringHTML +=`<button onclick="createSaveAt(${i})"> + </button>`;
        }
        else{
            const SAVE = saves[i];
            stringHTML +=`<button onclick="jogar(${i})">${SAVE.nome}</button>`;
        }
    }

    stringHTML += 
    `
        </div>
        <button class="animated-aparecer" onclick="fecharTelaPrincipal()">Fechar</button>
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

    for(let i = 0; i < 3; i ++){
        if(saves[i] == null){
            stringHTML +=``;
        }
        else{
            const SAVE = saves[i];
            stringHTML +=`<button onclick="deletar(${i})">Deletar: ${SAVE.nome}</button>`;
        }
    }

    stringHTML += 
    `
        <button>Som: Ativo</button>
        </div>
        <button class="animated-aparecer" onclick="fecharTelaPrincipal()">Fechar</button>
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
        <p class="texto-padrão"><b>Versão:</b> 0.1.2 - Estruturas Iniciais</p>
        <p class="texto-padrão">
            Owns é um jogo onde o orgulho de um povo é testado ao limite, a descoberta do mundo
            e lutas intrigantes irão mitigar um sentimento nacionalista? <br>
            <b>Feito por:</b> 
            <a href="https://github.com/samuscadev" target="_blank"><b>@samuscadev</b></a>
         - 2025 Projeto Pessoal</p>
        <button class="animated-aparecer" onclick="fecharTelaPrincipal()">Fechar</button>
    `;

    TELA.innerHTML = stringHTML;
    abrirTela("index-popup");
    blurBoxOpen();
}