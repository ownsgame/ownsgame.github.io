const SALA = getPlace("camaraCentral");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;

const sabioEl = document.createElement("img");
const bookshelfEl = document.createElement("img");
const portaEl = document.createElement("img");
const portaDoisEl = document.createElement("img");
const espelhoEl = document.createElement("img");

const portaUm = new DirectLink("door", portaEl, "laboratorio.html", [3, 1], 2);
const portaDois = new DirectLink("door", portaDoisEl, "anteSala.html", [5, 3], 2);
const bookshelf = new DirectLink("bookshelf", bookshelfEl, "biblioteca.html", [2, 5], 2);
const espelho = new IndirectLink("mirror", espelhoEl, [3, 5], 2, "mirrorroom");
const sabioOWN = new NPC("sabioown", sabioEl, [3, 3], 2);

const posTochas = [[2, 3], [3, 2], [3, 4], [4, 3]]
for(let i =0; i<4; i++){
    const novaTochaEL = document.createElement("img");
    setSprite(novaTochaEL, "entidade", "tocha");
    let novaTocha = new FixedEntity(novaTochaEL, [posTochas[i][0], posTochas[i][1]], 2);
}


