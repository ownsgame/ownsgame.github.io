let indiceCutscene = 0;
let cutscene = null

function showCutscene(){
    const cutsceneId = getAtualCutscene();
    if(cutsceneId != null){
        cutscene = getCutscene(cutsceneId);
        mostrarCutscene();
    }

    else{
        redirecionarUltimaSala();
    }
}

function avancarFrame(){
    if(cutscene != null){
        if(indiceCutscene == cutscene.textos.length - 1){
            redirecionarUltimaSala();
        }
        else{
            indiceCutscene = (indiceCutscene + 1) % cutscene.textos.length;
            mostrarCutscene();
        }
        
    }
}

function retrocederFrame(){
    if(cutscene != null){
        indiceCutscene = (indiceCutscene - 1 + cutscene.textos.length) % cutscene.textos.length;
        mostrarCutscene();
    }
}

function mostrarCutscene(){
    const TELA = document.querySelector(".tela-cutscene");

    TELA.innerHTML = 
    `
        <img class="cutscene-image animated-aparecer" src="../${cutscene.sprites[indiceCutscene]}">
        <div class="cutscene-texts">
            <p class="fonte-comum animated-aparecer">${cutscene.textos[indiceCutscene]}</p>
        </div>
    `;
}

showCutscene();

function fecharCutscene(){
    cancellAtualCutscene();
    redirecionarUltimaSala();
}