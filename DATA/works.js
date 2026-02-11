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
        id: "placa",
        sprite: "Sprites/WorkBanks/placa.svg",
        hover: "Sprites/WorkBanks/placa-hover.svg",
    },
    {
        id: "placa-norte",
        sprite: "Sprites/WorkBanks/placa-norte.svg",
        hover: "Sprites/WorkBanks/placa-norte-hover.svg",
    },
    {
        id: "placa-sul",
        sprite: "Sprites/WorkBanks/placa-sul.svg",
        hover: "Sprites/WorkBanks/placa-sul-hover.svg",
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
        id: "tronco",
        sprite: "Sprites/WorkBanks/tronco.svg",
        hover: "Sprites/WorkBanks/tronco.svg",
    },
    {
        id: "portal",
        sprite: "Sprites/WorkBanks/portal.svg",
        hover: "Sprites/WorkBanks/portal.svg",
    },
    {
        id: "portalAzul",
        sprite: "Sprites/WorkBanks/portalAzul.svg",
        hover: "Sprites/WorkBanks/portalAzul.svg",
    },
    {
        id: "portaVento",
        sprite: "Sprites/WorkBanks/portao-vento.svg",
        hover: "Sprites/WorkBanks/portao-vento.svg",
    },
    {
        id: "portaAgua",
        sprite: "Sprites/WorkBanks/portao-agua.svg",
        hover: "Sprites/WorkBanks/portao-agua.svg",
    },
    {
        id: "portaFogo",
        sprite: "Sprites/WorkBanks/portao-fogo.svg",
        hover: "Sprites/WorkBanks/portao-fogo.svg",
    },
    {
        id: "emBreve",
        sprite: "Sprites/WorkBanks/em-breve.svg",
        hover: "Sprites/WorkBanks/em-breve.svg",
    },
    {
        id: "bueiro",
        sprite: "Sprites/WorkBanks/bueiro.svg",
        hover: "Sprites/WorkBanks/bueiro-hover.svg",
    },
]

function getWorkSprite(id){
    const work = WORKS.find(w => w.id === id);
    return work ? work : null;
}