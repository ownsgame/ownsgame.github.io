const SECAO_STATUS = document.getElementById("personagem-Status");
const SECAO_BOTAO = document.getElementById("menu");
const SECAO_GEAR = document.getElementById("personagem-Gear");
const SECAO_MISSAO = document.getElementById("personagem-Mission");

function loadStatus(){
    let copiaDados = getDados();

    let string = `
        <div class="inventario-cabecalho">
            <h1>Inventário:</h1>
            <button>Voltar</button>     
        </div>
    `;
    let vida = copiaDados.vida;
    let ataque = copiaDados.dano;
    let defesa = copiaDados.defesa;

    string +=
    `
            <img src="Sprites/Player/base.svg">
            <h2>Atributos:</h2>
            <h3>❤️ Vida: ${vida} | 🗡️ Ataque: ${ataque} | 🛡️ Defesa: ${defesa} </h3>
            <h3>💪 Força: ${Math.floor((vida * 20  + ataque * 30 + defesa * 10) / 60)}</h3>
    `;

    SECAO_STATUS.innerHTML = string;

    SECAO_STATUS.style.display = "flex";
    loadBotoes(0);
    SECAO_GEAR.style.display = "none";
    SECAO_MISSAO.style.display = "none";
}

function loadGear(){
    let copiaDados = getDados();

    let string = `
        <div class="inventario-cabecalho">
            <h1>Inventário:</h1>
            <button>Voltar</button>     
        </div>
    `;
    
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
    loadBotoes(1);
    SECAO_STATUS.style.display = "none";
    SECAO_MISSAO.style.display = "none";
}

function loadMissao(){
    let copiaDados = getDados();
    let capitulo = copiaDados.capituloAtual;
    
    let string = `
        <div class="inventario-cabecalho">
            <h1>Inventário:</h1>
            <button>Voltar</button>     
        </div>
    `;
    
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
    loadBotoes(2);
    SECAO_STATUS.style.display = "none";
    SECAO_GEAR.style.display = "none";
}

function loadBotoes(id){
    SECAO_BOTAO.style.display = "none";
    const funcoes = ["loadStatus()", "loadGear()", "loadMissao()"];
    const textos = ["Status", "⚙️ Gear", "🗺️ Missão"];
    let stringHtml = "";

    for(let i = 0; i < 3; i++){
        if(i != id){
            stringHtml += "<button class='botao-ativo'";
        }
        else{
            stringHtml += "<button class='botao-inativo'";
        }

        stringHtml += `onclick="${funcoes[i]}">${textos[i]}</button>`;
    }

    SECAO_BOTAO.innerHTML = stringHtml;
    SECAO_BOTAO.style.display = "flex";
}

loadStatus();