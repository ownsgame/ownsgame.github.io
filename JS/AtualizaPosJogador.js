
function atualizarPos(){
    const QUADRADOS = document.querySelectorAll(".tiles");
    const INIMIGOS = document.querySelectorAll(".inimigo");
    QUADRADOS.forEach(quadrado => {
        quadrado.addEventListener("click", () => {
            if(document.getElementById("status")){
                if(quadrado.classList.contains("bau")){
                    ChamadorAcao.mudarEstado(1);
                } else {
                    ChamadorAcao.mudarEstado(0);
                }
            }
            

            QUADRADOS.forEach(q => {
                if(q.classList.contains("special-Border")){
                    q.classList.remove("special-Border");
                }
            });
            INIMIGOS.forEach(q => q.style.border = "none");

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
            INIMIGOS.forEach(q => q.style.border = "none");

            jogador.mover(inimigo.style.gridRow, inimigo.style.gridColumn);
            inimigo.classList.add("special-Border");
        });
    });

}
atualizarPos();