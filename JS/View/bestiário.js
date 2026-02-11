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

    const vidaPercent = (bestaAtual.minVida / bestaAtual.maxVida) * 100;
    const ataquePercent = (bestaAtual.minAtaque / bestaAtual.maxAtaque) * 100;
    const defesaPercent = (bestaAtual.minDefesa / bestaAtual.maxDefesa) * 100;

    VIEW_EL.innerHTML = 
    `
        <h1 class="fonte-comum"><i class="fa-solid fa-book-skull"></i> ${bestaAtual.nome}</h1>
        <img src="../${bestaAtual.hover}" class="animated-aparecer inventario-image imagem-besta">

        <div class="atributos-alinhados">

            ${criarBarra("vida", "../Sprites/IU/heart_icon.svg", bestaAtual.minVida, bestaAtual.maxVida)}

            ${criarBarra("ataque", "../Sprites/IU/attack_icon.svg", bestaAtual.minAtaque, bestaAtual.maxAtaque)}

            ${criarBarra("defesa", "../Sprites/IU/shield_icon.svg", bestaAtual.minDefesa, bestaAtual.maxDefesa)}

        </div>
    `;

    animarBarra("vida-barra", vidaPercent);
    animarBarra("ataque-barra", ataquePercent);
    animarBarra("defesa-barra", defesaPercent);
}

function criarBarra(tipo, icone, valorMin, valorMax){

    const texto = valorMin === 0 ? "?" : `${valorMin} / ${valorMax}`;

    return `
        <div class="atributo">
            <img src="${icone}" width="32" height="32">
            <div class="barra-container">
                <div class="barra-preenchimento ${tipo}" id="${tipo}-barra">
                    <span class="barra-texto fonte-comum">${texto}</span>
                </div>
            </div>
        </div>
    `;
}


function animarBarra(id, porcentagem){
    const barra = document.getElementById(id);

    setTimeout(() => {
        barra.style.width = porcentagem + "%";
    }, 50);
}

mostrarBesta();