const SOUNDS = [
    {
        id: "temaPantano",
        nome: "Bayou Boogie",
        origem: "Donkey Kong Country 2",
        link: "SOUNDS/Trilhas/Bayou-Boogie.mp3",
    },
    {
        id: "temaSombrio",
        nome: "Dies Irae (Requiem)",
        origem: "Giuseppe Verdi",
        link: "SOUNDS/Trilhas/Dies-Irae.mp3",
    },
    {
        id: "temaColina",
        nome: "Floral Fury",
        origem: "Cuphead",
        link: "SOUNDS/Trilhas/Floral Fury.mp3",
    },
    {
        id: "temaTemplo",
        nome: "Stone Tower Temple",
        origem: "The Legend of Zelda",
        link: "SOUNDS/Trilhas/Stone-Tower-Temple.mp3",
    },
    {
        id: "temaDungeon",
        nome: "Dungeon Theme",
        origem: "The Legend of Zelda",
        link: "SOUNDS/Trilhas/Dungeon-Theme.mp3",
    },
    {
        id: "ambienteAquatico",
        nome: "Aquatic Ambience",
        origem: "Donkey Kong Country",
        link: "SOUNDS/Trilhas/Aquatic-Ambience.mp3",
    },
    {
        id: "temploForesta",
        nome: "Forest Temple",
        origem: "The Legend of Zelda: Ocarina Of Time",
        link: "SOUNDS/Trilhas/Forest-Temple.mp3",
    },
    {
        id: "temaGrecia",
        nome: "The great sword bridge of athens",
        origem: "God of War (2005)",
        link: "SOUNDS/Trilhas/The great sword bridge of athens.mp3",
    },
];

function getSound(id){
    const sound = SOUNDS.find(s => s.id === id);
    return sound ? sound : null;
}