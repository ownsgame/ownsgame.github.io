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

        if(enemyTarget.getVida() <= 0){
            enemyTarget = null;
            resetarContador();
        } else {
            iniciarContador(enemyTarget.getTime(), enemyTarget.getDano());
        }
    }    
}

function zerarInimigoAlvo(){
    enemyTarget = null;
}
