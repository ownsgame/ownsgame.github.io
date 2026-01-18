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

function setSessionInventario(valor){
    setSessionItem("inventario", valor);
}

function setSessionRecursos(valor){
    setSessionItem("recursos", valor);
}

function changeIniciante(){
    setSessionItem("iniciante", false);
}

function setSessionUltimaSala(valor){
    setSessionItem("ultimaSala", valor);
}

function setArmaAtual(armaId){
    let arma = getItem(armaId);
    setSessionItem("armaAtual", armaId);
    setSessionItem("ataque", arma.dano);
    setSessionItem("tempoEspera", arma.espera);
}

function completarQuest(id){
    const QUEST = getQuest(id);
    let estado = getSessionItem(`arvoreConclusao.cap${QUEST.capitulo}.${QUEST.caminho}`);

    if(!estado){
        setSessionItem(`arvoreConclusao.cap${QUEST.capitulo}.${QUEST.caminho}`, true);
   
        let QUESTS_ATIVAS = getSessionItem("questsAtivas");

        QUESTS_ATIVAS = QUESTS_ATIVAS.filter(q => q !== QUEST.id);
        setSessionItem("questsAtivas", QUESTS_ATIVAS);
        plusPorcentagem(5);
        emitirNotificacao(3, QUEST.nome);
    }
}

function addQuest(id){
    const QUEST = getQuest(id);
    const QUESTS_ATIVAS = getSessionItem("questsAtivas");
    QUESTS_ATIVAS.push(QUEST.id);
    setSessionItem("questsAtivas", QUESTS_ATIVAS);
}

function plusPorcentagem(sum){
    let porcentagem = getSessionItem("porcentagem");
    porcentagem += sum;

    setSessionItem("porcentagem", porcentagem);
}

function playerTreinar(){
    let levelTreino = getSessionItem("levelTreino");
    if(levelTreino <= 10){
        const treino = getTreino(levelTreino);
        let moedas = getMoedas();

        console.log(moedas);
        console.log(treino.custo);
        if(moedas >= treino.custo){
            const PLAYER_DATA = getSession();
            PLAYER_DATA.recursos.moeda -= treino.custo;
            PLAYER_DATA.vidaSum += treino.vidaSum;
            PLAYER_DATA.ataqueSum += treino.ataqueSum;
            PLAYER_DATA.defesaSum += treino.defesaSum;
            PLAYER_DATA.levelTreino += 1;

            setSessionItem("recursos.moeda", PLAYER_DATA.recursos.moeda);
            setSessionItem("vidaSum", PLAYER_DATA.vidaSum);
            setSessionItem("ataqueSum", PLAYER_DATA.ataqueSum);
            setSessionItem("defesaSum", PLAYER_DATA.defesaSum);
            setSessionItem("levelTreino", PLAYER_DATA.levelTreino);
            loadTrainPerfil();
            emitirNotificacao(4, `Treinamento: ${PLAYER_DATA.levelTreino}`);
        }
        else{
            emitirNotificacao(0, "Você não possui moedas o suficiente pagar pelo treino");
            console.log(getMoedas());
        }
    }
}