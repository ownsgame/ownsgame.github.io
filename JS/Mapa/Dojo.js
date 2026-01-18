const SALA = getPlace("dojo");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("dojo", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUmEl = document.createElement("img");
const portaUm = new DirectLink("door", portaUmEl, "cidade.html", [1, 3], 2);
const desPortaUm = new Description(portaUmEl, "Sair");

const mestreEL = document.createElement("img");
const mestre = new NPC("mestreWei", mestreEL, [3, 3], 2);

const bancadaTreino = new WorkBench("bancadaTreino", [3, 5]);
