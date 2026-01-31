function cardItem(sprite, quantidade){
    return `
        <div class="cardReward">
            <img src="${sprite}"> 
            <p class="fonte-comum">x${quantidade}</p>
        </div>
    `;
}

function abrirTelaMenuJogo(){
    const TELA = document.getElementById("menu-jogo");
    const NOME_FASE = getLevelName();
    const MUSICA_FASE = getSound(getTemaFase());

    let string = `
        <h2>${NOME_FASE}</h2>
        <p>
            <i class="fa-solid fa-triangle-exclamation"></i> 
            Atenção:<i>"O jogo ainda está rodando no fundo!"</i>
        </p>
        <p>
            <i class="fa-solid fa-compact-disc"></i> Tocando:
            <i>"${MUSICA_FASE.nome}"</i> de <b>${MUSICA_FASE.origem}</b>
        </p>
    `;
    string += `
        <div class="botoes-alinhados">
            <button class="botao-ativo" onclick="showRewards()">Coletados</button>
            <button class="botao-ativo red-button" onclick="redirecionarUltimaSala()">Desistir</button>
        </div>
    `;

    string += `<button class="botao-ativo" onclick="fecharTela('menu-jogo')"><i class="fa-solid fa-x"></i></button>`;
    TELA.innerHTML = string;
    abrirTela("menu-jogo");
}

function rewardsToHtml(){
    let string = `<h3>Coletados:</h3>`;
    let quantidadeTipos = Object.keys(rewards).length;

    if(quantidadeTipos === 0){
        string += `<h3 class="fonte-comum">Você não coletou nenhuma recompensa ainda</h3>`;
    } else {
        
        string += `<div class="dequeRewards">`;
        for (let tipo in rewards) {

            const RECOMPENSA = getItem(tipo);
            string += itemFrame(tipo, rewards[tipo], false);
        }
        string += `</div>`;
    }
    return string;    
}

function rewardsSelectToHtml(){
    let string = ``;
    let quantidadeTipos = Object.keys(rewards).length;

    if(quantidadeTipos === 0){
        string += `<p class="fonte-comum">Você não coletou nenhuma recompensa! Sério que você entrou na fase realmente para isso?</p>`;
    } 
    else 
    {
        string += 
        `
            <section class="deque-section">
                <div class="dequeRewards">
        `;

        for (let tipo in rewards) {
            const RECOMPENSA = getItem(tipo);

            if(!RECOMPENSA.consumivel && RECOMPENSA.destino == "recursos"){
                string += itemFrame(tipo, rewards[tipo], false);
            }            
        }

        for (let tipo in rewards) {
            const RECOMPENSA = getItem(tipo);

            if(!RECOMPENSA.consumivel && RECOMPENSA.destino == "inventário"){
                string += itemFrame(tipo, rewards[tipo], false);
            }            
        }
        string += `
                </div>
            </section>
        `;  
    }

    return string;    
}

function showRewards(){
    const TELA = document.getElementById("menu-jogo");
    const NOME_FASE = getLevelName();

    let string = `
        <h2>${NOME_FASE}</h2>
        <p class="fonte-comum alerta">
            <i class="fa-solid fa-triangle-exclamation"></i> 
            Atenção:<i>"O jogo ainda está rodando no fundo!"</i>
        </p>
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
        <h2>${NOME_FASE}</h2>
    `;
    string += 
    `
        <h3 class="fonte-comum">Recompensas Obtidas:</h3>
        <div class="deque-section-conteiner">
            ${rewardsSelectToHtml()}
        </div>
    `;

    string += `<button class="botao-ativo" onclick='redirecionarUltimaSala()'>Sair</button>`;
    TELA.innerHTML = string;
    abrirTela("menu-jogo");
}
