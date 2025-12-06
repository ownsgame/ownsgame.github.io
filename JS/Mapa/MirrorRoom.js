
setBackground("Sprites/Ground/mirrorroom_background.svg");
const SALA = getPlace("mirrorroom");

const NomeSala = SALA.nome;
const ArrayRecompensas = SALA.recompensas;

function getLevelName(){
    return NomeSala;
}

const TOTAL_VIAGENS = 3;
let viagensRestantes = TOTAL_VIAGENS;
const BOTAO_EX = document.getElementById("botao-explorar");
BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 

function aumentarTotalViagens(){
    viagensRestantes ++;
    BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 
}

function gerarDungeonPre(){
    desenharGrade("mirror", false);
    Ghosts.gerarInimigos();
}

gerarDungeonPre();

function resetar(){
    viagensRestantes --;
    zerarInimigoAlvo();
    zerarBauAlvo();
    
    if(viagensRestantes >= 0){
        let removido1 = removerGrid();
        let removido2 = deletarInimigos();

        if(removido1 && removido2){
            gerarDungeonPre();
            atualizarPos();
            if(viagensRestantes == 0){
                BOTAO_EX.innerHTML = `Sair`;
                BOTAO_EX.onclick = () => window.location = 'mapa.html';
                BOTAO_EX.classList.add("botao-inativo");
                BOTAO_EX.classList.remove("botao-status");
            }
            else{
                BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 
            }
        }
    }
}