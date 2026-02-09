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
];

function getWorkBench(id){
    const work = WORKBENCHS.find(w => w.id === id);
    return work ? work : null;
}