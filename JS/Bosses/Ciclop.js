class Ciclop extends Boss{
    constructor(){
        super(2);
        this.movimentacao = null;

        this.movimentos = [
            [2,3], [2,4], [3,4], [3,3], [2,3], [2, 2], [2, 1], [1, 1], [1, 2], [1, 3], [1, 4], 
            [2,3], [3, 4], [4, 4], [4, 3], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2],
        ];

        this.moverLoop(this.movimentos, 350);
    }

    static gerar(){
        let boss = new Ciclop();
    }
}
