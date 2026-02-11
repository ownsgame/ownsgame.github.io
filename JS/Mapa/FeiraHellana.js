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

const placaSul = new DirectLink("placa-sul", "esconderijoOgro.html", [5, 2], 2);
const desPlacaSul = new Description(placaSul.getElemento(), "Descer");

if(randomBool()){
    const picalo = new NPC("picalo", [5, 3], 2);
}

const cambista = new NPC("cambista", [1, 2], 2);
const cambio = new WorkBench("cambio", [2, 2]);

const joalheiro = new NPC("joalheiro", [1, 4], 2);
const joalheria = new WorkBench("joalheria", [2, 4]);

const bueiro = new DirectLink("bueiro", "casaMeliadas.html", [1, 5], 2);
const desBueiro = new Description(bueiro.getElemento(), "???");
