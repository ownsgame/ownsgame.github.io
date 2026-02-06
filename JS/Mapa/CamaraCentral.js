const SALA = getPlace("camaraCentral");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUm = new DirectLink("door", "laboratorio.html", [3, 1], 2);
const portaDois = new DirectLink("door", "anteSala.html", [5, 3], 2);
const bookshelf = new DirectLink("bookshelf", "biblioteca.html", [2, 5], 2);
const espelho = new IndirectLink("mirror", [3, 5], 2, "mirrorroom");
const sabioOWN = new NPC("sabioown", [3, 3], 2);

const desBookshelf = new Description(bookshelf.getElemento(), "Biblioteca Own");
const desPortaUm = new Description(portaUm.getElemento(), "Laboratório do Palácio");
const desPortaDois = new Description(portaDois.getElemento(), "Entrada do Palácio");
const desEspelho = new Description(espelho.getElemento(), "<i class='fa-solid fa-circle-play'></i>");

const posTochas = [[2, 3], [3, 2], [3, 4], [4, 3]]
for(let i =0; i<4; i++){
    let novaTocha = new FixedEntity([posTochas[i][0], posTochas[i][1]], 2);
    setSprite(novaTocha.getElemento(), "entidade", "tocha");
}


