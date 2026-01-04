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
    }

    emCombateAnterior = combate;
}, 200);


function mostrarInimigoAlvo(inimigo){
    const tela = document.getElementById("dados-inimigo");

    tela.innerHTML = `
        <h3>Dados Do Inimigo:</h3>
        <h3>❤️: ${inimigo.getVida()} | 🗡️: ${inimigo.getAtaque()} | 🛡️: ${inimigo.getDefesa()} </h3>
    `;
}

function zerarInimigoAlvo(){
    enemyTarget = null;
}
