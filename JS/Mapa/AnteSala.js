const SALA = getPlace("antesala");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUm = new DirectLink("door", "camaraCentral.html", [1, 3], 2);
const portaDois = new IndirectLink("door-locked", [5, 3], 2, "cidadeOwn", 1);

const desPortaUm = new Description(portaUm.getElemento(), "Câmara Central");
const desPortaDois = new Description(portaDois.getElemento(), "Sair Do Palácio");

const posGuarda = [[4, 2], [4, 4], [2, 2], [2, 4]];
let thisPosGuarda = randomInt(0, 3);
const guarda = new NPC("guarda", posGuarda[thisPosGuarda], 2);

const fonteDesejos = new FixedEntity([3, 3], 2);
setSprite(fonteDesejos.getElemento(), "entidade", "fontedesejos");
const desFonteDesejos = new Description(fonteDesejos.getElemento(), "Fonte dos Desejos");

const posPilares = [[1, 2], [1, 4], [5, 2], [5, 4]]
for(let i =0; i<4; i++){
    let novoPilar = new FixedEntity([posPilares[i][0], posPilares[i][1]], 2);
    setSprite(novoPilar.getElemento(), "entidade", "pilar");
}