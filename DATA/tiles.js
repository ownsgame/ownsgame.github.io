const TILES = [
    {
        id: "ceramicaUm",
        sprite: "Sprites/Tiles/ceramica_1.svg"
    },
    {
        id: "ceramicaDois",
        sprite: "Sprites/Tiles/ceramica_2.svg"
    },
    {
        id: "mirrorUm",
        sprite: "Sprites/Tiles/mirror_1.svg"
    },
    {
        id: "mirrorDois",
        sprite: "Sprites/Tiles/mirror_2.svg"
    },
    {
        id: "mirrorChest",
        sprite: "Sprites/Tiles/ch-mirror.svg",
        spriteAberto: "Sprites/Tiles/co-mirror.svg",
    },
]

const TILES_CUSTER = {
    ceramica: ["Sprites/Tiles/ceramica_1.svg", "Sprites/Tiles/ceramica_2.svg"],
    mirror: ["Sprites/Tiles/mirror_1.svg", "Sprites/Tiles/mirror_2.svg"],
}

function getTileSprite(id){
    const tile = TILES.find(t => t.id === id);
    return tile ? tile.sprite : null;
}

function getClusterTiles(id){
    return TILES_CUSTER[id] || null;
}