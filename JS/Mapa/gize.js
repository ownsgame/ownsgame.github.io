const SALA = getPlace("gize");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("areia", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const placa = new DirectLink("placa-norte", "reinoHellas.html", [1, 3], 2);
const desPlaca = new Description(placa.getElemento(), "Subir");

const esfingeDePedra = new WorkBench("esfingeDePedra", [3, 3]);
const esfinge = new NPC("esfinge", [4, 3], 2);
