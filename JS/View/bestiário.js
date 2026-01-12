let indiceBesta = 0;
let bestaAtual = INIMIGOS_LIST[indiceBesta];
const VIEW_EL = document.querySelector(".bestiario-dados");

function avancar(){
    indiceBesta = (indiceBesta + 1) % INIMIGOS_LIST.length;
    bestaAtual = INIMIGOS_LIST[indiceBesta];
    mostrarBesta();
}

function retroceder(){
    indiceBesta = (indiceBesta - 1 + INIMIGOS_LIST.length) % INIMIGOS_LIST.length;
    bestaAtual = INIMIGOS_LIST[indiceBesta];
    mostrarBesta();
}

function mostrarBesta(){
    VIEW_EL.innerHTML = 
    `
        <h1 class="fonte-comum">${bestaAtual.nome}</h1>
        <img src="${bestaAtual.hover}" class="animated-aparecer inventario-image">
        <div class="atributos-alinhados">
            <div class="atributo">
                <img src="Sprites/IU/heart_icon.svg" width="32px" height="32px">
                <h3> Vida: ${bestaAtual.minVida} | ${bestaAtual.maxVida}</h3>
            </div>
            <div class="atributo">
                <img src="Sprites/IU/attack_icon.svg" width="32px" height="32px">
                <h3> Ataque: ${bestaAtual.minAtaque} | ${bestaAtual.maxAtaque}</h3>
            </div>
            <div class="atributo">
                <img src="Sprites/IU/shield_icon.svg" width="32px" height="32px">
                <h3> Defesa: ${bestaAtual.minDefesa} | ${bestaAtual.maxDefesa}</h3>
            </div>
        </div>
    `;
}

mostrarBesta();