const SALA = getPlace("florestaGuardiao");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("floresta", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portal = new DirectLink("portal", "florestaProfunda.html", [3, 5], 2);
const desPortal = new Description(portal.getElemento(), "Floresta Profunda");
const guardiao = new NPC("guardiao", [3, 3], 2);

const posPilares = [[1, 3], [3, 1], [5, 3]]
for(let i =0; i<3; i++){
    let novoPilar = new FixedEntity([posPilares[i][0], posPilares[i][1]], 2);
    setSprite(novoPilar.getElemento(), "entidade", "pilar-floresta");
}

const posTochas = [[2, 2], [4, 2], [2, 4], [4, 4]]
for(let i =0; i<4; i++){
    let novaTocha = new FixedEntity([posTochas[i][0], posTochas[i][1]], 2);
    setSprite(novaTocha.getElemento(), "entidade", "tocha");
}

iniciarParticulas("rgba(174, 255, 68, 0.67)");