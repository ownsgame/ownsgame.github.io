const SECAO_VIEW = document.querySelector(".view");

function changeDados(titulo, dados, aba){
    const TITULO = document.querySelector(".inventario-cabecalho h1");
    TITULO.innerHTML = titulo;

    const ABA = document.querySelector(".aba-atual");
    ABA.innerHTML = `${aba}/5`;

    const DADOS = document.querySelector(".inventario-dados");
    DADOS.innerHTML = dados;
}

function loadStatus(){
    let copiaDados = getSession();
    
    let string =
    `
        <img class="animated-aparecer inventario-image" src="../Sprites/Player/base.svg">
        <h2 class="fonte-comum">Atributos:</h2>
        <div class="atributos-alinhados">
            <div class="atributo">
                <img src="../Sprites/IU/heart_icon.svg" width="32px" height="32px">
                <h3> Vida: ${getSessionVida()} </h3>
            </div>
            <div class="atributo">
                <img src="../Sprites/IU/attack_icon.svg" width="32px" height="32px">
                <h3> Ataque: ${getSessionAtaque()} </h3>
            </div>
            <div class="atributo">
                <img src="../Sprites/IU/shield_icon.svg" width="32px" height="32px">
                <h3> Defesa: ${getSessionDefesa()} </h3>
            </div>
        </div>
        
        <h3>Força: ${Math.floor((getSessionVida() * 20  + getSessionAtaque() * 30 + getSessionDefesa() * 10) / 60)}</h3>
    `;

    changeDados("Status", string, 1);
}

function loadItens(){
    let copiaDados = getSession();
    const RECURSOS = copiaDados.recursos;
    const INVENTARIO = copiaDados.inventario;

    let string =
    `
        <div class="itens-conteiner animated-aparecer"> 
    `;

    if(Object.keys(RECURSOS).length == 0 && Object.keys(INVENTARIO).length == 0) {
        string += "<h3><i class='fa-solid fa-triangle-exclamation'></i> Você possui não itens!</h3>"
    }

    else{
        for(let recurso in RECURSOS){
            if(RECURSOS[recurso] != 0){
                string += itemFrame(recurso, RECURSOS[recurso], false);
            }
        }
      
        for(let recurso in INVENTARIO){
            if(INVENTARIO[recurso] != 0){
                string += itemFrame(recurso, INVENTARIO[recurso], false);
            }
        }
    }

    string += 
    `           
        </div>
        <p class="descreve-item fonte-comum"></p>
    `;

    changeDados("Meus Itens", string, 2);
}

function loadGear(){    
    let string =
    `

            <div class="gear animated-aparecer">
                <h2 class="fonte-comum">Seu Arsenal Atual:</h2>
                <div class="itens-conteiner">
    ` 
    let copiaDados = getSession();
    
    if(copiaDados.armaAtual == null || !copiaDados.armaAtual){
        string += 
        `
            <div class="item-conteiner" onclick="loadChangeItem('arma')">
                <img class="item" src="../Sprites/IU/sword_null_icon.svg">
            </div>
        `;
    }
    else{
        let itemId = copiaDados.armaAtual;
        string += itemFrame(itemId, false, "loadChangeItem('arma')")
    }

    if(copiaDados.escudoAtual == null || !copiaDados.escudoAtual){
        string +=
        `
            <div class="item-conteiner" onclick="loadChangeItem('escudo')">
                <img class="item" src="../Sprites/IU/shield_null_icon.svg">
            </div>
        `;
    }
    else{
        let itemId = copiaDados.escudoAtual;
        string += itemFrame(itemId, false, "loadChangeItem('escudo')")
    }

    if(copiaDados.cetroAtual == null || !copiaDados.cetroAtual){
        string +=
        `
            <div class="item-conteiner" onclick="loadChangeItem('cetro')">
                <img class="item" src="../Sprites/IU/scepter_null_icon.svg">
            </div>
        `;
    }
    else{
        let itemId = copiaDados.cetroAtual;
        string += itemFrame(itemId, false, "loadChangeItem('cetro')")
    }
                    
    string +=      
    `
                </div>
            </div>
            <p>(Clique para alterar o equipamento)</p>
    `;

    changeDados("Arsenal", string, 3);
}

function loadMissao(){
    let copiaDados = getSession();
            
    let string =
    `
            <h2 class="animated-aparecer"> Hexapoda</h2>
            <img class="animated-aparecer inventario-image" src="../Sprites/IU/hexopoda${copiaDados.fragmentosHexopoda}.svg">
            <h2 class="animated-aparecer"> ${copiaDados.fragmentosHexopoda} de 6 partes</h2>
            <h3 class="animated-aparecer">Conclusão: ${copiaDados.porcentagem}%</h3>
            <h3 class="animated-aparecer">Capítulo Atual: ${copiaDados.capituloCorrente}</h3>
    `;

    changeDados("Missão", string, 4);
}

loadStatus();

function loadChangeItem(classe){    
    let copiaDados = getSession();
    const INVENTARIO = copiaDados.inventario;
    let possui = false;

    let string = `<h3 class='fonte-comum'>Trocar ${classe} atual por:</h3>`;

    for(let recurso in INVENTARIO){

        let item = getItem(recurso);

        if(item.classe == classe){
            possui = true;
            string += itemFrame(recurso, false, `trocaDeItens('${classe}', '${item.id}')`);
        }
    }

    if(!possui){
        string += `<h3><i class='fa-solid fa-triangle-exclamation'></i> Você não possui ${classe}s!</h3>`;
    }
    string += "<button onclick='loadGear()'>Voltar</button>";

    changeDados("Trocar", string, 3);
}

function loadQuests(){
    let questsAtivas = getSessionItem("questsAtivas");
    let arvoreConclusao = getSessionItem("arvoreConclusao");

    let string = `<div class="quests-conteiner">`;

    if(questsAtivas.length == 0){
        string += "<p>Você não possui quests ativas no momento</p>";
    }
    else{
        string += `<h2 class="fonte-comum">Quests ativas: (${questsAtivas.length})</h2>`;
        questsAtivas.forEach(id => {
            
            let quest = getQuest(id);
            string += 
            `
                <div class="quest animated-aparecer">
                    <h3>${quest.nome}</h3>
                    <p class="fonte-comum">${quest.descricao}</p>
                </div>
            `;
        });
    }

    string += 
    `
        </div>
        <div class="row-buttons animated-buttons">
            <button>Quests Concluidas</button>
        </div>
    `;

    changeDados("Quests", string, 5);
}