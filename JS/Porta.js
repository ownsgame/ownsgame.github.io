class Porta {
    constructor(elemento, link){
        this.elemento = elemento;
        this.link = link;
        this.fundar();
        this.linkagem();
    }

    fundar(){
        this.elemento.classList.add("porta");
        this.elemento.classList.add("tamPadrao");
    }

    linkagem(){
        this.elemento.addEventListener("click", ()=>{
            location.replace(this.link);
        });
    }
}