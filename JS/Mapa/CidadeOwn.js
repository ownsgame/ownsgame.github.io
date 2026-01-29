const SALA = getPlace("cidadeOwn");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("cidade", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const portaUm = new DirectLink("door-locked", "anteSala.html", [1, 3], 2);
const desPortaUm = new Description(portaUm.getElemento(), "Entrar no Palácio");

const posPilares = [[1, 2], [1, 4]]
for(let i =0; i< 2; i++){
   
    let novoPilar = new FixedEntity([posPilares[i][0], posPilares[i][1]], 2);
    setSprite(novoPilar.getElemento(), "entidade", "pilar");
}

const dojo = new DirectLink("dojo", "dojo.html", [5, 2], 2);
const cassino = new DirectLink("cassino", "colinaDancante.html", [5, 4], 2);
const placa = new DirectLink("placa", "cidadeDois.html", [3, 5], 2);
const desPlaca = new Description(placa.getElemento(), "Avançar");
placa.getElemento().style.transform = "scaleX(-1)";

const portaDois = new DirectLink("door", "colinaDancante.html", [3, 1], 2);

