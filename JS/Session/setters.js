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

function addItensToInventory(itens){
    const RECURSOS = getSessionRecursos();
    const INVENTARIO = getSessionInventario();

    
    for(let id in itens){
        const RECOMPENSA = getItem(id);
        
        if(!RECOMPENSA.consumivel){
            if(RECOMPENSA.destino == "inventário"){
                INVENTARIO[id] = (INVENTARIO[id] || 0) + itens[id];
            }
            else if(RECOMPENSA.destino == "recursos"){
                RECURSOS[id] = (RECURSOS[id] || 0) + itens[id];
            }
        }
    }

    setSessionInventario(INVENTARIO);
    setSessionRecursos(RECURSOS);
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

function setEscudoAtual(escudoId){
    let escudo = getItem(escudoId);
    setSessionItem("escudoAtual", escudoId);
    setSessionItem("defesa", escudo.defesa);
}

function setCetroAtual(cetroId){
    let cetro = getItem(cetroId);
    setSessionItem("cetroAtual", cetroId);
}

function completarQuest(id){
    const QUEST = getQuest(id);
    let estado = getSessionItem(`arvoreConclusao.cap${QUEST.capitulo}.${QUEST.caminho}`);

    if(!estado){
        setSessionItem(`arvoreConclusao.cap${QUEST.capitulo}.${QUEST.caminho}`, true);
   
        let QUESTS_ATIVAS = getSessionItem("questsAtivas");
        let QUESTS_CONCLUIDAS = getSessionItem("questsConcluidas");

        QUESTS_CONCLUIDAS.push(QUEST.id);
        QUESTS_ATIVAS = QUESTS_ATIVAS.filter(q => q !== QUEST.id);
        setSessionItem("questsAtivas", QUESTS_ATIVAS);
        setSessionItem("questsConcluidas", QUESTS_CONCLUIDAS);
        plusPorcentagem(3);
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

function derrotarBOSS(id){
    const bossDerrotado = getBoss(id);
    const PLAYER_DATA = getSession();

    if(PLAYER_DATA.capituloCorrente == bossDerrotado.capitulo){
        let fragmentosHexopoda = PLAYER_DATA.fragmentosHexopoda + 1;
        let capituloCorrente = PLAYER_DATA.capituloCorrente + 1;
        setSessionItem("fragmentosHexopoda", fragmentosHexopoda);
        setSessionItem("capituloCorrente", capituloCorrente);
        
        let novasQuests = getQuestsDoCapitulo(capituloCorrente);

        if(novasQuests != null && novasQuests.length > 0){
            novasQuests.forEach(novaQuest => {
                addQuest(novaQuest.id)
            });
        }

        if(bossDerrotado.recompensas){
            addItensToInventory(bossDerrotado.recompensas);
        }

        plusPorcentagem(10);
        vitoriaDeJogo(bossDerrotado);
    }
    else{
        vitoriaDeJogo(false);
    }
}