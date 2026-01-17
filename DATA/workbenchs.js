const WORKBENCHS = [
    {
        id: "forjaFantasma",
        nome: "Forja Fantasma",
        tipo: "construção",
        receitas: [1, 2],
        sprite: "Sprites/WorkBanks/forja_fantasma.svg"
    }
];

function getWorkBench(id){
    const work = WORKBENCHS.find(w => w.id === id);
    return work ? work : null;
}