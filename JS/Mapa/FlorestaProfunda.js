const SALA = getPlace("florestaProfunda");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("floresta", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const troncoUm = new DirectLink("tronco", "reinoFlora.html", [3, 1], 2);
const desTronco = new Description(troncoUm.getElemento(), "Reino Flora");
troncoUm.getElemento().style.transform = "scaleX(-1)";

const troncoDois = new IndirectLink("tronco", [1, 2], 2, "colinaDancante", false);
const desTroncoDois = new Description(troncoDois.getElemento(), "Colina Dançante");
troncoDois.getElemento().style.transform = "scaleX(-1)";

const troncoTres = new IndirectLink("tronco", [1, 4], 2, "pantano", false);
const desTroncoTres = new Description(troncoTres.getElemento(), "Pântano");

const troncoQuatro = new IndirectLink("tronco",  [5, 2], 2, "florestaMorta", false);
const desTroncoQuatro = new Description(troncoQuatro.getElemento(), "Floresta Morta");
troncoQuatro.getElemento().style.transform = "scaleX(-1)";

let player_data = getSession();
if(player_data.fragmentosHexopoda == 0){
    const portaChefe = new IndirectLink("door-locked", [3, 5], 2, "bossWoody", 2);
    const desPortaChefe = new Description(portaChefe.getElemento(), "Boss");
}
else{
    const placa = new DirectLink("placa", "florestaProfundaDois.html", [3, 5], 2);
    placa.getElemento().style.transform = "scaleX(-1)";
    const desPlaca = new Description(placa.getElemento(), "Avançar");
}

let chancePortal = randomBool();

if(chancePortal){
    const portal = new DirectLink("portal", "florestaGuardião.html", [5, 4], 2);
    const desPortal = new Description(portal.getElemento(), "???");
}

iniciarParticulas("rgba(111, 255, 68, 0.67)");

