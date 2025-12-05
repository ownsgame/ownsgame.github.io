const ENTIDADES_SPRITES = [
    {
        id: "tocha",
        sprite: "Sprites/WorkBanks/tocha.svg"
    },
]

function getEntitySprite(id){
    const entidade = ENTIDADES_SPRITES.find(e => e.id === id);
    return entidade ? entidade.sprite : null;
}