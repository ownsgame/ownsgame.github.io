const SALA_COMUM_TAGS = 
`
    <img class="menu pointer" src="../Sprites/IU/home_icon.svg" onclick="abrirOpcoes()">
    <div id="menu_options" class="options tela-padrao"></div>

    <div id="conteiner"></div>

    <div id="caixa-dialogo">
        <div class="caixa-dialogo-data"></div>
        <div class="row-buttons">
            <button id="proximaFala">
                <i class="fa-solid fa-comment-dots"></i>
            </button>
            <button id="fecharCaixaDialogo">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    </div>

    <div id="notificacoes"></div>
    <div id="show-place" class="show-place tela-padrao"></div>
    <div class="blur-box"></div>
    <div class="description"></div>
    <div id="room-apresentation" class="room-apresentation"></div>
    <div id="workbench_screen" class="workbench_screen tela-padrao"></div>
`;

const DUNGEON_TAGS = 
`
    <div id="conteiner"></div>
    <div id="status"></div>
    <div class="menuJogo tela-padrao" id="menu-jogo"></div>
    
    <div class="red-effect" id="camada-de-efeito"></div>
    <div id="notificaoes-level" class="notificaoes-level"></div>
    <div id="notificacoes"></div>
    <div class="blur-box"></div>
    <div id="damage-count"></div>
    <div id="game-over" class="game-over tela-padrao"></div>
`;


if (THIS_ARQUIVO.tipo == "sala-comum") {
    document.body.insertAdjacentHTML("afterbegin", SALA_COMUM_TAGS);
}
if (THIS_ARQUIVO.tipo == "dungeon") {
    document.body.insertAdjacentHTML("afterbegin", DUNGEON_TAGS);
}
