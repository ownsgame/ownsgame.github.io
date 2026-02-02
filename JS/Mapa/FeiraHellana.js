const SALA = getPlace("feiraHellas");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("hellas", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const placa = new DirectLink("placa", "salaoDosTemplos.html", [3, 5], 2);
const desPlaca = new Description(placa.getElemento(), "Avançar");
placa.getElemento().style.transform = "scaleX(-1)";

const placaDois = new DirectLink("placa", "reinoHellas.html", [3, 1], 2);
const desPlacaDois = new Description(placaDois.getElemento(), "Voltar");

const meliadas = new NPC("meliadas", [1, 3], 2);

if(randomBool()){
    const picalo = new NPC("picalo", [5, 3], 2);
}
