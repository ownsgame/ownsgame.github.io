const VOADORES = [
    {
        id: "bird",
        nome: "Pássaro da Floresta",
        dano: 2,
        tempo: 200,
        velocidade: 50,
        tempoVida: 12000,
        tamanho: "Médio",
        sprites: [[
            "Sprites/Enemys/1/bird[0][0].svg", 
            "Sprites/Enemys/1/bird[0][1].svg",
            "Sprites/Enemys/1/bird[0][0].svg", 
            "Sprites/Enemys/1/bird[0][1].svg",
            "Sprites/Enemys/1/bird[0][0].svg", 
            "Sprites/Enemys/1/bird[0][2].svg"
        ]],
    },
    {
        id: "blue_ghost",
        nome: "Ghosts Azuis",
        dano: 2,
        tempo: 1000,
        velocidade: 150,
        tempoVida: 12000,
        tamanho: "Médio",
        sprites: [[
            "Sprites/Enemys/blue_ghost[0][0].svg", 
            "Sprites/Enemys/blue_ghost[0][1].svg", 
        ]],
    }
];

function getVoador(id){
    const voador = VOADORES.find(v => v.id === id);
    return voador ? voador : null;
}