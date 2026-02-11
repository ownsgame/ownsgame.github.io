const WORKBENCHS = [
    {
        id: "forjaFantasma",
        nome: "Forja Fantasma",
        tipo: "construção",
        receitas: [1, 2, 7],
        sprite: "Sprites/WorkBanks/forja_fantasma.svg",
        hover: "Sprites/WorkBanks/forja_fantasma-hover.svg"
    },
    {
        id: "bancadaTreino",
        nome: "Bancada de Treino",
        tipo: "treino",
        sprite: "Sprites/WorkBanks/bancada-treino.svg"
    },
    {
        id: "sino",
        nome: "Sino",
        tipo: "teleporte",
        sprite: "Sprites/WorkBanks/sino.svg",
        hover: "Sprites/WorkBanks/sino-hover.svg"
    },
    {
        id: "falsificador",
        nome: "Falsificador de Chaves",
        tipo: "construção",
        receitas: [3, 7],
        sprite: "Sprites/WorkBanks/falsificador.svg"
    },
    {
        id: "mapaMundi",
        nome: "Mapa-Múndi",
        tipo: "mapaMundi",
        sprite: "Sprites/WorkBanks/globe.svg",
        hover: "Sprites/WorkBanks/globe-hover.svg"
    },
    {
        id: "esfingeDePedra",
        nome: "Enigma da Esfinge",
        tipo: "construção",
        receitas: [4],
        sprite: "Sprites/WorkBanks/esfingeDePedra.svg"
    },
    {
        id: "trocaFichas",
        nome: "Troca Fichas",
        tipo: "construção",
        receitas: [5, 6],
        sprite: "Sprites/WorkBanks/troca-fichas.svg",
        hover: "Sprites/WorkBanks/troca-fichas-hover.svg"
    },
    {
        id: "roleta",
        nome: "Roleta Prêmiada",
        tipo: "roleta",
        sprite: "Sprites/WorkBanks/roleta.svg",
        hover: "Sprites/WorkBanks/roleta-hover.svg"
    },
    {
        id: "cambio",
        nome: "Câmbio de Moedas",
        tipo: "construção",
        receitas: [8, 9],
        sprite: "Sprites/WorkBanks/cambio.svg",
        hover: "Sprites/WorkBanks/cambio-hover.svg"
    },
    {
        id: "joalheria",
        nome: "Joalheria",
        tipo: "construção",
        receitas: [14, 15, 16, 17, 10, 11, 12, 13],
        sprite: "Sprites/WorkBanks/joalheria.svg",
        hover: "Sprites/WorkBanks/joalheria-hover.svg"
    },
    {
        id: "forjaHefesto",
        nome: "Forja de Hefesto",
        tipo: "construção",
        receitas: [18],
        sprite: "Sprites/WorkBanks/forja_hefesto.svg",
        hover: "Sprites/WorkBanks/forja_hefesto-hover.svg"
    },
];

function getWorkBench(id){
    const work = WORKBENCHS.find(w => w.id === id);
    return work ? work : null;
}