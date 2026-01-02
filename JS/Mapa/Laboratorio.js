const SALA = getPlace("laboratorio");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;

const posTochas = [[2, 1], [4, 1], [2, 5], [4, 5]]
for(let i =0; i<4; i++){
    const novaTochaEL = document.createElement("img");
    setSprite(novaTochaEL, "entidade", "tocha");
    let novaTocha = new FixedEntity(novaTochaEL, [posTochas[i][0], posTochas[i][1]], 2);
}

const portaEl = document.createElement("img");
const portaUm = new DirectLink("door", portaEl, "camaraCentral.html", [3, 5], 2);

const maquinaCientificaEL = document.createElement("img");
setSprite(maquinaCientificaEL, "entidade", "maquinaCientifica");
let novaMaquina = new FixedEntity(maquinaCientificaEL, [3,3], 2);

const globoEL = document.createElement("img");
setSprite(globoEL, "entidade", "globo");
let novoGlobo = new FixedEntity(globoEL, [5,4], 2);

const reportEL = document.createElement("img");
setSprite(reportEL, "entidade", "mesaRelatorio");
let reportTable = new FixedEntity(reportEL, [5,2], 2);
