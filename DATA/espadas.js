const ESPADAS = [
    {
        id: "espadaFantasma",
        nome: "Espada Fantasma",
        sprite: "Sprites/Itens/espada_fantasma.svg",
        dano: 40,
        espera: 4,
        descricao: "Dizem que é feita com ectoplasmas de Fantasmas!",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "arma",
        raridade: "Comum"
    },
    {
        id: "espadaSapo",
        nome: "Espada de Sapo",
        sprite: "Sprites/Itens/espada_sapo.svg",
        dano: 35,
        espera: 3.2,
        descricao: "O que você fez a pobres sapos somente para isso?",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "arma",
        raridade: "Raro"
    },
    {
        id: "lancaPolifemo",
        nome: "Lança de Polífemo",
        sprite: "Sprites/Itens/lança_Polifemo.svg",
        dano: 150,
        espera: 4,
        descricao: "Obtida das mãos de Polífemo o Ciclope Gigante",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "arma",
        raridade: "Raro"
    },
    {
        id: "laminaDeHidra",
        nome: "Lâminas de Hidra",
        sprite: "Sprites/Itens/espada_hydra.svg",
        dano: 100,
        espera: 3.2,
        descricao: "Um dia a raça dos Ogros derrotou Hydra e a transformou em suas espada",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "arma",
        raridade: "Raro"
    },
    {
        id: "excalibur",
        nome: "Excalibur",
        sprite: "Sprites/Itens/espada_excalibur.svg",
        dano: 250,
        espera: 3,
        descricao: "O Rei Rutra foi o único que conseguiu remover a espada do Pedestal Bretão",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "arma",
        raridade: "Raro"
    },
    {
        id: "furaBolas",
        nome: "Fura Bolas",
        sprite: "Sprites/Itens/fura_bolas.svg",
        dano: 550,
        espera: 2,
        descricao: "A Fura Bolas é uma arma secreta usada pra interromper partidas de futebol",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "arma",
        raridade: "Raro"
    },
    {
        id: "katanaDeOrodoki",
        nome: "Katana de Orodoki",
        sprite: "Sprites/Itens/katana_orodoki.svg",
        dano: 1000,
        espera: 2,
        descricao: "Orodoki foi um lendário espadachin conhecido por portar esta espada",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "arma",
        raridade: "Lendário"
    }
];

function getEspada(id){
    const espada = ESPADAS.find(e => e.id === id);
    return espada ? espada : null;
}

const ESCUDOS = [
    {
        id: "escudoFantasma",
        nome: "Escudo Fantasma",
        defesa: 20,
        sprite: "Sprites/Itens/escudo_fantasma.svg",
        descricao: "Usa a energia dos Ectoplasmas para conter o dano causado ao seu portador",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "escudo",
        raridade: "Comum",
    },
    {
        id: "escudoReal",
        nome: "Escudo Real de Hellas",
        defesa: 30,
        sprite: "Sprites/Itens/escudo_escudeiro.svg",
        descricao: "Todos os escudos são reais, mas esse aqui é Real, real mesmo?",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "escudo",
        raridade: "Raro",
    },
    {
        id: "escudoHellano",
        nome: "Escudo Hellano",
        defesa: 40,
        sprite: "Sprites/Itens/escudo_hellas.svg",
        descricao: "Dizem que o olho no meio do escudo consegue ver tudo o que há em seu redor",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "escudo",
        raridade: "Raro",
    }
];

function getEscudo(id){
    const escudo = ESCUDOS.find(e => e.id === id);
    return escudo ? escudo : null;
}

const CETROS = [
    {
        id: "cetroArvore",
        nome: "Cetro de Árvore",
        sprite: "Sprites/Itens/scepter_tree.svg",
        descricao: "Cetro de Árvore",
        unico: true,
        consumivel: false,
        destino: "inventário",
        classe: "cetro",
        raridade: "Raro",
    }
];

function getCetro(id){
    const cetro = CETROS.find(c => c.id === id);
    return cetro ? cetro : null;
}