const SECAO_VIEW = document.querySelector(".view");

function changeDados(titulo, dados){
    const TITULO = document.querySelector(".inventario-cabecalho h1");
    TITULO.innerHTML = titulo;

    const DADOS = document.querySelector(".inventario-dados");
    DADOS.innerHTML = dados;
}

function loadStatus(){
    let copiaDados = getSession();
    
    let vida = copiaDados.vida;
    let ataque = copiaDados.ataque;
    let defesa = copiaDados.defesa;

    let string =
    `
        <img class="animated-aparecer" src="Sprites/Player/base.svg">
        <h2 class="fonte-futuretimes">Atributos:</h2>
        <h3>❤️ Vida: ${vida} | 🗡️ Ataque: ${ataque} | 🛡️ Defesa: ${defesa} </h3>
        <h3>💪 Força: ${Math.floor((vida * 20  + ataque * 30 + defesa * 10) / 60)}</h3>
    `;

    changeDados("Status", string);
}

function loadGear(){    
    let string =
    `
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <div class="row-buttons animated-buttons">
                <button>Alterar</button>
                <button>Equipamentos</button>
                <button>Itens</button>
            </div>
    `;

    changeDados("Gear", string);
}

function loadMissao(){
    let copiaDados = getSession();
    let capitulo = copiaDados.capituloAtual;
        
    let string =
    `
            <h2 class="animated-aparecer fonte-futuretimes"> Hexopoda</h2>
            <img class="animated-aparecer" src="Sprites/IU/hexopoda0.svg">
            <h2 class="animated-aparecer fonte-futuretimes"> 0 de 6 partes</h2>
            <h3 class="animated-aparecer">Conclusão: ${Math.floor(((capitulo) * 100)/ 6)}%</h3>
            <h3 class="animated-aparecer">Capítulo Atual: ${capitulo}</h3>
    `;

    changeDados("Missao", string);
}

loadStatus();