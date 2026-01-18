const SALA = getPlace("antesala");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUmEl = document.createElement("img");
const portaDoisEl = document.createElement("img");
const guardaEl = document.createElement("img");

const portaUm = new DirectLink("door", portaUmEl, "camaraCentral.html", [1, 3], 2);
const portaDois = new IndirectLink("door", portaDoisEl, [5, 3], 2, "cidadeOwn", 1);

const desPortaUm = new Description(portaUmEl, "Câmara Central");
const desPortaDois = new Description(portaDoisEl, "Sair Do Palácio");

const posGuarda = [[4, 2], [4, 4], [2, 2], [2, 4]];
let thisPosGuarda = randomInt(0, 3);
const guarda = new NPC("guarda", guardaEl, posGuarda[thisPosGuarda], 2);

const fonteDesejosEl = document.createElement("img");
setSprite(fonteDesejosEl, "entidade", "fontedesejos");
const fonteDesejos = new FixedEntity(fonteDesejosEl, [3, 3], 2);
const desFonteDesejos = new Description(fonteDesejosEl, "Fonte dos Desejos");

const posPilares = [[1, 2], [1, 4], [5, 2], [5, 4]]
for(let i =0; i<4; i++){
    const novoPilarEL = document.createElement("img");
    setSprite(novoPilarEL, "entidade", "pilar");
    let novoPilar = new FixedEntity(novoPilarEL, [posPilares[i][0], posPilares[i][1]], 2);
}