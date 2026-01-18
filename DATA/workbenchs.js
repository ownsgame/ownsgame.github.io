const WORKBENCHS = [
    {
        id: "forjaFantasma",
        nome: "Forja Fantasma",
        tipo: "construção",
        receitas: [1, 2],
        sprite: "Sprites/WorkBanks/forja_fantasma.svg"
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
        sprite: "Sprites/WorkBanks/sino.svg"
    },
];

function getWorkBench(id){
    const work = WORKBENCHS.find(w => w.id === id);
    return work ? work : null;
}