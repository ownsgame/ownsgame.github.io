const TELA_BANCADAS = document.querySelector(".workbench_screen");

function changeWorkBenchScreen(titulo, string){
    TELA_BANCADAS.innerHTML =
    `
        <h1 class="fonte-futuretimes">${titulo}</h1>
        ${string}
        <button onclick='fecharTela("workbench_screen")'>Fechar</button>
    `;

    abrirTela("workbench_screen");
}

function loadReceita(receitaId){
    const receita = getReceita(receitaId);
    const resultado = getItem(receita.resultado);
    const ingredientes = receita.ingredientes;

    let string = `
        <h2 class="fonte-comum">Ingreditentes:</h2>
        <div class="itens-conteiner">
    `;

    for (let chave in ingredientes) {
        string += itemFrame(chave, ingredientes[chave], false);
    }

    string += 
    `
        </div>
        <h2 class="fonte-comum">Resultado:</h2>
        <div class="itens-conteiner">
            ${itemFrame(receita.resultado, receita.quantItensResultado, false)}
        </div>
    `;

    if(getPossibilidadeReceita(receitaId)){
        string +=   
        `<button onclick="construirReceita(${receitaId})">
                <i class="fa-solid fa-hammer"></i> Construir
        </button>`;
    }
    else{
        string += ` <p class='fonte-comum'> 
                        <i class='fa-solid fa-triangle-exclamation'></i>
                        Faltam Recursos para a Construção
                    </p>
                    <button class="botao-ativo blue-button" onclick="window.location = 'inventario.html'">
                        <i class="fa-solid fa-toolbox"></i> Inventário
                    </button>
                    `
    }
    return string;
}

function loadBancadaContrucao(nome, receitas){
    let string = 
    `
        <div class="construcao">
            <div class="criacoes-conteiner">
                <h2 class="fonte-comum">Criações:</h2>
                <div class="itens-conteiner">
    `;

    receitas.forEach(receitaId => {
        const receita = getReceita(receitaId);
        string += itemFrame(receita.resultado, false, `loadReceita(${receitaId})`);
    });


    string += `
                </div>
            </div>
            <div class="receitas-conteiner">
                ${loadReceita(receitas[0])}
            </div>
        </div>
    `;

    changeWorkBenchScreen(nome, string);
}