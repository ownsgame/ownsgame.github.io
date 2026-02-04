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
]

const TILES_CUSTER = {
    ceramica: ["Sprites/Tiles/ceramica_1.svg", "Sprites/Tiles/ceramica_2.svg"],
    mirror: ["Sprites/Tiles/mirror_2.svg", "Sprites/Tiles/mirror_1.svg"],
    colina: ["Sprites/Tiles/colina_1.svg", "Sprites/Tiles/colina_2.svg"],
    cidade: ["Sprites/Tiles/cidade_1.svg", "Sprites/Tiles/cidade_2.svg"],
    dojo: ["Sprites/Tiles/dojo_1.svg", "Sprites/Tiles/dojo_2.svg"],
    floresta: ["Sprites/Tiles/floresta_1.svg", "Sprites/Tiles/floresta_2.svg"],
    pantano: ["Sprites/Tiles/pantano_1.svg", "Sprites/Tiles/pantano_2.svg"],
    morta: ["Sprites/Tiles/morta_1.svg", "Sprites/Tiles/morta_2.svg"],
    hellas: ["Sprites/Tiles/hellas_1.svg", "Sprites/Tiles/hellas_2.svg"],
    temploFogo: ["Sprites/Tiles/temploFogo_1.svg", "Sprites/Tiles/temploFogo_2.svg"],
    temploAgua: ["Sprites/Tiles/temploAgua_1.svg", "Sprites/Tiles/temploAgua_2.svg"],
    temploVento: ["Sprites/Tiles/temploVento_1.svg", "Sprites/Tiles/temploVento_2.svg"],
    areia: ["Sprites/Tiles/areia_1.svg", "Sprites/Tiles/areia_2.svg"],
    cassino: ["Sprites/Tiles/cassino_1.svg", "Sprites/Tiles/cassino_2.svg"],
    bossWoody: ["Sprites/Tiles/bossWoody_1.svg", "Sprites/Tiles/bossWoody_3.svg", "Sprites/Tiles/bossWoody_2.svg", "Sprites/Tiles/bossWoody_3.svg"],
}

function getTileSprite(id){
    const tile = TILES.find(t => t.id === id);
    return tile ? tile.sprite : null;
}

function getClusterTiles(id){
    return TILES_CUSTER[id] || null;
}