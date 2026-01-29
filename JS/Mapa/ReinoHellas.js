const SALA = getPlace("hellas");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("hellas", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const fonteDesejos = new FixedEntity([3, 3], 2);
setSprite(fonteDesejos.getElemento(), "entidade", "estatuaHelos");
const desFonteDesejos = new Description(fonteDesejos.getElemento(), "Estatua do Heroí Helos");

const defantes = new NPC("defantes", [4, 3], 2);

const sino = new WorkBench("sino", [3, 1]);
sino.getElemento().style.transform = "scaleX(-1)";

const placa = new DirectLink("placa", "", [3, 5], 2);
const desPlaca = new Description(placa.getElemento(), "Avançar");
placa.getElemento().style.transform = "scaleX(-1)";