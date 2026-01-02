
function atualizarPos(){
    const QUADRADOS = document.querySelectorAll(".tiles");
    const INIMIGOS = document.querySelectorAll(".inimigo");
    QUADRADOS.forEach(quadrado => {
        quadrado.addEventListener("click", () => {
            if(document.getElementById("status")){

                let posX = parseInt(quadrado.style.gridRow);
                let posY = parseInt(quadrado.style.gridColumn);
            }
            
            QUADRADOS.forEach(q => {
                if(q.classList.contains("special-Border")){
                    q.classList.remove("special-Border");
                }
            });

            INIMIGOS.forEach(q => q.classList.remove("special-Border"));

            jogador.mover(quadrado.style.gridRow, quadrado.style.gridColumn);
            
            quadrado.classList.add("special-Border");
        });
    });
    
    INIMIGOS.forEach(inimigo => {
        inimigo.addEventListener("click", () => {

            QUADRADOS.forEach(q => {
                if(q.classList.contains("special-Border")){
                    q.classList.remove("special-Border");
                }
            });
            
            let posX = parseInt(inimigo.style.gridRow);
            let posY = parseInt(inimigo.style.gridColumn);
            let quadrado = getTileInPosition(posX, posY);
            
            quadrado.classList.add("special-Border");

            jogador.mover(inimigo.style.gridRow, inimigo.style.gridColumn);
            
        });
    });
}

atualizarPos();