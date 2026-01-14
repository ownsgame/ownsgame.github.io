class Description {
    
    constructor(elemento, descricao){
        this.elemento = elemento;
        this.descricao = descricao;
        this.eventos();
    }

    eventos(){
        this.elemento.addEventListener("mouseenter", ()=>{
            const descricaoEl = document.querySelector(".description");

            if(descricaoEl.style.opacity == 0){
                descricaoEl.style.opacity = 1;
            }

            descricaoEl.innerHTML = `<p>${this.descricao}</p>`;
        });

        this.elemento.addEventListener("mouseleave", ()=>{
            const descricaoEl = document.querySelector(".description");

            if(descricaoEl.style.opacity == 1){
                descricaoEl.style.opacity = 0;
            }

            descricaoEl.innerHTML = `<p></p>`;
        });

        this.elemento.addEventListener("mousemove", (evento)=>{
            const descricaoEl = document.querySelector(".description");

            descricaoEl.style.left = evento.pageX + 10 + "px";
            descricaoEl.style.top = evento.pageY + 10 + "px";
        });

    }
}