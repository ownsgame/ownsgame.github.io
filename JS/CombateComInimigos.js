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
            tempo = inimigo.getTime();
            dano = inimigo.getDano();
            break;
        }
    }

    if (combate && !emCombateAnterior) {
        ChamadorAcao.mudarEstado(2);
        iniciarContador(tempo, dano);
    }

    if (!combate && emCombateAnterior) {
        enemyTarget = null;
        resetarContador();
    }

    emCombateAnterior = combate;
}, 200);


function atacarTarget(){
    if(enemyTarget != null){
        let player = getObjectPlayer(); 
        let dano = player.getAtaque();
            
        enemyTarget.sofrerDano(dano);
        mostrarInimigoAlvo(enemyTarget);

        if(enemyTarget.getVida() <= 0){
            enemyTarget = null;

            resetarContador();
        } else {
            iniciarContador(enemyTarget.getTime(), enemyTarget.getDano());
        }
    }    
}

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
