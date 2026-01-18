function getSessionItem(caminho) {
    const SAVE = getSession();
    return caminho.split('.').reduce((acumulado, chave) => {
        if (acumulado && acumulado.hasOwnProperty(chave)) {
            return acumulado[chave];
        }
        return undefined;
    }, SAVE);
}

function getSessionVida(){
    let vida = getSessionItem("vida");
    let vidaMult = getSessionItem("vidaMult");
    let vidaSum = getSessionItem("vidaSum");

    return (vida + vidaSum) * vidaMult;
}

function getSessionAtaque(){
    let ataque = getSessionItem("ataque");
    let ataqueMult = getSessionItem("ataqueMult");
    let ataqueSum = getSessionItem("ataqueSum");

    return (ataque + ataqueSum) * ataqueMult;
}

function getSessionDefesa(){
    let defesa = getSessionItem("defesa");
    let defesaMult = getSessionItem("defesaMult");
    let defesaSum = getSessionItem("defesaSum");

    return (defesa + defesaSum) * defesaMult;
}

function getSessionCapitulo(){
    return getSessionItem("capituloAtual");
}

function getSessionUltimaSala(){
    return getSessionItem("ultimaSala");
}

function getSessionNome(){
    return getSessionItem("nome");
}

function getSessionInventario(){
    return getSessionItem("inventario");
}

function getSessionRecursos(){
    return getSessionItem("recursos");
}

function getSessionUltimaSala(){
    return getSessionItem("ultimaSala");
}

function getTempoEspera(){
    return getSessionItem("tempoEspera");
}

function getMoedas(){
    return getSessionItem("recursos.moeda");
}

function getIsCompleteQuest(id){
    const QUEST = getQuest(id);
    return getSessionItem(`arvoreConclusao.cap${QUEST.capitulo}.${QUEST.caminho}`);
}
