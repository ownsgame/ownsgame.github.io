const ENTIDADES_SPRITES = [
    {
        id: "tocha",
        sprite: "Sprites/WorkBanks/tocha.svg"
    },
    {
        id: "maquinaCientifica",
        sprite: "Sprites/WorkBanks/scientific-machine.svg"
    },
    {
        id: "globo",
        sprite: "Sprites/WorkBanks/globe.svg"
    },
    {
        id: "mesaRelatorio",
        sprite: "Sprites/WorkBanks/report-table.svg"
    },
]

function getEntitySprite(id){
    const entidade = ENTIDADES_SPRITES.find(e => e.id === id);
    return entidade ? entidade.sprite : null;
}