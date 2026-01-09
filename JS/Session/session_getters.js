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
    return getSessionItem("ataque");
}

function getSessionDefesa(){
    return getSessionItem("defesa");
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
