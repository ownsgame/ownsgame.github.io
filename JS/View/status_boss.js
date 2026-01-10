const PAINEL_STATUS = document.getElementById("status");

PAINEL_STATUS.innerHTML = 
`
    <div id="status-hp" class="status-item">
        <h3 id="status-vida" class="status-item"><i class="fa-solid fa-heart"></i> ${getSessionVida()}/${getSessionVida()}</h3>
    </div>
    
    <div id="status-boss-hp" class="status-item">
        <h3 id="boss-hp" class="status-item"></h3>
    </div>
    

    <div id="status-time-attack" class="status-item">
        <h3 class="status-item fonte-comum">
        <i class="fa-solid fa-hand-fist"></i>
             ${getSessionAtaque()}
        </h3>
    </div>
`;

const VIDA_TEXTO = document.getElementById("status-vida");
const BARRA_BOSS = document.getElementById("status-boss-hp");
const VIDA_BOSS = document.getElementById("boss-hp");
const BARRA_HP = document.getElementById("status-hp");

function exibirDano(dano, tipo = 0){
    const CONTADOR = document.getElementById("damage-count");
    let string = `<h2>${dano}</h2>`;
    
    if(tipo == 0){
        string += `<h3>Dano Causado</h3>`;
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

function atualizarVidaChefe(vida, total){
    VIDA_BOSS.innerHTML = `<i class="fa-solid fa-skull"></i> HP: ${vida} / ${total}`;
    
    let porcentagem = (vida / total) * 100;

    BARRA_BOSS.style.backgroundImage = `linear-gradient(
        to right,
        rgba(223, 30, 23, 1) ${porcentagem}%,
        black ${porcentagem}%
    )`;
}

function animarBarraTempo(tempoMs){
    const barra = document.getElementById("status-time-attack");
    const inicio = performance.now();

    function atualizar(agora){
        const decorrido = agora - inicio;
        let progresso = decorrido / tempoMs;

        if(progresso > 1) progresso = 1;

        const porcentagem = progresso * 100;

        barra.style.background = `linear-gradient(
            to right,
            rgb(20, 102, 54) ${porcentagem}%,
            rgba(21, 21, 22, 1) ${porcentagem}%
        )`;

        if(progresso < 1){
            requestAnimationFrame(atualizar);
        }
    }

    requestAnimationFrame(atualizar);
}
