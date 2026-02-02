const SALA = getPlace("salaoTemplos");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("hellas", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaFogo = new IndirectLink("portaFogo", [1, 3], 2, "temploFogo");
const portaAgua = new IndirectLink("portaAgua", [5, 3], 2, "temploAgua");
const portaVento = new IndirectLink("portaVento", [3, 5], 2, "temploVento");

const posTochas = [[1, 2], [1, 4], [5, 2], [5, 4], [3, 3]]
for(let i =0; i<5; i++){
    let novaTocha = new FixedEntity([posTochas[i][0], posTochas[i][1]], 2);
    setSprite(novaTocha.getElemento(), "entidade", "tocha");
}

const placa = new DirectLink("placa", "feiraHellana.html", [3, 1], 2);
const desPlaca = new Description(placa.getElemento(), "Voltar");
