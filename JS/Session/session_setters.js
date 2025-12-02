function setSessionItem(caminho, valor) {
    const SAVE = getSession();
    const partes = caminho.split('.');
    const ultimaChave = partes.pop();

    let ref = SAVE;

    for (const chave of partes) {
        
        if (!ref.hasOwnProperty(chave) || typeof ref[chave] !== 'object') {
            ref[chave] = {};
        }
        ref = ref[chave];
    }

    ref[ultimaChave] = valor;

    saveSession(SAVE);
}

function setSessionVida(valor){
    setSessionItem("vida", valor);
}

function setSessionAtaque(valor){
    setSessionItem("ataque", valor);
}

function setSessionDefesa(valor){
    setSessionItem("defesa", valor);
}

function setSessionCapitulo(valor){
    setSessionItem("capituloAtual", valor);
}

function setSessionUltimaSala(valor){
    setSessionItem("ultimaSala", valor);
}

function setSessionNome(valor){
    setSessionItem("nome", valor);
}
