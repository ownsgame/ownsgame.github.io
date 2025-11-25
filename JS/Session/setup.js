function criarDados(){
    const dados = {
        nome: "player",
        iniciante: true,

        vidaBase: 100,
        vidaExtra: 0,
        vidaAumento: 1,

        get vida() {
            return (this.vidaBase + this.vidaExtra) * this.vidaAumento;
        },
        

        defesaBase: 0,
        defesaExtra: 0,
        defesaAumento: 1,

        get defesa() {
            return (this.defesaBase + this.defesaExtra) * this.defesaAumento;
        },

        danoBase: 10,
        danoExtra: 0,
        danoAumento: 1,

        get dano() {
            return (this.danoBase + this.danoExtra) * this.danoAumento;
        }, 

        inventario: [],

        recursos:[],

        
        chefes: [false, false, false, false, false,],
        mapas:[false, false, false, false, false],
        exploracao: [false, false, false, false, false,],

    }

    if(!localStorage.getItem("atributos")){
        localStorage.setItem("atributos", JSON.stringify(dados));
    }   
}

criarDados();