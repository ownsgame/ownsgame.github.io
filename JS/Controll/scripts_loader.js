const JS_DATA_FILES = [
    "../DATA/bosses.js",
    "../DATA/consumiveis.js",
    "../DATA/entidades.js",
    "../DATA/espadas.js",
    "../DATA/falasComuns.js",
    "../DATA/falasEspeciais.js",
    "../DATA/inimigos.js",
    "../DATA/itens(filtro).js",
    "../DATA/npcs.js",
    "../DATA/places.js",
    "../DATA/quests.js",
    "../DATA/receitas.js",
    "../DATA/sounds.js",
    "../DATA/tiles.js",
    "../DATA/treino.js",
    "../DATA/voadores.js",
    "../DATA/workbenchs.js",
    "../DATA/works.js",
];

const SESSION_FILES = [
    "Session/save.js",
    "Session/session.js",
    "Session/getters.js",
    "Session/setters.js",
];

const COMUM_SALA_FILES = [
    "View/menu.js",
    "Controll/colision.js",
    "View/itens.js",
    "Controll/bancadas_funcoes.js",
    "View/bancadasTrabalho.js",
    "Classes/Description.js",
    "Classes/WorkBench.js",
    "Classes/FixedEntity.js",
    "Classes/HiperLinks.js",
    "Classes/Player.js",
    "Controll/inserir_player.js",
    "Classes/CaixaDialogo.js",
    "Classes/Npc.js",
];

const COMUM_DUNGEON_FILES = [
    "Controll/audio.js",
    "View/notificacoesFase.js",
    "Controll/recompensas.js",
    "Controll/game_over.js",
    "Controll/colision.js",
    "Classes/FixedEntity.js",
    "Classes/AnimatedEntity.js",
    "Classes/Chest.js",
    "View/status.js",
    "Classes/Player.js",
    "Controll/inserir_player.js",
    "Classes/Enemy.js",
    "Controll/combate.js",
    "Classes/FlyingEntity.js",
    "Controll/power_up.js",
    "View/menu_fase.js",
];

const COMUM_BOSS_FILES = [
  "Controll/colision.js",
  "Classes/FixedEntity.js",
  "View/status_boss.js",
  "Classes/Player.js",
  "Controll/inserir_player.js",
  "Controll/sala.js",
  "Classes/Boss.js",
  "Classes/AnimatedEntity.js",
  "Classes/FlyingEntity.js",
  "Controll/game_over.js"
]

function carregarScript(src) {
    return new Promise(resolve => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
    });
}


function carregarJavaScript(link) {
    const src = `../JS/${link}`;
    return carregarScript(src);
}

function carregarConjuntoArquivos(vetor, js = false) {
    let cadeia = Promise.resolve();

    vetor.forEach(file => {
        cadeia = cadeia.then(() => {
            return js
                ? carregarJavaScript(file)
                : carregarScript(file);
        });
    });

    return cadeia;
}

carregarConjuntoArquivos(SESSION_FILES, true)
    .then(() => carregarJavaScript("Controll/utils.js"))
    .then(() => carregarJavaScript("View/visualEffects.js"))
    .then(() => carregarJavaScript("Controll/sala.js"))
    .then(() => {
        if (THIS_ARQUIVO.tipo == "index") {
            return carregarConjuntoArquivos([
                "Session/setup.js",
                "View/index.js",
                "Controll/index.js"
            ], true);
        }

        return carregarJavaScript("Controll/sprites.js")
            .then(() => carregarConjuntoArquivos(JS_DATA_FILES))
            .then(() => carregarJavaScript("View/itens.js"))
            .then(() => carregarJavaScript("Controll/grid.js"))
            .then(() => carregarJavaScript("Controll/mapa_pres.js"))
            .then(() => {
                if (THIS_ARQUIVO.tipo == "sala-comum") {
                    return carregarConjuntoArquivos(COMUM_SALA_FILES, true);
                }
                if (THIS_ARQUIVO.tipo == "dungeon") {
                    return carregarConjuntoArquivos(COMUM_DUNGEON_FILES, true);
                }
                if(THIS_ARQUIVO.tipo == "boss"){
                    return carregarConjuntoArquivos(COMUM_BOSS_FILES, true);
                }
            })
            .then(() => {
                if (THIS_ARQUIVO.arquivos) {
                    return carregarConjuntoArquivos(THIS_ARQUIVO.arquivos, true);
                }
            })
            .then(() => carregarJavaScript("View/mover_jogador.js"));
    });
