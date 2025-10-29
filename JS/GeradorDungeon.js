const TOTAL_VIAGENS = 5;
let viagensRestantes = TOTAL_VIAGENS;
const BOTAO_EX = document.getElementById("botao-explorar");
BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 

function gerarDungeonPre(){
    const rd = randomInt(1, 4);
    desenharGrade(5, "terra", true);
    Inimigo.gerarInimigos(rd, "Sprites/ground/enemy_1.svg");
}

gerarDungeonPre();

function resetar(){
    viagensRestantes --;
    zerarInimigoAlvo();
    zerarBauAlvo();
    
    if(viagensRestantes > 0){
        let removido1 = removerGrid();
        let removido2 = deletarInimigos();

        if(removido1 && removido2){
            gerarDungeonPre();
            atualizarPos();
            BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 
        }
    }
    else{
        BOTAO_EX.classList.add("botao-inativo");
        BOTAO_EX.classList.remove("botao-status");
        BOTAO_EX.innerHTML = `Sair`;
    }  
}