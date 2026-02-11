const SALA = getPlace("casaMeliadas");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("hellas", false);

const FLAG_NOME_SALA = document.querySelector(".sala-name");
FLAG_NOME_SALA.innerHTML = `${SALA.nome}`;
salaApresentation(SALA.nome, SALA.capitulo);

const meliadas = new NPC("meliadas", [2, 3], 2);

const posVasos = [[3, 5], [3, 1], [4, 1], [4, 5], [5, 1], [5, 2], [5, 3], [5, 5]]

for(let i =0; i< posVasos.length; i++){
    let novaTocha = new FixedEntity([posVasos[i][0], posVasos[i][1]], 2);
    setSprite(novaTocha.getElemento(), "entidade", "grama");
}

const bueiro = new DirectLink("bueiro", "feiraHellana.html", [1, 5], 2);