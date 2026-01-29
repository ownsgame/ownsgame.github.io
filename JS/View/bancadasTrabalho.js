const TELA_BANCADAS = document.querySelector(".workbench_screen");

function changeWorkBenchScreen(titulo, string){
    TELA_BANCADAS.innerHTML =
    `
        <h1>${titulo}</h1>
        <div class="row-telas">
            ${string}
        </div>
        <button class="red-button" onclick='fecharTela("workbench_screen")'><i class="fa-solid fa-xmark"></i></button>
    `;

    abrirTela("workbench_screen");
}

function loadReceita(receitaId){
    const receita = getReceita(receitaId);
    const resultado = getItem(receita.resultado);
    const ingredientes = receita.ingredientes;

    let string = `
        <div class="column-telas receitas-conteiner">
            <h2 class="fonte-comum">Ingreditentes:</h2>
            <div class="itens-conteiner">
    `;

    for (let chave in ingredientes) {
        string += itemFrame(chave, ingredientes[chave], false);
    }

    string += 
    `
            </div>
        </div>

        <div class="column-telas resultado-conteiner">
            <h2 class="fonte-comum">Resultado:</h2>
            <p><b>x${receita.quantItensResultado}</b> ${resultado.nome}</p>
            <div class="itens-conteiner">
                ${itemFrame(receita.resultado, receita.quantItensResultado, false)}
            </div>
    `;

    if(getPossibilidadeReceita(receitaId)){
        string +=   
        `
            <button onclick="construirReceita(${receitaId})">
                    <i class="fa-solid fa-hammer"></i> Construir
            </button>
        </div>
        `;
    }
    else{
        string += ` 
            <p class='fonte-comum'> 
                <i class='fa-solid fa-triangle-exclamation'></i>
                Faltam Recursos para a Construção
            </p>
            <button class="botao-ativo blue-button" onclick="window.location = 'inventario.html'">
                <i class="fa-solid fa-toolbox"></i> Inventário
            </button>
        </div>
        `
    }
    return string;
}

function loadBancadaContrucao(nome, receitas){
    let string = 
    `
            <div class="column-telas">
                <h2 class="fonte-comum">Criações:</h2>
                <div class="itens-conteiner">
    `;

    receitas.forEach(receitaId => {
        const receita = getReceita(receitaId);
        string += itemFrame(receita.resultado, receita.quantItensResultado, `changeReceita(${receitaId})`);
    });


    string += `
                </div>
            </div>
            ${loadReceita(receitas[0])}
        </div>
    `;

    changeWorkBenchScreen(nome, string);
}

function changeReceita(receitaId){
    const receita = getReceita(receitaId);
    const resultado = getItem(receita.resultado);
    const ingredientes = receita.ingredientes;

    let string = `
        <div class="column-telas receitas-conteiner">
            <h2 class="fonte-comum">Ingreditentes:</h2>
            <div class="itens-conteiner">
    `;

    for (let chave in ingredientes) {
        string += itemFrame(chave, ingredientes[chave], false);
    }

    string += 
    `
            </div>
        </div>
    `;
    document.querySelector(".receitas-conteiner").innerHTML = string;

    string = 
    `
        <div class="column-telas resultado-conteiner">
            <h2 class="fonte-comum">Resultado:</h2>
            <p><b>x${receita.quantItensResultado}</b> ${resultado.nome}</p>
            <div class="itens-conteiner">
                ${itemFrame(receita.resultado, receita.quantItensResultado, false)}
            </div>
    `;

    if(getPossibilidadeReceita(receitaId)){
        string +=   
        `
            <button onclick="construirReceita(${receitaId})">
                    <i class="fa-solid fa-hammer"></i> Construir
            </button>
        </div>
        `;
    }
    else{
        string += ` 
            <p class='fonte-comum'> 
                <i class='fa-solid fa-triangle-exclamation'></i>
                Faltam Recursos para a Construção
            </p>
            <button class="botao-ativo blue-button" onclick="window.location = 'inventario.html'">
                <i class="fa-solid fa-toolbox"></i> Inventário
            </button>
        </div>
        `
    }
    
    document.querySelector(".resultado-conteiner").innerHTML = string;
}

function loadTrainPerfil(){
    const PLAYER_DATA  = getSession();
    const treino = getTreino(PLAYER_DATA.levelTreino);

    let string = 
    `
        <div class="row-telas">
            <div class="column-telas pad-1">
                <h2 class="fonte-comum">Força Atual:</h2>
                <div class="column-telas">
                    <div>
                        <h3> Vida: ${PLAYER_DATA.vida} 
                        <span class="tx-yellow">+${PLAYER_DATA.vidaSum}</span>
                        <span class="tx-pink">x${PLAYER_DATA.vidaMult}</span></h3>
                    </div>
                    <div>
                        <h3> Ataque: ${PLAYER_DATA.ataque} 
                        <span class="tx-yellow">+${PLAYER_DATA.ataqueSum}</span>
                        <span class="tx-pink">x${PLAYER_DATA.ataqueMult}</span></h3>
                    </div>
                    <div>
                        <h3> Defesa: ${PLAYER_DATA.defesa} 
                        <span class="tx-yellow">+${PLAYER_DATA.defesaSum}</span>
                        <span class="tx-pink">x${PLAYER_DATA.defesaMult}</span></h3>
                    </div>
                    <div>
                        <h3>
                            Base 
                            <span class="tx-yellow">+Bônus</span>
                            <span class="tx-pink"> xMultiplicador</span>
                        </h3>
                    </div>
                </div>
            </div>
    `
    if(treino != null){
        string += 
        `
            <div class="column-telas pad-1">
                <h2 class="fonte-comum">Treinar:</h2>
                <h3 class="fonte-comum">Melhorias do <b>Treinamento ${PLAYER_DATA.levelTreino + 1}</b>:</h3>
                <p>Vida: <span class="tx-yellow">+${treino.vidaSum} ao Bônus</span></p>
                <p class="fonte-comum">Ataque: <span class="tx-yellow">+${treino.ataqueSum} ao Bônus</span></p>
                <p class="fonte-comum">Defesa: <span class="tx-yellow">+${treino.defesaSum} ao Bônus</span></p>
                <p class="fonte-comum"><i class="fa-solid fa-coins"></i> Custo: ${treino.custo} moedas</p>
                <p class="fonte-comum ${treino.custo > PLAYER_DATA.recursos.moeda ? 'tx-yellow"' : '"'}"><i class="fa-solid fa-coins"></i> Você tem: ${PLAYER_DATA.recursos.moeda} moedas</p>
                <button onclick="playerTreinar()"><i class="fa-solid fa-dumbbell"></i> Treinar</button>
            </div>
        `;
    }
    else{
        string += "<h3 class='fonte-comum'><i class='fa-solid fa-dumbbell'></i> Você concluiu seu Treinamento!</h3>";
    }
    
    string +=
    `
        </div>
    `;

    changeWorkBenchScreen("Bancada de Treino", string);
}

function loadTeleport(){
    const PLAYER_DATA  = getSession();
    let string = 
    `
        <div class="column-telas">
            <h2 class="fonte-comum">Viajar para:</h2>
            <div class="column-buttons">
                ${PLAYER_DATA.ultimaSala != "cidadeDois.html" ? `<button onclick="redirecionarPara('cidadeDois.html')"><i class="fa-solid fa-bell"></i> Cidade Own</button>` : ""}
                ${PLAYER_DATA.ultimaSala != "reinoFlora.html" ? `<button onclick="redirecionarPara('reinoFlora.html')"><i class="fa-solid fa-bell"></i> Reino Flora</button>` : ""}
                ${PLAYER_DATA.capituloCorrente >= 2 && PLAYER_DATA.ultimaSala != "reinoHellas.html"?  
                    `<button onclick="redirecionarPara('reinoHellas.html')"><i class="fa-solid fa-bell"></i> Reino de Hellas</button>` : ""}
                ${PLAYER_DATA.capituloCorrente >= 3 ? '<button><i class="fa-solid fa-bell"></i> Reino Casmurro</button>' : ""}
                ${PLAYER_DATA.capituloCorrente >= 5 ? '<button><i class="fa-solid fa-bell"></i> Reino Brasa</button>' : ""}
                ${PLAYER_DATA.capituloCorrente >= 6 ? '<button><i class="fa-solid fa-bell"></i> Terras de Orakana</button>' : ""}
            </div>
            <p class='fonte-comum'> 
                <i class='fa-solid fa-triangle-exclamation'></i>
                Não é possivel viajar para Reinos de Capítulos futuros
            </p>
        </div>
        
    `;
    
    changeWorkBenchScreen("Solicitar Viagem", string);
}

function loadMapaMundi(){
    let string = `<img src="../Sprites/IU/mapa-mundi.svg">`;
    changeWorkBenchScreen("Mapa-Múndi", string);
}