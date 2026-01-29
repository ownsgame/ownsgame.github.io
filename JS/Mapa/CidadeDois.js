const SALA = getPlace("cidadeDois");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("cidade", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const posPilares = [[1, 2], [5, 2]]
for(let i =0; i< 2; i++){
    let novoPilar = new FixedEntity([posPilares[i][0], posPilares[i][1]], 2);
    setSprite(novoPilar.getElemento(), "entidade", "pilar");
}

const viajante = new NPC("viajante", [3, 4], 2);
const placa = new DirectLink("placa", "cidade.html", [3, 1], 2);
const desPlaca = new Description(placa.getElemento(), "Voltar");
const sino = new WorkBench("sino", [3, 5]);

const marPos = [1, 2, 4, 5];

for(let i =0; i< 4; i++){
    let tile = getTileInPosition(marPos[i], 5);
    tile.src = "../Sprites/Tiles/mar.svg";
}

