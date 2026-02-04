const SALA = getPlace("cassino");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("cassino", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUm = new DirectLink("door", "cidade.html", [1, 4], 2);
const desPortaUm = new Description(portaUm.getElemento(), "Sair");

const trocaFichas = new WorkBench("trocaFichas", [2, 5]);
const roletaP = new WorkBench("roleta", [4, 3]);

