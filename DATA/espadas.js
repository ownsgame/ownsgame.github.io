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
        id: "linguaDeHidra",
        nome: "Língua de Hidra",
        sprite: "Sprites/Itens/espada_hydra.svg",
        dano: 100,
        espera: 4,
        descricao: "Um dia um herói Helano cortou a língua de Hydra e transformou em sua espada",
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