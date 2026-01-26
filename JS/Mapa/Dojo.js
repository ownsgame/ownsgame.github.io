const SALA = getPlace("dojo");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("dojo", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUm = new DirectLink("door", "cidade.html", [1, 3], 2);
const desPortaUm = new Description(portaUm.getElemento(), "Sair");
const mestre = new NPC("mestreWei", [3, 3], 2);
const bancadaTreino = new WorkBench("bancadaTreino", [3, 5]);
