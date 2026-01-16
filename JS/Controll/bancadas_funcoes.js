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
        
        setSessionInventario(inventarioJogador);
        setSessionRecursos(recursosJogador);
        console.log("Sucesso!");
        loadReceita(id);
    }
}