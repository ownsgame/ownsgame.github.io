
function mostrarSaves(saves){
    const TELA = document.getElementById("select-save");

    let stringHTML = `<h1 class="fonte-futuretimes">Selecione seu save...</h1>`;

    for(let i = 0; i < 3; i ++){
        if(saves[i] == null){
            stringHTML +=`<button onclick="createSaveAt(${i})"> + </button>`;
        }
        else{
            const SAVE = saves[i];
            stringHTML +=`<button onclick="jogar(${i})">${SAVE.nome}</button>`;
        }
    }

    stringHTML += `<button onclick="fecharTelaSaves()">Fechar</button>`;
    TELA.innerHTML = stringHTML;
    TELA.style.display = "flex";
}

function fecharTelaSaves(){
    const TELA = document.getElementById("select-save");
    TELA.style.display = "none";
}