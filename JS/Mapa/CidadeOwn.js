const SALA = getPlace("cidadeOwn");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("cidade", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUmEl = document.createElement("img");
const portaDoisEl = document.createElement("img");

const portaUm = new DirectLink("door", portaUmEl, "anteSala.html", [1, 3], 2);
const desPortaUm = new Description(portaUmEl, "Entrar no Palácio");

const posPilares = [[1, 2], [1, 4]]
for(let i =0; i< 2; i++){
    const novoPilarEL = document.createElement("img");
    setSprite(novoPilarEL, "entidade", "pilar");
    let novoPilar = new FixedEntity(novoPilarEL, [posPilares[i][0], posPilares[i][1]], 2);
}

const dojoEl = document.createElement("img");
const dojo = new DirectLink("dojo", dojoEl, "dojo.html", [5, 2], 2);

const cassinoEl = document.createElement("img");
const cassino = new DirectLink("cassino", cassinoEl, "colinaDancante.html", [5, 4], 2);


const sino = new WorkBench("sino", [3, 5]);

const portaDois = new DirectLink("door", portaDoisEl, "colinaDancante.html", [3, 1], 2);

