const SALA = getPlace("laboratorio");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const posTochas = [[2, 1], [4, 1], [2, 5], [4, 5]]
for(let i =0; i<4; i++){
    let novaTocha = new FixedEntity([posTochas[i][0], posTochas[i][1]], 2);
    setSprite(novaTocha.getElemento(), "entidade", "tocha");
}

const portaUm = new DirectLink("door", "camaraCentral.html", [3, 5], 2);
const desPorta = new Description(portaUm.getElemento(), "Câmara Central");

const maquinaCientifica = new FixedEntity([3,3], 2);
setSprite(maquinaCientifica.getElemento(), "entidade", "maquinaCientifica");

const globo = new FixedEntity([5,4], 2);
setSprite(globo.getElemento(), "entidade", "globo");
const desGlobo = new Description(globo.getElemento(), "Mapa");

const reportTable = new FixedEntity([5,2], 2);
setSprite(reportTable.getElemento(), "entidade", "mesaRelatorio");
const desReport = new Description(reportTable.getElemento(), "Relatório de Projeto");

const forjaFantasma = new WorkBench("forjaFantasma", [5, 3]);
