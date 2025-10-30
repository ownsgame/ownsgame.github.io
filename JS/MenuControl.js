const MENU_EL = document.getElementById("menu");
const BOTAO_MENU = document.getElementById("menu-button");

let menuHabilitado = false;

BOTAO_MENU.addEventListener("click", ()=>{
    if(menuHabilitado){
        fecharTela("menu");
        BOTAO_MENU.innerHTML = `Menu`;
        menuHabilitado = false;
    }
    else{
        abrirTela("menu");
        menuPrincipal();
        BOTAO_MENU.innerHTML = `Fechar`;
        menuHabilitado = true;
    }
});

function menuPrincipal(){
    MENU_EL.innerHTML = `
            <h2>Menu:</h2>
            <button onclick="apresentarMapa()">Jornada Principal</button>
            <button class="botao-ativo" onclick="window.location = 'Inventario.html'">Inventário</button>
        `;
}

const CAPITULOS_SPRITES = [
    "Sprites/Capa/cap1.svg",
    "Sprites/Capa/cap2.svg",
    "Sprites/Places/campos.svg",
    "Sprites/Places/campos.svg",
    "Sprites/Places/campos.svg",
    "Sprites/Places/campos.svg",
]

function apresentarMapa(){
    let string = `<h2>Capítulos:</h2><div class="menu-collection">`;
    for(let i = 0; i < CAPITULOS_SPRITES.length; i++){
        string += `
                <div class="menu-card">
                    <h3>Capítulo - ${i + 1}°</h3>
                    <img src="${CAPITULOS_SPRITES[i]}">
                    <button onclick="apresentarCapitulo(${i})">Explorar</button>
                </div>
        `;
    }

    string += '</div><button onclick="menuPrincipal()">Voltar</button>';
    MENU_EL.innerHTML = string;
}

const CAPITULOS_DADOS = [
    [
        "Sintonia Do Prado",
        "Monumento de Helas",
        "Castelo de Dom. Corración",
        "Chá da Tarde",
        "Campo dos Guri",
        "Shogunato Orakana"
    ], 
    [
        "Venha Vibrar com os Girassois Sorridentes!",
        "Colosso construído em 1553 para o Imperador Heleno Borja",
        "Regozijo pela graça da iluminada presença de vossa mercê!",
        "Vejo que recebeu o Convite! Não se atrase! O chá começa em breve!",
        "Só craques podem jogar na nossa pelada!",
        "Terras do Lord Orakana, o 17° shogun do clã: 馬鹿な"
    ],
    [
        "Sprites/Places/campos.svg",
        "Sprites/Places/campos.svg",
        "Sprites/Places/campos.svg",
        "Sprites/Places/campos.svg",
        "Sprites/Places/campos.svg",
        "Sprites/Places/campos.svg",
    ],
]

const LINKS = [
    [
        "tronco.html",
        "ciclop.html",
        "cavaleiro.html",
        "cha.html",
        "futebol.html",
        "lord.html",
    ],

];

const DUNGEONS_DADOS = [
    [
        ["Campo Dos Girassois", "Sprites/Places/campos.svg", "mapa.html"],
        ["Colina Doce", "Sprites/Places/campos.svg", "mapa.html"],
        ["Dança das Sementes", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Templo do Vento", "Sprites/Places/campos.svg", "mapa.html"],
        ["Templo da Água", "Sprites/Places/campos.svg", "mapa.html"],
        ["Templo do Fogo", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Taverna Casmurgo", "Sprites/Places/campos.svg", "mapa.html"],
        ["Palácio dos Farçantes", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Aventura no Xadrez", "Sprites/Places/campos.svg", "mapa.html"],
        ["Confusão no Deque", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Campo de Terra", "Sprites/Places/campos.svg", "mapa.html"],
        ["Arena das Estrelas", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Reunião Shinobi", "Sprites/Places/campos.svg", "mapa.html"],
        ["Campos de Bambu", "Sprites/Places/campos.svg", "mapa.html"],
        ["Fúria do Clã", "Sprites/Places/campos.svg", "mapa.html"],
    ],
];

const NPC_DADOS = [
    [
        ["Personagem1", "Sprites/Places/campos.svg", "mapa.html"],
        ["Personagem1", "Sprites/Places/campos.svg", "mapa.html"],
        ["Personagem1", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Personagem2", "Sprites/Places/campos.svg", "mapa.html"],
        ["Personagem2", "Sprites/Places/campos.svg", "mapa.html"],
        ["Personagem2", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Personagem3", "Sprites/Places/campos.svg", "mapa.html"],
        ["Personagem3", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Personagem4", "Sprites/Places/campos.svg", "mapa.html"],
        ["Personagem4", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Personagem5", "Sprites/Places/campos.svg", "mapa.html"],
        ["Personagem5", "Sprites/Places/campos.svg", "mapa.html"],
    ],
    [
        ["Personagem6", "Sprites/Places/campos.svg", "mapa.html"],
        ["Personagem6", "Sprites/Places/campos.svg", "mapa.html"],
        ["Personagem6", "Sprites/Places/campos.svg", "mapa.html"],
    ],
];

function apresentarCapitulo(id, tela = 0){
    let string = `
        <h2>${CAPITULOS_DADOS[0][id]}</h2>
        <h3><i>"${CAPITULOS_DADOS[1][id]}"</i></h3>
    `;

    if(tela == 0){
        string += `<img class="capa" src="${CAPITULOS_SPRITES[id]}">
                    <h2>Chefe do Capítulo:</h2> 
                    <button class="desafio-botao" onclick="apresentarBoss(${id})">Desafiar</button>
        `;
    }

    else if(tela == 1){
        string += `<h2>Dungeons do Capítulo:</h2><div class="menu-collection">`;
        let vetor = DUNGEONS_DADOS[id];
        console.log(vetor);
        vetor.forEach(dungeon => {
            console.log(dungeon)
            string += `
                <div class="menu-card">
                    <h3>${dungeon[0]}</h3>
                    <img src="${dungeon[1]}">
                    <a href="${dungeon[2]}">Explorar</a>
                </div>
        `;
        });
        string += `</div>`;
    }

    else if(tela == 2){
        string += `<h2>Personagens do Capítulo:</h2><div class="menu-collection">`;
        let vetor = NPC_DADOS[id];
        console.log(vetor);
        vetor.forEach(dungeon => {
            console.log(dungeon)
            string += `
                <div class="menu-card">
                    <h3>${dungeon[0]}</h3>
                    <img src="${dungeon[1]}">
                    <a href="${dungeon[2]}">Explorar</a>
                </div>
        `;
        });
        string += `</div>`;
    }

    string += `
                <div class="botoes-alinhados">
                    <button onclick="apresentarCapitulo(${id}, 0)">Chefão
                    </button>
                    <button onclick="apresentarCapitulo(${id}, 1)">Dungeons
                    </button>
                    <button onclick="apresentarCapitulo(${id}, 2)">Personagens
                    </button>
                </div>
                
                <button onclick="apresentarMapa()">Voltar</button>
    `;
    MENU_EL.innerHTML = string;
}

const BOSSES_DADOS = [
    {nome: "Woody, o Tronco", forca: 1000, sprite: "Sprites/Capa/b_woody.svg"},
    {nome: "Polifemo, o Ciclope", forca: 1000, sprite: "Sprites/Capa/b_ciclop.svg"},
    {nome: "Dom. Corración", forca: 1000, sprite: "Sprites/Capa/b_cavaleiro.svg"},
    {nome: "Dona Yara, a estilista", forca: 1000, sprite: "Sprites/Capa/b_bailarina.svg"},
    {nome: "Yudi Fenomeno", forca: 1000, sprite: "Sprites/Capa/b_craque.svg"},
    {nome: "Lord Orakana", forca: 1000, sprite: "Sprites/Capa/b_lord.svg"},
];



function apresentarBoss(id){
    const TELA = document.getElementById("show-boss");
    TELA.innerHTML = `
        <h2>APRESENTANDO: ${BOSSES_DADOS[id].nome}</h2>
        <img src="${BOSSES_DADOS[id].sprite}" width="200px" height="200px">
        <button class="desafio-botao" onclick="window.location = 'HTML_Bosses/${LINKS[0][id]}'">Desafiar</button>
        <div class="botoes-alinhados">
            <button class="botao-ativo" onclick="window.location = 'Inventario.html'">Inventário</button>
            <button onclick="fecharTela('show-boss')">Fechar</button>
        </div>
    `;

    abrirTela("show-boss");
}