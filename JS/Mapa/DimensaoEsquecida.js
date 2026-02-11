const SALA = getPlace("dimensaoEsquecida");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("florestaAzul", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portal = new DirectLink("portalAzul", "florestaGuardião.html", [3, 3], 2);
const desPortal = new Description(portal.getElemento(), "Floresta do Guardião");

iniciarParticulas("rgba(215, 55, 255, 0.67)");