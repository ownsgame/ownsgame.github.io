const BOSSES = [
    {
        id: 1,
        nome: "Woody",
        titulo: "Rei da Floresta Taara",
        capa: "Sprites/Capa/b_woody.svg",
        sprites: [["Sprites/Bosses/woody.svg"]],
        vida: 600,
        defesa: 5,
        ataque: 20,
        forca: 210
    },
    {
        id: 2,
        nome: "Polifemo",
        titulo: "o Ciclope",
        capa: "Sprites/Capa/b_ciclop.svg",
        sprites: [["Sprites/Bosses/ciclop.svg"]],
        vida: 1600,
        defesa: 10,
        ataque: 50,
        forca: 575
    },
    {
        id: 3,
        nome: "Dom Corazón",
        titulo: "Conde do Reino Tales",
        capa: "Sprites/Capa/b_cavaleiro.svg",
        sprites: [["Sprites/Bosses/cavaleiro.svg"]],
        vida: 4000,
        defesa: 50,
        ataque: 70,
        forca: 1376
    },
    {
        id: 4,
        nome: "Yara",
        titulo: "Senhorita de Condon",
        capa: "Sprites/Capa/b_bailarina.svg",
        sprites: [["Sprites/Bosses/woody.svg"]],
        vida: 7000,
        defesa: 75,
        ataque: 80,
        forca: 2385
    },
    {
        id: 5,
        nome: "Yudi",
        titulo: "Craque do Reino Brasa",
        capa: "Sprites/Capa/b_craque.svg",
        sprites: [["Sprites/Bosses/Yudi.svg"]],
        vida: 10000,
        defesa: 100,
        ataque: 100,
        forca: 3400
    },
    {
        id: 6,
        nome: "Lord Orakana",
        titulo: "17° shogun do clã: 馬鹿な",
        capa: "Sprites/Capa/b_lord.svg",
        sprites: [["Sprites/Bosses/Lord_Orakana.svg"]],
        vida: 30000,
        defesa: 250,
        ataque: 250,
        forca: 10166
    }
]

function getBoss(id){
    const boss = BOSSES.find(b => b.id === id);
    return boss ? boss : null;
}