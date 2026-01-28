let emCombateAnterior = false;
let enemyTarget = null;

setInterval(() => {
    const inimigos = getAllEnemies();
    let combate = false;
    let tempo = 0;
    let dano = 0;

    for (const inimigo of inimigos) {
        if (inimigo.estaEmCombate()) {
            enemyTarget = inimigo;
            combate = true;
            mostrarInimigoAlvo(enemyTarget);
            tempo = inimigo.getIntervalo();
            dano = inimigo.getAtaque();
            break;
        }
    }

    if (combate && !emCombateAnterior) {
        iniciarContador(tempo, dano);
    }

    if (!combate && emCombateAnterior) {
        enemyTarget = null;
        resetarContador();
        ocultarInimigoAlvo();
    }

    emCombateAnterior = combate;
}, 200);


function mostrarInimigoAlvo(inimigo){
    const tela = document.getElementById("dados-inimigo");

    tela.innerHTML = `
        <h3><i class="fa-solid fa-skull"></i> ${inimigo.getVida()}/ ${inimigo.getVidaInicial()}</h3>
    `;
    barraInimigo(inimigo.getVida(), inimigo.getVidaInicial());
    tela.style.display = "flex";
}

function ocultarInimigoAlvo(){
    const tela = document.getElementById("dados-inimigo");
    tela.innerHTML = "";
    tela.style.display = "none";
}

function barraInimigo(vida, total){
    const barraInimigo = document.getElementById("dados-inimigo");
    let porcentagem = (vida / total) * 100;

    barraInimigo.style.backgroundImage = `linear-gradient(
        to right,
        rgba(163, 5, 0, 1) ${porcentagem}%,
        black ${porcentagem}%
    )`;
}

function zerarInimigoAlvo(){
    enemyTarget = null;
}
