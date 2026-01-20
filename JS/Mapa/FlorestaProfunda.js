const SALA = getPlace("florestaProfunda");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("floresta", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const troncoUmEl = document.createElement("img");
const troncoUm = new DirectLink("tronco", troncoUmEl, "reinoFlora.html", [3, 1], 2);
const desTronco = new Description(troncoUmEl, "Reino Flora");
troncoUmEl.style.transform = "scaleX(-1)";


const troncoDoisEl = document.createElement("img");
const troncoDois = new IndirectLink("tronco", troncoDoisEl, [1, 2], 2, "colinaDancante", false);
const desTroncoDois = new Description(troncoDoisEl, "Colina Dançante");

const troncoTresEl = document.createElement("img");
const troncoTres = new IndirectLink("tronco", troncoTresEl, [1, 4], 2, "pantano", false);
const desTroncoTres = new Description(troncoTresEl, "Pântano");

const troncoQuatroEl = document.createElement("img");
const troncoQuatro = new IndirectLink("tronco", troncoQuatroEl, [5, 3], 2, "florestaMorta", false);
const desTroncoQuatro = new Description(troncoQuatroEl, "Floresta Morta");

const portaChefeEl = document.createElement("img");
const portaChefe = new IndirectLink("door-locked", portaChefeEl, [3, 5], 2, "bossWoody", 2);