function abrirTelaMenuJogo(){
    const TELA = document.getElementById("menu-jogo");
    const NOME_FASE = getLevelName();

    let string = `
        <h2 class="fonte-futuretimes">${NOME_FASE}</h2>
        <p class="fonte-comum">Atenção:<i>"O jogo ainda está rodando no fundo!"</i></p>
    `;
    string += `
        <div class="botoes-alinhados">
            <button class="botao-ativo" onclick="showRewards()">Recompensas</button>
            <button class="botao-ativo" onclick="redirecionarUltimaSala()">Abandonar Partida</button>
        </div>
    `;

    string += `<button class="botao-ativo" onclick="fecharTela('menu-jogo')"><i class="fa-solid fa-x"></i></button>`;
    TELA.innerHTML = string;
    abrirTela("menu-jogo");
}

function rewardsToHtml(){
    let string = `<h2 class="fonte-futuretimes">Itens Coletados:</h2>`;
    let quantidadeTipos = Object.keys(rewards).length;

    if(quantidadeTipos === 0){
        string += `<h3 class="fonte-comum">Você não coletou nenhuma recompensa ainda</h3>`;
    } else {
        
        string += `<div class="dequeRewards">`;
        for (let tipo in rewards) {

            const RECOMPENSA = getItem(tipo);
            string += 
            `
                <div class="cardReward">
                    <img src="${RECOMPENSA.sprite}"> 
                    <h3 class="fonte-comum">x${rewards[tipo]}</h3>
                </div>
            `;
        }
        string += `</div>`;
    }
    return string;    
}

function rewardsSelectToHtml(){
    let string = `<h2 class="fonte-futuretimes">Recompensas Obtidas:</h2>`;
    let quantidadeTipos = Object.keys(rewards).length;

    if(quantidadeTipos === 0){
        string += `<h3 class="fonte-comum">Você não coletou nenhuma recompensa! Sério que você entrou na fase realmente para isso?</h3>`;
    } 
    else 
    {
        
        string += 
        `
            <h3 class="fonte-comum">Recursos:</h3>
            <div class="dequeRewards">
        `;

        for (let tipo in rewards) {
            const RECOMPENSA = getItem(tipo);

            if(!RECOMPENSA.consumivel && RECOMPENSA.destino == "recursos"){
                string += 
                `
                    <div class="cardReward">
                        <img src="${RECOMPENSA.sprite}"> 
                        <h3 class="fonte-comum">x${rewards[tipo]}</h3>
                    </div>
                `;
            }            
        }
        string += `</div>`;

        string += 
        `
            <h3 class="fonte-comum">Equipamentos:</h3>
            <div class="dequeRewards">
        `;

        for (let tipo in rewards) {
            const RECOMPENSA = getItem(tipo);

            if(!RECOMPENSA.consumivel && RECOMPENSA.destino == "inventário"){
                string += 
                `
                    <div class="cardReward">
                        <img src="${RECOMPENSA.sprite}"> 
                        <h3 class="fonte-comum">x${rewards[tipo]}</h3>
                    </div>
                `;
            }            
        }
        string += `</div>`;
    }

    return string;    
}

function showRewards(){
    const TELA = document.getElementById("menu-jogo");
    const NOME_FASE = getLevelName();

    let string = `
        <h2 class="fonte-futuretimes">${NOME_FASE}</h2>
        <p class="fonte-comum">Atenção:<i>"O jogo ainda está rodando no fundo!"</i></p>
    `;

    string += `${rewardsToHtml()}`;

    string += `<button class="botao-ativo" onclick="abrirTelaMenuJogo()">Voltar</button>`;
    TELA.innerHTML = string;
    abrirTela("menu-jogo");
}

function showEndRewards(){
    const TELA = document.getElementById("menu-jogo");
    const NOME_FASE = getLevelName();

    let string = `
        <h2 class="fonte-futuretimes">${NOME_FASE}</h2>
    `;
    string += `${rewardsSelectToHtml()}`;

    string += `<button class="botao-ativo" onclick='redirecionarUltimaSala()'>Sair</button>`;
    TELA.innerHTML = string;
    abrirTela("menu-jogo");
}
