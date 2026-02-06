const SALA = getPlace("biblioteca");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const bookshelf = new DirectLink("bookshelf", "camaraCentral.html", [2, 1], 2);
const bestiario = new DirectLink("bestiario", "bestiario.html", [2, 5], 2);
const emBreve1 = new FixedEntity([4, 5], 2);
setSprite(emBreve1.getElemento(), "work", "emBreve");
const desEmBreve = new Description(emBreve1.getElemento(), "Mais conteúdos para esta área");

const sabioOWN = new NPC("brooks", [3, 4], 2);

bookshelf.getElemento().style.transform = "scaleX(-1)";

const desBookshelf = new Description(bookshelf.getElemento(), "Câmara Central");
const desBestiario = new Description(bestiario.getElemento(), "Bestiário");

const posTochas = [[1, 4], [5, 2], [5, 3], [1, 3]]
for(let i =0; i<4; i++){
    let novaTocha = new FixedEntity([posTochas[i][0], posTochas[i][1]], 2);
    setSprite(novaTocha.getElemento(), "entidade", "tocha");
}

const globo = new WorkBench("mapaMundi", [3, 5]);
