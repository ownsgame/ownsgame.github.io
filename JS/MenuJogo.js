function abrirTelaMenuJogo(){
    const TELA = document.getElementById("menu-jogo");
    const NOME_FASE = getLevelName();

    let string = `
        <h2>${NOME_FASE}</h2>
        <p>Atenção:<i>"O jogo ainda está rodando no fundo!"</i></p>
    `;
    string += `
        <div class="botoes-alinhados">
            <button class="botao-ativo" onclick="showRewards()">Recompensas</button>
            <button class="botao-ativo">Inventário</button>
            <button class="botao-ativo">Abandonar Partida</button>
        </div>
    `;

    string += `<button class="botao-ativo" onclick="fecharTela('menu-jogo')">Fechar</button>`;
    TELA.innerHTML = string;
    TELA.style.display = "flex";
}

function showRewards(){
    const TELA = document.getElementById("menu-jogo");
    const NOME_FASE = getLevelName();

    let string = `
        <h2>${NOME_FASE}</h2>
        <p>Atenção:<i>"O jogo ainda está rodando no fundo!"</i></p>
    `;

    string += `${rewardsToHtml()}`;

    string += `<button class="botao-ativo" onclick="abrirTelaMenuJogo()">Voltar</button>`;
    TELA.innerHTML = string;
    TELA.style.display = "flex";
}
