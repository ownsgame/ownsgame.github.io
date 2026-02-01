function getPossibilidadeReceita(id){
    const receita = getReceita(id);
    const ingredientes = receita.ingredientes
    const recursosJogador = getSessionRecursos();

    for(let ingrediente in ingredientes){
        if(recursosJogador[ingrediente] == undefined || 
            recursosJogador[ingrediente] == null ||
            recursosJogador[ingrediente] < ingredientes[ingrediente]
        ){
            return false;
        }
    }

    return true;
}

function construirReceita(id){
    if(getPossibilidadeReceita(id)){
        const receita = getReceita(id);
        const ingredientes = receita.ingredientes
        const recursosJogador = getSessionRecursos();
        const inventarioJogador = getSessionInventario();

        for(let ingrediente in ingredientes){
            recursosJogador[ingrediente] -= ingredientes[ingrediente];
        }

        const produtoFinal = getItem(receita.resultado);

        if(produtoFinal.destino == "inventário"){
            inventarioJogador[receita.resultado] = (inventarioJogador[receita.resultado] || 0) + receita.quantItensResultado;
        }
        else if(produtoFinal.destino == "recursos"){
            recursosJogador[receita.resultado] = (recursosJogador[receita.resultado] || 0) + receita.quantItensResultado;
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
            emitirNotificacao(1, `x${receita.quantItensResultado} de ${produtoFinal.nome}`);
        }
        changeReceita(id);
    }
}