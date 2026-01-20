const WORKS = [
    {
        id: "door",
        sprite: "Sprites/WorkBanks/door.svg",
        hover: "Sprites/WorkBanks/door-hover.svg",
    },
    {
        id: "door-locked",
        sprite: "Sprites/WorkBanks/door-locked.svg",
        hover: "Sprites/WorkBanks/door-locked.svg",
    },
    {
        id: "mirror",
        sprite: "Sprites/WorkBanks/mirror.svg",
        hover: "Sprites/WorkBanks/mirror-hover.svg",
    },
    {
        id: "bookshelf",
        sprite: "Sprites/WorkBanks/book-shelf.svg",
        hover: "Sprites/WorkBanks/book-shelf-hover.svg",
    },
    
    {
        id: "bestiario",
        sprite: "Sprites/WorkBanks/bestiario.svg",
        hover: "Sprites/WorkBanks/bestiario-hover.svg",
    },
    {
        id: "dojo",
        sprite: "Sprites/WorkBanks/dojo.svg",
        hover: "Sprites/WorkBanks/dojo-hover.svg",
    }, 
    {
        id: "cassino",
        sprite: "Sprites/WorkBanks/cassino.svg",
        hover: "Sprites/WorkBanks/cassino-hover.svg",
    },
    {
        id: "sino",
        sprite: "Sprites/WorkBanks/sino.svg",
        hover: "Sprites/WorkBanks/sino-hover.svg",
    },
    {
        id: "tronco",
        sprite: "Sprites/WorkBanks/tronco.svg",
        hover: "Sprites/WorkBanks/tronco.svg",
    },
]

function getWorkSprite(id){
    const work = WORKS.find(w => w.id === id);
    return work ? work : null;
}