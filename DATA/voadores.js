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
        id: "energiaFloresta",
        nome: "Energia da Floresta",
        dano: 4,
        tempo: 1000,
        velocidade: 80,
        tempoVida: 6000,
        tamanho: "Médio",
        sprites: [[
            "Sprites/Enemys/1/forest_energy[0][0].svg", 
            "Sprites/Enemys/1/forest_energy[0][1].svg",
            "Sprites/Enemys/1/forest_energy[0][2].svg",  
        ]],
    },
    {
        id: "blue_ghost",
        nome: "Ghosts Azuis",
        dano: 2,
        tempo: 2000,
        velocidade: 150,
        tempoVida: 12000,
        tamanho: "Médio",
        sprites: [[
            "Sprites/Enemys/blue_ghost[0][1].svg", 
            "Sprites/Enemys/blue_ghost[0][0].svg",
            "Sprites/Enemys/blue_ghost[0][2].svg",
            "Sprites/Enemys/blue_ghost[0][0].svg",  
        ]],
    },
    {
        id: "fogoGrego",
        nome: "Fogo Grego",
        dano: 5,
        tempo: 200,
        velocidade: 40,
        tempoVida: 10000,
        tamanho: "Médio",
        sprites: [[
            "Sprites/Enemys/2/fogoGrego[0][0].svg", 
            "Sprites/Enemys/2/fogoGrego[0][1].svg",
            "Sprites/Enemys/2/fogoGrego[0][2].svg",
        ]],
    },
    {
        id: "vigilantes",
        nome: "vigilantes",
        dano: 8,
        tempo: 200,
        velocidade: 60,
        tempoVida: 11000,
        tamanho: "Médio",
        sprites: [[
            "Sprites/Enemys/2/vigilantes[0][0].svg", 
            "Sprites/Enemys/2/vigilantes[0][1].svg",
            "Sprites/Enemys/2/vigilantes[0][0].svg",
            "Sprites/Enemys/2/vigilantes[0][2].svg", 
            "Sprites/Enemys/2/vigilantes[0][0].svg",
            "Sprites/Enemys/2/vigilantes[0][3].svg", 
            "Sprites/Enemys/2/vigilantes[0][0].svg",
            "Sprites/Enemys/2/vigilantes[0][4].svg",     
        ]],
    },
    {
        id: "lambisgoias",
        nome: "Lambisgoias",
        dano: 5,
        tempo: 200,
        velocidade: 60,
        tempoVida: 18000,
        tamanho: "Médio",
        sprites: [[
            "Sprites/Enemys/2/lambisgoia[0][0].svg", 
            "Sprites/Enemys/2/lambisgoia[0][1].svg", 
            "Sprites/Enemys/2/lambisgoia[0][2].svg", 
            "Sprites/Enemys/2/lambisgoia[0][3].svg", 
        ]],
    },
];

function getVoador(id){
    const voador = VOADORES.find(v => v.id === id);
    return voador ? voador : null;
}