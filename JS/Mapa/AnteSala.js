const SALA = getPlace("antesala");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUmEl = document.createElement("img");
const portaDoisEl = document.createElement("img");
const guardaEl = document.createElement("img");

const portaUm = new DirectLink("door", portaUmEl, "camaraCentral.html", [1, 3], 2);
const portaDois = new DirectLink("door", portaDoisEl, "colinaDancante.html", [5, 3], 2);

const desPortaUm = new Description(portaUmEl, "Câmara Central");

const posGuarda = [[5, 2], [5, 4], [2, 2], [2, 4]];
let thisPosGuarda = randomInt(0, 3);
const guarda = new NPC("guarda", guardaEl, posGuarda[thisPosGuarda], 2);

