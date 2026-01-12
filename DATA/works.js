const WORKS = [
    {
        id: "door",
        sprite: "Sprites/WorkBanks/door.svg",
        hover: "Sprites/WorkBanks/door-hover.svg",
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
        hover: "Sprites/WorkBanks/bestiario.svg",
    },   
]

function getWorkSprite(id){
    const work = WORKS.find(w => w.id === id);
    return work ? work : null;
}