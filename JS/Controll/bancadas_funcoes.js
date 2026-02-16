function getPossibilidadeReceita(id, mult = false){
    const receita = getReceita(id);
    const ingredientes = receita.ingredientes
    const recursosJogador = getSessionRecursos();

    if(mult != false){
        for(let ingrediente in ingredientes){
            if(recursosJogador[ingrediente] == undefined || 
                recursosJogador[ingrediente] == null ||
                recursosJogador[ingrediente] < ingredientes[ingrediente] * mult
            ){
                return false;
            }
        }
    }
    else{
        for(let ingrediente in ingredientes){
            if(recursosJogador[ingrediente] == undefined || 
                recursosJogador[ingrediente] == null ||
                recursosJogador[ingrediente] < ingredientes[ingrediente]
            ){
                return false;
            }
        }
    }
    

    return true;
}

function construirReceita(id, mult = false){
    if(getPossibilidadeReceita(id, mult)){
        if(mult == false){
            mult = 1;
        }

        const receita = getReceita(id);
        const ingredientes = receita.ingredientes
        const recursosJogador = getSessionRecursos();
        const inventarioJogador = getSessionInventario();

        for(let ingrediente in ingredientes){
            recursosJogador[ingrediente] -= ingredientes[ingrediente] * mult;
        }

        const produtoFinal = getItem(receita.resultado);

        if(produtoFinal.destino == "inventário"){
            inventarioJogador[receita.resultado] = (inventarioJogador[receita.resultado] || 0) + receita.quantItensResultado * mult;
        }
        else if(produtoFinal.destino == "recursos"){
            recursosJogador[receita.resultado] = (recursosJogador[receita.resultado] || 0) + receita.quantItensResultado * mult;
        }
        
        if(receita.concluiQuest){
            receita.quests.forEach(receitaId => {
                completarQuest(receitaId);
            });
        }

        setSessionInventario(inventarioJogador);
        setSessionRecursos(recursosJogador);

        if(receita.notificacaoEspecial == "equipar"){
            emitirNotificacao(1, `Você deve equipar ${produtoFinal.nome} no <b>Arsenal</b> no seu <b>Inventário</b>`);
        }
        else{
            emitirNotificacao(1, `x${receita.quantItensResultado * mult} de ${produtoFinal.nome}`);
        }
        changeReceita(id);
    }
}

function apostarRoleta(id){
    if(getSessionItem("recursos.ficha") > 0){
        const aposta = getApostaRoleta(id);
        let quantidadeFichas = getSessionItem("recursos.ficha") - 1;
        setSessionItem("recursos.ficha", quantidadeFichas);

        let resultado = sorteioComProbabilidade(aposta.probabilidades);
        
        if(resultado == "perca"){
            loadResultRoleta(resultado, id);
        }
        else if(resultado == "ganho"){
            let quantidadeFichas = getSessionItem("recursos.ficha") + aposta.recompensa.ficha;
            setSessionItem("recursos.ficha", quantidadeFichas);
            loadResultRoleta(resultado, id);
        }
    }
    else{
        emitirNotificacao(0, "Você não possui fichas para Apostar");
    }
}