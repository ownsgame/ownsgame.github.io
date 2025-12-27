const NPCS = [
    {
        id: "sabioown",
        nome: "Sabio Own",
        rosto: "Sprites/Npcs/sabio.svg",
        sprites: ["Sprites/Npcs/sabio.svg"],
        hover: "Sprites/Npcs/sabio-hover.svg",
        falasEspeciais: true,
    }
]

function getNpc(id){
    const NPC = NPCS.find(n => n.id === id);
    return NPC ? NPC : null;
}