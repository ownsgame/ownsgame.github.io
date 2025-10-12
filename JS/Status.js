
function verificarAcaoInicial(){
    const QUADRADOS = document.querySelectorAll(".tiles");
    if(QUADRADOS[0].classList.contains("bau")){
        ChamadorAcao.mudarEstado(1);
    } else {
        ChamadorAcao.mudarEstado(0);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    verificarAcaoInicial();
});


let intervaloContador = null;

function iniciarContador(tempo, dano) {
    const CONTADOR = document.getElementById("contagem-ataque");

    if (intervaloContador) clearInterval(intervaloContador);

    intervaloContador = setInterval(() => {
        tempo--;
        if(tempo == 0){
            CONTADOR.innerHTML = `Dano Recebido!`;
        }
        else{
            CONTADOR.innerHTML = `${tempo}s`;
        }       

        if (tempo <= 0) {
            clearInterval(intervaloContador);
            intervaloContador = null; 
            jogador.tomarDano(dano);
            
            const inimigos = getAllEnemies();
            const aindaEmCombate = inimigos.some(i => i.estaEmCombate());

            if (aindaEmCombate) {
                const inimigo = inimigos.find(i => i.estaEmCombate());
                iniciarContador(inimigo.getTime(), dano);
            } else {
                resetarContador();
            }
        }
    }, 1000);
}

function resetarContador() {
    const CONTADOR = document.getElementById("contagem-ataque");

    if (intervaloContador) {
        clearInterval(intervaloContador);
        intervaloContador = null;
    }

    CONTADOR.innerHTML = `Fora de Combate!`;
}

function atualizarCoordenadas(x, y){
    const CORDS_EL = document.getElementById("coords");
    CORDS_EL.innerHTML = `${x}, ${y}`;
}

function fecharMenuRewards(){
    const MENU = document.getElementById("tela_reward");

    MENU.style.display = "none";
}

function exibirDano(dano, tipo = 0){
    const CONTADOR = document.getElementById("damage-count");
    let string = `<h2>${dano}</h2>`;
    
    if(tipo == 0){
        string += `<h3>Dano Infligido</h3>`;
    }
    else{
        string += `<h3>Dano Sofrido</h3>`
    }

    CONTADOR.innerHTML = `${string}`;
    CONTADOR.style.display = "flex";
    CONTADOR.style.opacity = 1;

    setTimeout(()=>{CONTADOR.style.opacity = 1;}, 1100);
    setTimeout(()=>{CONTADOR.style.display = "none";}, 1200);
}