const SECAO_STATUS = document.getElementById("personagem-Status");
const SECAO_BOTAO = document.getElementById("menu");
const SECAO_GEAR = document.getElementById("personagem-Gear");
const SECAO_MISSAO = document.getElementById("personagem-Mission");

function loadStatus(){
    let copiaDados = getDados();

    let string = "";
    let vida = copiaDados.vida;
    let ataque = copiaDados.dano;
    let defesa = copiaDados.defesa;

    string +=
    `
            <img src="Sprites/Player/base.svg">
            <h2>Atributos:</h2>
            <h3>❤️ Vida: ${vida} | 🗡️ Ataque: ${ataque} | 🛡️ Defesa: ${defesa} </h3>
            <h3>💪 Força: ${Math.floor((vida + ataque + defesa) / 3)}</h3>
    `;

    SECAO_STATUS.innerHTML = string;

    SECAO_STATUS.style.display = "flex";
    SECAO_BOTAO.style.display = "flex";

    SECAO_GEAR.style.display = "none";
    SECAO_MISSAO.style.display = "none";
}

function loadGear(){
    let copiaDados = getDados();

    let string = "";
    
    string +=
    `
            <h3>Arma Atual:</h3>
            <h3>Poder Atual:</h3>
            <h3>Escudo:</h3>
            <button>Alterar</button>
            <button>Equipamentos</button>
            <button>Itens</button>
    `;

    SECAO_GEAR.innerHTML = string;

    SECAO_GEAR.style.display = "flex";
    SECAO_BOTAO.style.display = "flex";

    SECAO_STATUS.style.display = "none";
    SECAO_MISSAO.style.display = "none";
}

function loadMissao(){
    let copiaDados = getDados();
    let capitulo = copiaDados.capituloAtual;
    
    let string = "";
    
    string +=
    `
            <h2>Hexopoda</h2>
            <img src="Sprites/IU/hexopoda0.svg">
            <h2>0/6 partes</h2>
            <h3>Conclusão: ${Math.floor(((capitulo) * 100)/ 6)}%</h3>
            <h3>Capítulo Atual: ${capitulo}</h3>
    `;

    SECAO_MISSAO.innerHTML = string;

    SECAO_MISSAO.style.display = "flex";
    SECAO_BOTAO.style.display = "flex";

    SECAO_STATUS.style.display = "none";
    SECAO_GEAR.style.display = "none";
}

loadStatus();