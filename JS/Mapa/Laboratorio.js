desenharGrade(5, "ceramica", false);
const JOGADOR_EL = document.createElement("img");   
const DADOS = getDados();
let jogador = new Player(DADOS.vidaBase, JOGADOR_EL, "../../Sprites/Player/base.svg", DADOS.defesaBase);

function getObjectPlayer(){
    return jogador;
}

const incubator = document.createElement("div");

const portaEl = document.createElement("div");
const portaUm = new Porta(portaEl, "../../mapa.html");

posicionarGrid(portaEl, 5, 3);
fixarAoConteiner(portaEl);

incubator.classList.add("incubadora");
incubator.classList.add("tamPadrao");

posicionarGrid(incubator, 3, 3);
fixarAoConteiner(incubator);

const posTochas = [[2, 1], [2, 5], [4, 1], [4, 5]]
for(let i =0; i<4; i++){
    const novaTocha = document.createElement("div");
    novaTocha.classList.add("tocha");
    novaTocha.classList.add("tamPadrao");
    posicionarGrid(novaTocha, posTochas[i][0], posTochas[i][1]);
    fixarAoConteiner(novaTocha);
}


