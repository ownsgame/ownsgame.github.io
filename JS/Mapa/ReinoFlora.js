const SALA = getPlace("flora");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("colina", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const dex = new NPC("dex", [3, 3], 2);

const sino = new WorkBench("sino", [3, 1]);
sino.getElemento().style.transform = "scaleX(-1)";

const falsificador = new WorkBench("falsificador", [4, 3]);

const tronco = new DirectLink("tronco", "florestaProfunda.html", [3, 5], 2);
const desTronco = new Description(tronco.getElemento(), "Floresta Profunda");