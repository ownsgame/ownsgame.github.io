const ENTIDADES_SPRITES = [
    {
        id: "tocha",
        sprite: "Sprites/WorkBanks/tocha.svg"
    },
    {
        id: "grama",
        sprite: "Sprites/WorkBanks/grama.svg"
    },
    {
        id: "pilar",
        sprite: "Sprites/WorkBanks/pilar.svg"
    },
    {
        id: "pilar-floresta",
        sprite: "Sprites/WorkBanks/pilar-floresta.svg"
    },
    {
        id: "maquinaCientifica",
        sprite: "Sprites/WorkBanks/scientific-machine.svg"
    },
    {
        id: "fontedesejos",
        sprite: "Sprites/WorkBanks/wishing-well.svg"
    },
    {
        id: "mesaRelatorio",
        sprite: "Sprites/WorkBanks/report-table.svg"
    },
    {
        id: "estatuaHelos",
        sprite: "Sprites/WorkBanks/statue.svg"
    },
    {
        id: "piramide",
        sprite: "Sprites/WorkBanks/piramide.svg"
    },
    {
        id: "cama",
        sprite: "Sprites/WorkBanks/cama.svg"
    },
    {
        id: "cama-deitado",
        sprite: "Sprites/WorkBanks/cama-deitado.svg"
    },
]

function getEntitySprite(id){
    const entidade = ENTIDADES_SPRITES.find(e => e.id === id);
    return entidade ? entidade.sprite : null;
}