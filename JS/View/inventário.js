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
        <img class="animated-aparecer inventario-image" src="Sprites/Player/base.svg">
        <h2 class="fonte-futuretimes">Atributos:</h2>
        <div class="atributos-alinhados">
            <div class="atributo">
                <img src="Sprites/IU/heart_icon.svg" width="32px" height="32px">
                <h3> Vida: ${vida} </h3>
            </div>
            <div class="atributo">
                <img src="Sprites/IU/attack_icon.svg" width="32px" height="32px">
                <h3> Ataque: ${ataque} </h3>
            </div>
            <div class="atributo">
                <img src="Sprites/IU/shield_icon.svg" width="32px" height="32px">
                <h3> Defesa: ${defesa} </h3>
            </div>
        </div>
        
        <h3>💪 Força: ${Math.floor((vida * 20  + ataque * 30 + defesa * 10) / 60)}</h3>
    `;

    changeDados("Status", string);
}

function loadGear(){    
    let string =
    `

            <div class="gear">
                <h2 class="fonte-comum">Arsenal:</h2>
                <div class="itens-conteiner"> 
                    <div class="item-conteiner">
                        <img class="item" src="Sprites/IU/sword_null_icon.svg">
                    </div>
                    <div class="item-conteiner">
                        <img class="item" src="Sprites/IU/shield_null_icon.svg">
                    </div>
                    <div class="item-conteiner">
                        <img class="item" src="Sprites/IU/scepter_null_icon.svg">
                    </div>
                </div>
                <h2 class="fonte-comum">Roupagem:</h2>
                <div class="itens-conteiner"> 
                    <div class="item-conteiner">
                        <img class="item" src="Sprites/IU/sword_null_icon.svg">
                    </div>
                    <div class="item-conteiner">
                        <img class="item" src="Sprites/IU/shield_null_icon.svg">
                    </div>
                    <div class="item-conteiner">
                        <img class="item" src="Sprites/IU/scepter_null_icon.svg">
                    </div>
                </div>
            </div>
                        
            <div class="row-buttons animated-buttons">
                <button>Alterar</button>
                <button>Equipamentos</button>
                <button onclick="loadItens()">Itens</button>
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
            <img class="animated-aparecer inventario-image" src="Sprites/IU/hexopoda0.svg">
            <h2 class="animated-aparecer fonte-futuretimes"> 0 de 6 partes</h2>
            <h3 class="animated-aparecer">Conclusão: ${Math.floor(((capitulo) * 100)/ 6)}%</h3>
            <h3 class="animated-aparecer">Capítulo Atual: ${capitulo}</h3>
    `;

    changeDados("Missao", string);
}

loadStatus();

function loadItens(){
    let copiaDados = getSession();
    const RECURSOS = copiaDados.recursos;

    let string =
    `
        <div class="itens-conteiner"> 
    `;

    for(let recurso in RECURSOS){

        let item = getItem(recurso);
        string += 
        `
            <div class="item-conteiner" onclick="loadDataItem('${item.descricao}', '${RECURSOS[recurso]}')">
                <img class="item" src="${item.sprite}">
            </div>
        `
    }

    const INVENTARIO = copiaDados.inventario;

    for(let recurso in INVENTARIO){

        let item = getItem(recurso);
        string += 
        `
            <div class="item-conteiner" onclick="loadDataItem('${item.descricao}', '${INVENTARIO[recurso]}')">
                <img class="item" src="${item.sprite}">
            </div>
        `
    }

    string += 
    `           
        </div>
        <p class="descreve-item fonte-comum"></p>
    `;

    changeDados("Itens", string);
}

function loadDataItem(descricao, quantidade){
    const AREA = document.querySelector(".descreve-item");
    AREA.innerHTML = 
    `
        <b>Quantidade:</b> ${quantidade}
        <br>
        <i>"${descricao}"</i>
    `;
}