const SALA = getPlace("cassino");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("cassino", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUm = new DirectLink("door", "cidade.html", [1, 4], 2);
const desPortaUm = new Description(portaUm.getElemento(), "Sair");

const trocaFichas = new WorkBench("trocaFichas", [2, 5]);
const roletaP = new WorkBench("roleta", [3, 3]);

const posVasos = [[3, 5], [3, 1], [4, 1]]
for(let i =0; i<3; i++){
    let novaTocha = new FixedEntity([posVasos[i][0], posVasos[i][1]], 2);
    setSprite(novaTocha.getElemento(), "entidade", "grama");
}


if(randomBool()){
    const darby = new NPC("darby", [5, 4], 2);
}

const emBreve1 = new FixedEntity([5, 3], 2);
setSprite(emBreve1.getElemento(), "work", "emBreve");
const desEmBreve = new Description(emBreve1.getElemento(), "O Jogo de D'Arby");