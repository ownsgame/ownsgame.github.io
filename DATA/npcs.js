const NPCS = [
    {
        id: "sabioown",
        nome: "Sabio Own",
        rosto: "Sprites/Npcs/Capa/sabio_capa.svg",
        sprites: ["Sprites/Npcs/sabio.svg"],
        hover: "Sprites/Npcs/sabio-hover.svg",
        falasEspeciais: true,
    },
    {
        id: "guarda",
        nome: "Guarda Real Own",
        rosto: "Sprites/Npcs/Capa/guarda_capa.svg",
        sprites: ["Sprites/Npcs/guarda.svg"],
        hover: "Sprites/Npcs/guarda.svg",
        falasEspeciais: false,
    },
    {
        id: "mestreWei",
        nome: "Mestre Wei",
        rosto: "Sprites/Npcs/Capa/mestre_capa.svg",
        sprites: ["Sprites/Npcs/mestre.svg"],
        hover: "Sprites/Npcs/mestre.svg",
        falasEspeciais: false,
    },
    {
        id: "dex",
        nome: "Dex",
        rosto: "Sprites/Npcs/dex.svg",
        sprites: ["Sprites/Npcs/dex.svg"],
        hover: "Sprites/Npcs/dex.svg",
        falasEspeciais: false,
    },
    {
        id: "viajante",
        nome: "Lucy o viajante",
        rosto: "Sprites/Npcs/viajante.svg",
        sprites: ["Sprites/Npcs/viajante.svg"],
        hover: "Sprites/Npcs/viajante.svg",
        falasEspeciais: false,
    },
    {
        id: "guardiao",
        nome: "Guardião Da Floresta",
        rosto: "Sprites/Npcs/guardião.svg",
        sprites: ["Sprites/Npcs/guardião.svg"],
        hover: "Sprites/Npcs/guardião.svg",
        falasEspeciais: false,
    },
    {
        id: "king",
        nome: "King Only",
        rosto: "Sprites/Npcs/king.svg",
        sprites: ["Sprites/Npcs/king.svg"],
        hover: "Sprites/Npcs/king.svg",
        falasEspeciais: false,
    },
    {
        id: "defantes",
        nome: "Defantes",
        rosto: "Sprites/Npcs/defantes.svg",
        sprites: ["Sprites/Npcs/defantes.svg"],
        hover: "Sprites/Npcs/defantes.svg",
        falasEspeciais: false,
    },
]

function getNpc(id){
    const NPC = NPCS.find(n => n.id === id);
    return NPC ? NPC : null;
}