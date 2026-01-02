const PAINEL_STATUS = document.getElementById("status");

PAINEL_STATUS.innerHTML = 
`
    <div id="status-hp" class="status-item">
        <h3 id="status-vida" class="status-item"><i class="fa-solid fa-heart"></i> ${getSessionVida()}/${getSessionVida()}</h3>
    </div>

    <h3 id="contagem-ataque" class="status-item fonte-comum"></h3>
    <div id=""></div>
    <div id="dados-inimigo"></div>
    <button class="status-item botao-status" id="botao-explorar" onclick="resetar()"></button>
    <button class="botao-ativo" id="botao-explorar" onclick="abrirTelaMenuJogo()">Menu</button>
`;

const VIDA_TEXTO = document.getElementById("status-vida");
const BARRA_HP = document.getElementById("status-hp");

function limparTelaInimigo(){
    const tela = document.getElementById("dados-inimigo");
    tela.innerHTML = ``;
}

let intervaloContador = null;

function iniciarContador(tempo, dano) {
    tempo *= 1000;
    const CONTADOR = document.getElementById("contagem-ataque");

    if (intervaloContador) clearInterval(intervaloContador);

    intervaloContador = setInterval(() => {
        tempo -= 100;
        if(tempo == 0){
            CONTADOR.innerHTML = `Dano Recebido!`;
        }
        else{
            if(tempo < 1000){
                CONTADOR.classList.add("tx-yellow");
            }
            else{
                CONTADOR.classList.remove("tx-yellow");
            }
            CONTADOR.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Ataque em: ${(tempo / 1000).toFixed(1)}s`;
        }       

        if (tempo <= 0) {
            clearInterval(intervaloContador);
            intervaloContador = null; 
            jogador.tomarDano(dano);
            
            const inimigos = getAllEnemies();
            const aindaEmCombate = inimigos.some(i => i.estaEmCombate());

            if (aindaEmCombate) {
                const inimigo = inimigos.find(i => i.estaEmCombate());
                iniciarContador(inimigo.getIntervalo(), dano);
            } else {
                resetarContador();
            }
        }
    }, 100);
}

function resetarContador() {
    const CONTADOR = document.getElementById("contagem-ataque");
    limparTelaInimigo();
    if (intervaloContador) {
        clearInterval(intervaloContador);
        intervaloContador = null;
    }

    CONTADOR.innerHTML = ``;
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

    setTimeout(()=>{fecharTela("damage-count")}, 1200);
}

function fecharAbaStatus(){
    fecharTela("status");
}

function atualizarVida(vida, total){
    VIDA_TEXTO.innerHTML = `<i class="fa-solid fa-heart"></i> HP: ${vida} / ${total}`;
    
    let porcentagem = (vida / total) * 100;

    BARRA_HP.style.backgroundImage = `linear-gradient(
        to right,
        rgb(50, 14, 255) ${porcentagem}%,
        black ${porcentagem}%
    )`;
}
