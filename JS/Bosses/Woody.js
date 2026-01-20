class Woody extends Boss{
    constructor(){
        super(1);
        this.movimentacao = null;

        this.movimentos = [
            [2,3], [2,4], [3,4], [4, 4], [4, 3], [4, 2], [4, 1],
            [3, 1], [2, 1], [1, 1], [1, 2], [1, 3], [1, 4], [1, 3]
        ];

        this.moverLoop(this.movimentos, 500);
    }

    static gerar(){
        let boss = new Woody();
    }
}
