const SALA = getPlace("cidadeOwn");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("cidade", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUmEl = document.createElement("img");

const portaUm = new DirectLink("door", portaUmEl, "anteSala.html", [1, 3], 2);
const desPortaUm = new Description(portaUmEl, "Entrar no Palácio");


