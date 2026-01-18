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
    }
]

function getNpc(id){
    const NPC = NPCS.find(n => n.id === id);
    return NPC ? NPC : null;
}