const SALA = getPlace("biblioteca");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const bookshelfEl = document.createElement("img");
bookshelfEl.style.transform = "scaleX(-1)";

const bestiarioEl = document.createElement("img");

const bookshelf = new DirectLink("bookshelf", bookshelfEl, "camaraCentral.html", [2, 1], 2);
const bestiario = new DirectLink("bestiario", bestiarioEl, "bestiario.html", [2, 5], 2);

const desBookshelf = new Description(bookshelfEl, "Câmara Central");
const desBestiario = new Description(bestiarioEl, "Bestiário");

const posTochas = [[2, 3], [4, 3], [5, 3], [1, 3]]
for(let i =0; i<4; i++){
    const novaTochaEL = document.createElement("img");
    setSprite(novaTochaEL, "entidade", "tocha");
    let novaTocha = new FixedEntity(novaTochaEL, [posTochas[i][0], posTochas[i][1]], 2);
}


