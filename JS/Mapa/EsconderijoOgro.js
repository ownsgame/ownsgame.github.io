const SALA = getPlace("esconderijoOgro");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("hellas2", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const placa = new DirectLink("placa-norte", "feiraHellana.html", [1, 2], 2);
const desPlaca = new Description(placa.getElemento(), "Subir");

const picalo = new NPC("picalo", [2, 4], 2);
const hefesto = new NPC("hefesto", [4, 3], 2);

const cambio = new WorkBench("forjaHefesto", [3, 3]);