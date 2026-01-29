const SALA = getPlace("florestaProfundaDois");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("floresta", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

let player_data = getSession();
if(player_data.fragmentosHexopoda == 0){
    const portaChefe = new IndirectLink("door-locked", [3, 5], 2, "bossWoody", 2);
    const desPortaChefe = new Description(portaChefe.getElemento(), "Boss");
}

const placa = new DirectLink("placa", "florestaProfunda.html", [3, 1], 2);
const desPlaca = new Description(placa.getElemento(), "Voltar");
const guardiao = new NPC("king", [3, 3], 2);


